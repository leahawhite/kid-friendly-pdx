const data = { 
  places: [
    {
      id: 1,
      name: "Atlas Pizza",
      address: "6529 SE Foster Rd, Portland, OR 97206",
      neighborhood: "SE",
      phone: "503-232-3004",
      website: "http://atlaspizzapdx.com",
      hours: [
        {
          "dayOfWeek": "Monday",
          "opens": "12:00 pm",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Tuesday",
          "opens": "12:00 pm",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Wednesday",
          "opens": "12:00 pm",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Thursday",
          "opens": "12:00 pm",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Friday",
          "opens": "12:00 pm",
          "closes": "12:00 am",
        },
        {
          "dayOfWeek": "Saturday",
          "opens": "12:00 pm",
          "closes": "12:00 am",
        },
        {
          "dayOfWeek": "Sunday",
          "opens": "12:00 pm",
          "closes": "11:00 pm",
        },
      ],
      date_added: "2019-06-13",
      category: "restaurants",
      descriptors: [ "pizza", "arcade", "beer" ],
      features: { 
        "toys": true, 
        "play area": true, 
        "arcade": true,
        "quick service": true,
        "all ages": true,
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": false,
        "highchairs/boosters": false,
        "changing station": false,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [
        {
          id: 1,
          src: 'https://lh3.googleusercontent.com/ir83SjI1lJpHK4E5vQFwD7LfyE__eKaIvBtmFf1nV5wyfq-z5LVe4u7PuQvQ7ycqsFlGMe5vw3UNRB86G3SjLckIZKHgFSkz0-oQdLAAP2UxlUwq-HqDA116RjcI3iG-lA1ftsYr9S4=w2400',
          title: `Atlas Pizza's 'Jalapeno Popper' pie`,
          place_id: 1,
          user_id: 2,
          review_id: 1,
        },
        {
          id: 2,
          src: 'https://lh3.googleusercontent.com/CjUvS4WgCiSRTsUUAryiPcczqAdyaSDhDg1ZTT6OrdgjfdNiTE5Q14pwI-C2m49tSjQHMnBxDgpiZyYZkxEDE3KzI3DWLsT631ROrF1zTuJcBqEXcRN8PP5U3EcG-bmMclE_uKmWh2E=w2400',
          title: 'A rainbow over Foster Blvd',
          place_id: 1,
          user_id: 1,
          review_id: 2,
        },
        {
          id: 3,
          src: 'https://lh3.googleusercontent.com/2-dLhEkgnU4-n62Nq4X1X2u5FjGRp5Hb5Wkwq1m1cuHbAqdJmrhih2MKdggGIncaWTMf3STdOGZgOMwaYa3nx1k6j2dA6Fs6kyys-i1yW2kw1jxG-Q9EmijXM0EosofSIpsTyoAdJns=w2400',
          title: 'Fresh loaf!',
          place_id: 2,
          user_id: 3,
          review_id: 3,
        },
        {
          id: 4,
          src: 'https://lh3.googleusercontent.com/HDU-n0GE-3Glgn8o1WEDaRsUzhuA5qvLqoZjZzQCx1LwtOucN9zmWZ3YX_Lnce4_kp-sBcB8-6wXjiq9NjacD27tysnJt6eITsmlWGHj1WIRiCpLIzme95n-vK3ydgNBizXtHXTrkMY=w2400',
          title: 'A box of assorted pastries',
          place_id: 2,
          user_id: 3,
          review_id: 3,
        },
      ],
      number_of_reviews: 2,
      average_review_rating: 4.5,
    },
    {
      id: 2,
      name: "Grand Central Bakery",
      address: "4412 SE Woodstock Blvd, Portland, OR 97206",
      neighborhood: "SE",
      phone: "503-953-1250",
      website: "https://www.grandcentralbakery.com/find-us/portland/woodstock/",
      hours: [
        {
          "dayOfWeek": "Monday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Tuesday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Wednesday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Thursday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Friday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Saturday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
        {
          "dayOfWeek": "Sunday",
          "opens": "7:00 am",
          "closes": "6:00 pm",
        },
      ],
      date_added: "2019-06-13",
      category: "restaurants",
      descriptors: [ "cafe", "bakery", "pastries", ],
      features: { 
        "toys": false, 
        "play area": false, 
        "arcade": false,
        "quick service": true,
        "all ages": true,
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": false,
        "highchairs/boosters": true,
        "changing station": true,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [
        {
          id: 1,
          src: 'https://lh3.googleusercontent.com/2-dLhEkgnU4-n62Nq4X1X2u5FjGRp5Hb5Wkwq1m1cuHbAqdJmrhih2MKdggGIncaWTMf3STdOGZgOMwaYa3nx1k6j2dA6Fs6kyys-i1yW2kw1jxG-Q9EmijXM0EosofSIpsTyoAdJns=w2400',
          title: 'Fresh loaf!',
          place_id: 2,
          user_id: 3,
          review_id: 3,
        },
        {
          id: 2,
          src: 'https://lh3.googleusercontent.com/HDU-n0GE-3Glgn8o1WEDaRsUzhuA5qvLqoZjZzQCx1LwtOucN9zmWZ3YX_Lnce4_kp-sBcB8-6wXjiq9NjacD27tysnJt6eITsmlWGHj1WIRiCpLIzme95n-vK3ydgNBizXtHXTrkMY=w2400',
          title: 'A box of assorted pastries',
          place_id: 2,
          user_id: 3,
          review_id: 3,
        },
      ],
      number_of_reviews: 1,
      average_review_rating: 4,
    },
    {
      id: 3,
      name: "Hopworks Urban Brewery: Powell",
      address: "2944 SE Powell Blvd, Portland, OR 97202",
      neighborhood: "SE",
      phone: "503-232-4677",
      website: "https://hopworksbeer.com/eat/powell/",
      hours: [
        {
          "dayOfWeek": "Monday",
          "opens": "11:00 am",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Tuesday",
          "opens": "11:00 am",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Wednesday",
          "opens": "11:00 am",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Thursday",
          "opens": "11:00 am",
          "closes": "11:00 pm",
        },
        {
          "dayOfWeek": "Friday",
          "opens": "11:00 am",
          "closes": "12:00 am",
        },
        {
          "dayOfWeek": "Saturday",
          "opens": "11:00 am",
          "closes": "12:00 am",
        },
        {
          "dayOfWeek": "Sunday",
          "opens": "11:00 am",
          "closes": "11:00 pm",
        },
      ],
      date_added: "2019-06-13",
      category: "restaurants",
      descriptors: [ "pizza", "burgers", "beer",],
      features: { 
        "toys": true, 
        "play area": true, 
        "arcade": false,
        "quick service": true,
        "all ages": true,
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": true,
        "highchairs/boosters": true,
        "changing station": true,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [
        {
          id: 1,
          src: 'https://lh3.googleusercontent.com/7dA-7cI0-Ta-7QQ3k4ttgNuKjFNBhizMLXGF873v5nOWioblzEvWQn5r9HrZ4U13C31lZARcw3Yh6ZqiPX0hfqtRE9tpy3h9-toE9vf2QHDGd-355aLAWV5mOprQTJ0CybWQwO3zj-Y=w2400',
          title: 'Plus one for beer sampler presentation!',
          place_id: 3,
          user_id: 4,
          review_id: 4,
        },
        {
          id: 2,
          src: 'https://lh3.googleusercontent.com/QsdaLX-XqlpIMZO2I1rv_pBubbRyxB2PHg4c2B-Pg2nSU0gV1Cgkbq759pKLU-ZleVam7r_Kh7DOiFjiCUlc6fzPFADGTgtlV73QeFk_0JUM_PAyaHFtn7b81p0QhjQIJjMfiaiKHNc=w2400',
          title: "HUB exterior",
          place_id: 3,
          user_id: 4,
          review_id: 4
        }
      ],
      number_of_reviews: 1,
      average_review_rating: "4.4",
    },
  ],
  users: [
    { 
      id: 1,
      full_name: "Charlie Kelly",
      email: "charlie@alwayssunny.com",
      password: "Charlie100%",
      display_name: "Charlie",
      date_created: "2019-06-13",
    },
    { 
      id: 2,
      full_name: "Ronald McDonald",
      email: "mac@alwayssunny.com",
      password: "Mac100%!",
      display_name: "Mac",
      date_created: "2019-06-13",
    },
    { 
      id: 3,
      full_name: "Deandra Reynolds",
      email: "sweetdee@alwayssunny.com",
      password: "SweetDee100%",
      display_name: "Sweet Dee",
      date_created: "2019-06-13",
    },
    { 
      id: 4,
      full_name: "Dennis Reynolds",
      email: "dennis@alwayssunny.com",
      password: "Dennis100%",
      display_name: "Dennis",
      date_created: "2019-06-13",
    },
  ],
  reviews: [
  { 
    id: 1,
    star_rating: 5,
    text: "Awesome Big Trouble in Little China poster!",
    date_created: "2019-06-13",
    place_id: 1,
    user_id: 2,
    images: [
      {
        id: 1,
        src: 'https://lh3.googleusercontent.com/ir83SjI1lJpHK4E5vQFwD7LfyE__eKaIvBtmFf1nV5wyfq-z5LVe4u7PuQvQ7ycqsFlGMe5vw3UNRB86G3SjLckIZKHgFSkz0-oQdLAAP2UxlUwq-HqDA116RjcI3iG-lA1ftsYr9S4=w2400',
        title: `Atlas Pizza's 'Jalapeno Popper' pie`,
        place_id: 1,
        user_id: 2,
      },
    ]
  },
  { 
    id: 2,
    star_rating: 4,
    text: "Very easy place to take kids of all ages. Nice toy area with a great variety of toys!",
    date_created: "2019-06-13",
    place_id: 1,
    user_id: 1,
    images: [
      {
        id: 1,
        src: 'https://lh3.googleusercontent.com/CjUvS4WgCiSRTsUUAryiPcczqAdyaSDhDg1ZTT6OrdgjfdNiTE5Q14pwI-C2m49tSjQHMnBxDgpiZyYZkxEDE3KzI3DWLsT631ROrF1zTuJcBqEXcRN8PP5U3EcG-bmMclE_uKmWh2E=w2400',
        title: 'A rainbow over Foster Blvd',
        place_id: 1,
        user_id: 1,
      },
    ]
  },
  { 
    id: 3,
    star_rating: 4,
    text: "Sidewalk picnic tables are a bonus. Kids can explore the other shops on the street and play with dogs.",
    date_created: "2019-06-13",
    place_id: 2,
    user_id: 3,
    images: [ 
      {
        id: 1,
        src: 'https://lh3.googleusercontent.com/2-dLhEkgnU4-n62Nq4X1X2u5FjGRp5Hb5Wkwq1m1cuHbAqdJmrhih2MKdggGIncaWTMf3STdOGZgOMwaYa3nx1k6j2dA6Fs6kyys-i1yW2kw1jxG-Q9EmijXM0EosofSIpsTyoAdJns=w2400',
        title: 'Fresh loaf!',
        place_id: 2,
        user_id: 3,
        review_id: 3,
      },
      {
        id: 2,
        src: 'https://lh3.googleusercontent.com/HDU-n0GE-3Glgn8o1WEDaRsUzhuA5qvLqoZjZzQCx1LwtOucN9zmWZ3YX_Lnce4_kp-sBcB8-6wXjiq9NjacD27tysnJt6eITsmlWGHj1WIRiCpLIzme95n-vK3ydgNBizXtHXTrkMY=w2400',
        title: 'A box of assorted pastries',
        place_id: 2,
        user_id: 3,
        review_id: 3,
      },
    ],
  },
  { 
    id: 4,
    star_rating: 4,
    text: "Great beer, great kids menu. Two separate play areas for kids, along with coloring sheets and crayons.",
    date_created: "2019-06-13",
    place_id: 3,
    user_id: 4,
    images: [
      {
        id: 1,
        src: 'https://lh3.googleusercontent.com/7dA-7cI0-Ta-7QQ3k4ttgNuKjFNBhizMLXGF873v5nOWioblzEvWQn5r9HrZ4U13C31lZARcw3Yh6ZqiPX0hfqtRE9tpy3h9-toE9vf2QHDGd-355aLAWV5mOprQTJ0CybWQwO3zj-Y=w2400',
        alt: 'Plus one for beer sampler presentation!',
        place_id: 3,
        user_id: 4,
      },
      {
        id: 2,
        src: 'https://lh3.googleusercontent.com/QsdaLX-XqlpIMZO2I1rv_pBubbRyxB2PHg4c2B-Pg2nSU0gV1Cgkbq759pKLU-ZleVam7r_Kh7DOiFjiCUlc6fzPFADGTgtlV73QeFk_0JUM_PAyaHFtn7b81p0QhjQIJjMfiaiKHNc=w2400',
        alt: "HUB exterior",
        place_id: 3,
        user_id: 4,
      },
    ],
  },
  ]
};

export default data;