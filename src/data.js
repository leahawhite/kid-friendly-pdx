const data = { 
  places: [
    {
      id: 1,
      name: "Atlas Pizza",
      address: "6529 SE Foster Rd, Portland, OR 97206",
      neighborhood: "SE",
      phone: "503-232-3004",
      website: "http://atlaspizzapdx.com",
      hours: {
        "Monday": "12:00-23:00",
        "Tuesday": "12:00-23:00",
        "Wednesday": "12:00-23:00",
        "Thursday": "12:00-23:00",
        "Friday": "12:00-24:00",
        "Saturday": "12:00-24:00",
        "Sunday": "12:00-23:00",
      },
      date_added: "2019-06-13",
      category: "restaurant",
      descriptors: [ "pizza", "arcade", "casual", "dinner", ],
      features: { 
        "toys": true, 
        "play area": true, 
        "arcade": true,
        "quick service": true,
        "ages": {
          "infants": true,
          "toddlers": true,
          "school-age": true,
          "teens": true,
        },
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": false,
        "highchairs/boosters": false,
        "changing station": false,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [],
      number_of_reviews: 2,
      average_review_rating: "",
    },
    {
      id: 2,
      name: "Grand Central Bakery",
      address: "4412 SE Woodstock Blvd, Portland, OR 97206",
      neighborhood: "SE",
      phone: "503-953-1250",
      website: "https://www.grandcentralbakery.com/find-us/portland/woodstock/",
      hours: {
        "Monday": "07:00-18:00",
        "Tuesday": "07:00-18:00",
        "Wednesday": "07:00-18:00",
        "Thursday": "07:00-18:00",
        "Friday": "07:00-18:00",
        "Saturday": "07:00-18:00",
        "Sunday": "07:00-18:00",
      },
      date_added: "2019-06-13",
      category: "restaurant",
      descriptors: [ "cafe", "bakery", "pastries", ],
      features: { 
        "toys": false, 
        "play area": false, 
        "arcade": false,
        "quick service": true,
        "ages": {
          "infants": true,
          "toddlers": true,
          "school-age": true,
          "teens": true,
        },
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": false,
        "highchairs/boosters": true,
        "changing station": true,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [],
      number_of_reviews: 0,
      average_review_rating: "",
    },
    {
      id: 3,
      name: "Hopworks Urban Brewery",
      address: "2944 SE Powell Blvd, Portland, OR 97202",
      neighborhood: "SE",
      phone: "503-232-4677",
      website: "https://hopworksbeer.com/eat/powell/",
      hours: {
        "Monday": "11:00-23:00",
        "Tuesday": "11:00-23:00",
        "Wednesday": "11:00-23:00",
        "Thursday": "11:00-23:00",
        "Friday": "11:00-24:00",
        "Saturday": "11:00-24:00",
        "Sunday": "11:00-23:00",
      },
      date_added: "2019-06-13",
      category: "restaurant",
      descriptors: [ "pizza", "burgers", "brewery",],
      features: { 
        "toys": true, 
        "play area": true, 
        "arcade": true,
        "quick service": true,
        "ages": {
          "infants": true,
          "toddlers": true,
          "school-age": true,
          "teens": true,
        },
        "comfortable seating": true,
        "friendly staff": true,
        "kids menu": false,
        "highchairs/boosters": false,
        "changing station": false,
        "flexible": true,
        "patio/sidewalk": true,
      },
      images: [],
      number_of_reviews: 0,
      average_review_rating: "",
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
    place_id: "1",
    user_id: "2",
  },
  { 
    id: 2,
    star_rating: 4,
    text: "Very easy place to take kids of all ages. Nice toy area with a great variety of toys!",
    date_created: "2019-06-13",
    place_id: "1",
    user_id: "1",
  },
  { 
    id: 3,
    star_rating: 4,
    text: "Sidewalk picnic tables are a bonus. Kids can explore the other shops on the street and play with dogs.",
    date_created: "2019-06-13",
    place_id: "2",
    user_id: "3",
  },
  ]
};

export default data;