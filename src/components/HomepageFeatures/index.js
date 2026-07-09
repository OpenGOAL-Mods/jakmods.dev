import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export async function copyUrlToClipboard() {
  let modsUrl = "https://jakmods.dev/mods.json";
  await navigator.clipboard.writeText(modsUrl);
  alert("Copied " + modsUrl + " to clipboard");
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container-home">
        <p><a name="install"></a><h1>Installation</h1></p>
          <ol>
            <li>Install the <a href="https://opengoal.dev">OpenGOAL launcher</a></li>
            <li>Click this button to copy our Mod List URL to clipboard: <button onClick={copyUrlToClipboard}>Click to copy!</button></li>
            <li>Paste this URL as a new Mod Source in the OpenGOAL launcher</li>
          </ol>
          <details>
            <summary>Show me the long instructions!</summary>
            <ol>
              <li>Download and install the <a href="https://opengoal.dev">OpenGOAL Launcher</a>. Your launcher version needs to be at least v2.4.10</li>
              <li>Before mods can be installed, go through the Launcher's <i>vanilla installation</i> process for the game(s) you're interested in</li>
              <li>Click this button to copy our Mod List URL to clipboard: <button onclick="copyUrlToClipboard()">Click to copy!</button></li>
              <li>In the OpenGOAL Launcher go to Settings in the lower left, then go to the Mods tab</li>
              <li>Paste the Mod List URL in the box, then press the Add button</li>
              <li>Navigate to game page of your choice, click the Features button, and then the Mods option</li>
              <li>You should see a list of installed and available mods from any list(s) you've added</li>
              <li>Clicking an available mod will download and install the latest release for that mod</li>
              <li>Once installed, clicking a mod brings you to a landing page for the mod. From here you can play the mod, change versions, uninstall, etc.</li>
              <li>For each mod, there can only be one version installed at a given time. When new versions of a mod are available, you should see a notification on the Versions button. You can select which version to install from here, or you'll also be prompted to update the mod before playing (unless you opt out of this behavior).</li>
            </ol>
          </details>
        <p></p>
        <p><h1>Disclaimer ⚠️</h1></p>
        <p>The mod list and the mods themselves are NOT supported by the main OpenGOAL developers!</p>
        <p>For more information see the <a href="docs/faq">FAQ</a>, or join us in the <a href="https://discord.gg/k5PKHta6d8">OpenGOAL Modding Discord server</a> for any questions.</p>
        <p>All mods are installed and ran at your own risk. You can find the repository containing the source code for any mod in our list <a href="https://github.com/OpenGOAL-Mods/jakmods.dev/blob/main/scripts/update-mod-source-data/config.yaml">here</a>.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r9E01A3BlEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p></p>
      </div>
    </section>
  );
}
