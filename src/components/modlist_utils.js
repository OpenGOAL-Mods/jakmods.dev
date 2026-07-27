import React from 'react';
import Parser from 'html-react-parser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function BuildTable(game, data) {
  // parse mods into dict from JSON
  let mods = [];
  for (let mod_id in data.mods) {
    let mod = data.mods[mod_id];

    // skip these
    if (mod["externalLink"]) {continue;}

    let downloads = 0;
    
    // dedupe games
    let games = [...new Set(mod["supportedGames"])];

    console.log(mod["displayName"], game, games, games.indexOf(game));

    // only include mods for requested game
    if (games.indexOf(game) !== -1) {
      let platforms = [];
      for (let version of mod["versions"]) {
        for (let platform in version["assets"]) {
          if (version["assets"][platform]) {
            platforms.push(platform);
          }
        }
        for (let platform in version["assetDownloadCounts"]) {
          if (version["assetDownloadCounts"][platform]) {
            downloads += parseInt(version["assetDownloadCounts"][platform], 10);
          }
        }
      }

      
      let releaseDate = mod["perGameConfig"][game]["releaseDate"];
      mods.push([
        mod["perGameConfig"][game]["displayName"] || mod["displayName"],
        mod["perGameConfig"][game]["description"] || mod["description"],
        mod["authors"].join(", "),
        mod["tags"].sort().join(", "),
        [...new Set(platforms)].join(", "), // dedupe
        releaseDate.substring(0,10),
        downloads,
        mod["websiteUrl"], 
        game
      ]);
    }
  }

  console.log(mods);

  // add blank tables
  let table = document.createElement("table");
  table.style.width="100%";
  // let table = React.createElement("table", { style: {width: "100%"}});
  // console.log(table);
  let row = table.insertRow();
  let cell = row.insertCell();
  cell.style.width="15%"
  cell.innerHTML = "<b>Name</b>";

  cell = row.insertCell();
  cell.style.width = "40%";
  cell.innerHTML = "<b>Description</b>";

  cell = row.insertCell();
  cell.style.width="10%";
  cell.innerHTML = "<b>Contributors</b>";
  
  cell = row.insertCell();
  cell.style.width="15%";
  cell.innerHTML = "<b>Tags</b>";

  cell = row.insertCell();
  cell.style.width="10%";
  cell.innerHTML = "<b>Platforms</b>";

  cell = row.insertCell();
  cell.style.width="5%";
  cell.innerHTML = "<b>Released</b>";
  
  cell = row.insertCell();
  cell.style.width="5%";
  cell.innerHTML = "<b>Downloads</b>";

  cell = row.insertCell();
  cell.style.width="5%";
  cell.innerHTML = "<b>Website</b>";

  // cell = row.insertCell();
  // cell.style.width="5%";
  // cell.innerHTML = "<b>Video(s)</b>";

  // sort by release date desc (recent at top)
  mods = mods.sort((a, b) => b[5].localeCompare(a[5]))
  
  for (let modIdx in mods) {
    let mod = mods[modIdx];

    if (mod[3].indexOf("hidden") >= 0 || mod[3].indexOf("external") >= 0) {
      // skip hidden/external link mods
      continue;
    }

    if (table) {
      row = table.insertRow(); 
      row.insertCell().innerHTML = mod[0];  // name
      row.insertCell().innerHTML = mod[1];  // desc
      row.insertCell().innerHTML = mod[2];  // contributors
      row.insertCell().innerHTML = mod[3];  // tags
      row.insertCell().innerHTML = mod[4];  // platforms
      row.insertCell().innerHTML = mod[5];  // release date
      row.insertCell().innerHTML = mod[6];  // downloads
      if (mod[7] && mod[7] != "") {
        row.insertCell().innerHTML = "<a href=\"" + mod[7] + "\">Website</a>";  // website
      } else {
        row.insertCell().innerHTML = "N/A";
      }
    }
  }

  return table.outerHTML;
}

function ModListTable(props) {
  const { siteConfig } = useDocusaurusContext();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
      fetch('/mods.json') // Assumes this file is in the static folder
        .then(res => res.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  console.log(data);

  return <div>{Parser(BuildTable(props.game, data))}</div>;
}

export default ModListTable;