// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JakMods.dev',
  tagline: 'Welcome! Here you can find mods for the Jak and Daxter games (via OpenGOAL).',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jakmods.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenGOAL-Mods', // Usually your GitHub org/user name.
  projectName: 'jakmods.dev', // Usually your repo name.
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home logo',
          src: 'img/favicon.ico',
        },
        items: [
          {to: 'docs/category/mod-lists', label: 'Mod Lists', position: 'left'},
          {to: 'docs/faq', label: 'FAQ', position: 'left'},
          {to: 'docs/legacy', label: 'Legacy Mod Launcher', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://opengoal.dev',
            label: 'OpenGOAL',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@JakMods',
              }
            ],
          },
          {
            title: 'Discord',
            items: [
              {
                label: 'JakMods',
                href: 'https://discord.com/invite/k5PKHta6d8',
              },
              {
                label: 'OpenGOAL',
                href: 'https://discord.gg/VZbXMHXzWv',
              },
              {
                label: 'Jak Speedruns',
                href: 'https://discord.gg/UPaQy8ZUAa',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'JakMods',
                href: 'https://github.com/orgs/OpenGOAL-Mods',
              },
              {
                label: 'OpenGOAL',
                href: 'https://github.com/open-goal',
              }
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["lisp", "clojure", "diff"],
      },
    }),
};

export default config;
