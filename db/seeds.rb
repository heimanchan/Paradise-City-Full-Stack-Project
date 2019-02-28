# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
City.delete_all
Spot.delete_all

# USERS
# id = 7
demo = User.create(
  username: "guest",
  first_name: "Guest",
  last_name: "Johnson",
  password: "password"
)

dave = User.create(
  username: "dave",
  first_name: "Dave",
  last_name: "Chan",
  password: "password"
)

nedjohnson = User.create(
  username: "nedjohnson",
  first_name: "Ned",
  last_name: "Johnson",
  password: "password"
)

ryanmapa = User.create(
  username: "ryanmapa",
  first_name: "Ryan",
  last_name: "Mapa",
  password: "password"
)

cindy = User.create(
  username: "cindy",
  first_name: "Cindy",
  last_name: "Ke",
  password: "password"
)

alec = User.create(
  username: "alec",
  first_name: "Alec",
  last_name: "Ning",
  password: "password"
)

# CITIES
# id = 6
sf = City.create({      
  name: "San Francisco"
})

la = City.create({
  name: "la"
})

hk = City.create({
  name: "Hong Kong"
})

paris = City.create({
  name: "Paris"
})

tokyo = City.create({
  name: "Tokyo"
})
 
# SPOTS
spot1 = Spot.create!({
  owner_id: dave.id,
  city_id: sf.id,
  title: 'Awesome home in SF!',
  address: '1490 23rd Ave',
  lat: 37.759870,
  lng: -122.480860,
  max_guests: 3,
  num_bedrooms: 2,
  num_beds: 3,
  price: 190,
  ratings: 4,
  description: 'The guest apartment has its own entrance located on the ground level of our home. The private apartment is 720 sq and has 8 ft ceilings. The living room and kitchen are new and the bath and the two bedrooms are remodeled.
The apartment can sleep 4. The 2 bedrooms have garden view windows. One room with a queen size bed and the second bedroom with two twin size beds. All bed linens are provided.
Private bath has a large shower (two shower heads), cherrywood vanity/sink, and a large mirror. Towels and soap/shampoo are provided.
In the Living room area there is cable TV. Free WiFi is available throughout the apartment.
Guests are welcome to share the garden; there is a large deck with seating and a small table.
Neighborhood is the quiet Sunnyside district. The apartment is within 5 walk minutes of City College (CCSF). In our immediate neighborhood Whole Foods and Safeway supermarkets are within 5-15 walk minutes, 5 drive minutes and there are small cafes and eateries within the neighborhood.
Glen Park is 25 walk or 10 bus minutes away and has several small shops, local restaurants, a postal service, library and is the location of the Glen Park BART station.',
  heat: false,
  pool: false,
  shampoo: false,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})

lst2 = Spot.create!({
  owner_id: ryanmapa.id,
  city_id: la.id,
  title: 'Perfect home in Richmond district',
  address: '4051 19th St',
  lat: 37.759140,
  lng: -122.433880,
  max_guests: 3,
  num_bedrooms: 2,
  num_beds: 3,
  price: 190,
  ratings: 4,
  description: "1895 Victorian flat w/ 12 ft ceilings. (No Long Term Rentals or couples) Close to Mission, & 2.5 blocks from Castro theater. MUNI is 3 blocks away. Room is small and cosy, and great value for one of the most expensive neighborhoods in the US!
More information
The space
We live in an 1895 Victorian top flat with 12 foot ceilings on the best block in San Francisco. Our calendar is always up to date.
Location Location Location~ Our home is close to the Mission, Lower Haight, and 2.5 blocks from the Castro theater. The underground is 3 blocks away, with a street car even closer. The room is small and cosy, but a great price for one of the most expensive neighborhoods in the US!
Please fill out your profile if you are interested~and make sure to arrange a time to meet prior to your arrival, I lead a busy lifestyle, work full time, and wouldn't want to miss anyone! Check in is at 5 and we are 37 steps up from street level.
Restaurants are plentiful and beautiful Dolores Park is quite close. Your room has a twin day bed 75 inches long with a desk and a solid door. The room is 9.25 feet by 8 feet. Amenities include wireless and a gorgeous full kitchen. We have one cat that enjoys company almost as much as we do and a sweet rescue pooch. Our flat gets more light than any other home I've been to in my 13 years of living in this great town.
For all you foodies out there BiRite Creamery, Tartine, Delfina's Pizza and Proper are within 4.5 blocks of our front door. Michelin rated Range is just a few farther.
As much as we love bikes, and we do, we don't have space for storage. If you rent one please return it at the end of the day or lock up on the street at your own risk. Please ask if you would like to have a friend for a short visit.",
  heat: true,
  pool: false,
  shampoo: false,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})