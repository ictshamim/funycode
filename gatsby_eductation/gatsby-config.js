
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
          "G-4V0JJW8TDB", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,

        },
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9483917614813765',
        crossorigin: 'anonymous',
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-education',
      options: {
        // Add theme options here
        collectionPostsPerPage:12,
      }
    },
  ],


  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Funycode',
    name: 'Funycode',
    description: 'My site description...',
    address: 'Dhaka, Bangladesh',
    email: 'ictshamim@yahoo.com',
    phone: '+88010101010',
    siteUrl: "https://funycode.com",

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
        slug: '/category/basic-c-tutorial/'
      },
      {
        name: 'C++',
        slug: '/category/cplusplus-tutorial/'
      },

      {
        name: 'Java',
        slug: '/category/java-tutorial/'
      },
      {
        name: 'Programming Exercise',
        slug: '/category/programming-exercise/'
      },


    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Home',
            slug: '/'
          },
          {
            name: 'C Programming',
            slug: '/category/basic-c-tutorial/'
          },
          {
            name: 'C++',
            slug: '/category/cplusplus-tutorial/'
          },
        ]
      },
      {
        title: 'Join Us',
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
