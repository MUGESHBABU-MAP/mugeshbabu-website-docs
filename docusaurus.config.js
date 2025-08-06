// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// // Replace below with your repo details
// url: 'https://docs.mugeshbabu.com',
// baseUrl: '/',
// projectName: 'YOUR_REPO', // usually your repo name
// organizationName: 'YOUR_USERNAME', // your GitHub username
// trailingSlash: false,

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mugeshbabu / Mugesh Media',
  tagline: 'Mend Mould Make',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // url: 'https://mugeshbabu-map.github.io',
  url: 'https://docs.mugeshbabu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // baseUrl: '/mugeshbabu-website-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mugeshbabu-map', // Usually your GitHub org/user name.
  projectName: 'mugeshbabu-website-docs', // Usually your repo name.

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ta'], // 'ta' is the ISO code for Tamil
    localeConfigs: {
      en: {
        label: 'English',
      },
      ta: {
        label: 'தமிழ்',
        direction: 'ltr', // Tamil is left-to-right
      },
    },
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
          editUrl: 'https://github.com/mugeshbabu-map/mugeshbabu-website-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/mugeshbabu-map/mugeshbabu-website-docs/edit/main/',
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

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'mugeshbabu, cable, internet, utility, support' },
        { name: 'author', content: 'Mugeshbabu Technologies' },
      ],
      // Replace with your project's social card
      image: 'img/ThumbnailMugeshMedia.png',
      navbar: {
        title: 'Mugeshbabu',
        logo: {
          alt: 'Mugeshbabu Logo',
          src: 'img/logo.svg', // Replace this with your actual logo path
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/docs/mugeshbabu', label: 'About', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/mugeshbabu-map/mugeshbabu-website-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pTC9DXUr',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://www.mugeshbabu.com/privacy',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.mugeshbabu.com/privacy',
              },
              {
                label: 'Cookie Policy',
                href: 'https://www.mugeshbabu.com/terms',
              },
              {
                label: 'Refund Policy',
                href: 'https://www.mugeshbabu.com/refund',
              },
            ],
          },
          {
            title: 'Developer',
            items: [
              {
                label: 'Profile',
                to: '/docs/mugeshbabu',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mugeshbabu/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mugeshmedia/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Website',
                href: 'https://www.mugeshbabu.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mugeshbabu-map/mugeshbabu-website-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mugeshbabu.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'EAJ0SXTGF5',
        apiKey: 'bdd388a3cb4c0eed8abbd6da5bc5d178',
        indexName: 'Mugeshbabu Documentation Site', // Usually same as your app name or docs project name
        contextualSearch: true,
        container: '#docsearch',
        searchParameters: {}, // Optional: Algolia search params
      },
    }),
};

export default config;
