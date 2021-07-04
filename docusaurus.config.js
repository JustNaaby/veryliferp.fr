/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  title: 'VeryLife RP',
  tagline: 'Serveur Garry\'Mod - Serious DarkRP',
  url: 'https://veryliferp.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VeryLife RP', // Usually your GitHub org/user name.
  projectName: 'VeryLife RP', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Masque le commutateur dans la barre de navigation
      // Utile si vous voulez prendre en charge un mode de couleur unique
      disableSwitch: true,

      // Devrions-nous utiliser le media-query prefers-color-scheme,
      // en utilisant les préférences du système de l'utilisateur, au lieu de defaultMode codé en dur.
      respectPrefersColorScheme: false,

      // Options d'icône du commutateur sombre/clair
      switchConfig: {
        // Icône du commutateur en mode sombre
        darkIcon: '🌙',

        // CSS à appliquer à l'icône sombre,
        // Objet de style en ligne React
        // consulter https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Les icônes Unicode telles que '\u2600' fonctionnent.
        // Les icônes Unicode à 5 caractères nécessitent des accolades : '\u{1F602}'.
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'VeryLife RP',
      logo: {
        alt: 'VeryLife RP',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'presentation',
          position: 'left',
          label: 'Règlement/Documentation',
        },
        {
          href: 'https://boutique.veryliferp.fr',
          position: 'left',
          label: 'Boutique',
        },
        {
          href: 'https://discord.gg/dJXr5uy2ec',
          label: 'Rejoindre le Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Accès rapide',
          items: [
            {
              label: 'Règlement/Documentation',
              to: '/docs/presentation',
            },
            {
              label: 'MOTD',
              to: '/motd',
            },
            {
              label: 'Boutique',
              to: 'https://boutique.veryliferp.fr',
            },
          ],
        },
        {
          title: 'Nous rejoindre',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/dJXr5uy2ec',
            },
            {
              label: 'Se connecter au serveur',
              href: 'steam://connect/188.165.61.76:27015',
            },
          ],
        },
      ],
      copyright: `Communauté VeryLife RP - ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        //docs: {
        //  sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
       //   editUrl:
       //     'https://github.com/facebook/docusaurus/edit/master/website/',
       // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
