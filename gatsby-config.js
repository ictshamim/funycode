module.exports = {
  pathPrefix: "/funycode",
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {

      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-BSM2QQRET8", // Google Analytics / GAss
               ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
      },
    },
      resolve: '@elegantstack/gatsby-theme-flexiblog-education',
      options: {
        // Add theme options here
        collectionPostsPerPage:12,
      }
    }
  ],


  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Funycode',
    name: 'Funycode',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://facebook.com/Funycode/?notif_id=1627274271611640&notif_t=page_fan&ref=notif'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'C Programming',
        slug: '/category/basic-c-programming/'
      },
      {
        name: 'C++',
        slug: '/category/cplusplus-programming/'
      },

      {
        name: 'Java',
        slug: '/category/java/'
      },

    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/aboutUs'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/privacy-policy'
          },
          {
            name: 'Disclaimer',
            slug: '/disclaimer'
          },
          {
            name: 'Terms Of Use',
            slug: '/terms-and-conditions'
          }
        ]
      }
    ]
  }
}
