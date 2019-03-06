# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# File.open()
# open("https://hhjskfh")

User.delete_all
City.delete_all
Spot.delete_all


# USERS
# id = 7
demo = User.new(
  username: "guest",
  first_name: "Guest",
  last_name: "Johnson",
  password: "password"
)
demo.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/demo_user.jpg"), filename: "demo_user.jpg")
demo.save!

dave = User.new(
  username: "dave",
  first_name: "Dave",
  last_name: "Chan",
  password: "password"
)
dave.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/dave.jpg"), filename: "dave.jpg")
dave.save!

ned= User.new(
  username: "nedjohnson",
  first_name: "Ned",
  last_name: "Johnson",
  password: "password"
)
ned.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/ned.jpg"), filename: "ned.jpg")
ned.save!

ryanmapa = User.new(
  username: "ryanmapa",
  first_name: "Ryan",
  last_name: "Mapa",
  password: "password"
)
ryanmapa.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/ryanmapa.jpg"), filename: "ryanmapa.jpg")
ryanmapa.save!

cindy = User.new(
  username: "cindy",
  first_name: "Cindy",
  last_name: "Ke",
  password: "password"
)
cindy.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/cindy.jpg"), filename: "cindy.jpg")
cindy.save!

alec = User.new(
  username: "alec",
  first_name: "Alec",
  last_name: "Ning",
  password: "password"
)
alec.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/alec.jpg"), filename: "alec.jpg")
alec.save!

# CITIES
# id = 6
sf = City.create({      
  name: "San Francisco"
})

la = City.create({
  name: "Los Angeles"
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
  title: 'Lovely Remodeled, Fully Furnished 1 brm/1ba Apt in Cow Hollow!',
  address: '900 Baker St',
  lat: 37.759870,
  lng: -122.480860,
  max_guests: 3,
  num_bedrooms: 2,
  num_beds: 2,
  price: 89,
  ratings: 4,
  description: 'Enter through the newly landscaped garden into this private, quiet 1 bedroom, 1 bath apartment which has been recently remodeled, tastily furnished and fully equipped for maximum comfort. New hardwood floors, stainless steel appliances, quartz and marble countertops, lovely linens, and a well stocked kitchen make this the perfect home away from home. Cow Hollow is one of the finest neighborhoods in San Francisco - close to the Marina green, Golden Gate Bridge, Presidio Historic Trust recreation area, charming shopping districts, wonderful restaurants, and stately homes. This is truly a spectacular, quiet gem in the City with easy access to downtown via Public Transit, car or bicycle.',
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
spot1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot1_1.jpg"), filename: "spot1.jpg")
spot1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot1_2.jpg"), filename: "spot1.jpg")
spot1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot1_3.jpg"), filename: "spot1.jpg")
spot1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot1_4.jpg"), filename: "spot1.jpg")
spot1.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot1_5.jpg"), filename: "spot1.jpg")
spot1.save!

spot2 = Spot.create!({
  owner_id: ryanmapa.id,
  city_id: sf.id,
  title: 'Controlled Access/Gated, Perfect home in Richmond district',
  address: '4051 19th St',
  lat: 37.759140,
  lng: -122.433880,
  max_guests: 6,
  num_bedrooms: 2,
  num_beds: 3,
  price: 149,
  ratings: 5,
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
  pool: true,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})
spot2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot2_1.jpg"), filename: "spot2.jpg")
spot2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot2_2.jpg"), filename: "spot2.jpg")
spot2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot2_3.jpg"), filename: "spot2.jpg")
spot2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot2_4.jpg"), filename: "spot2.jpg")
spot2.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot2_5.jpg"), filename: "spot2.jpg")
spot2.save!

spot3 = Spot.create!({
  owner_id: ned.id,
  city_id: sf.id,
  title: 'Furnished Architect Designed 4br/2ba 2nd Fl flat GGP/Ocean Beach',
  address: '4051 Balboa St',
  lat: 37.775690,
  lng: -122.5006,
  max_guests: 8,
  num_bedrooms: 3,
  num_beds: 3,
  price: 225,
  ratings: 5,
  description: "CompletelyFurnished Architect Designed 4br/2ba 2nd Fl flat near GGP/Ocean Beach/VA Med (richmond / seacliff) (map)

Availability: 03/01/2019
Rent $5800 per month, includes Water, Garbage pick up, Utility, High speed Internet and Twice a month House Cleaning, One car garage parking 

Security Deposit: $6000

Lease Terms: Minimum 6 months, Non-Smoking, No Pet, No Drugs.

Will charge $200 cleaning fee upon departure.

Description:

Completely Furnished Newly Built Architect Designed Contemporary 4 bedrooms + Study and 2 full baths 2nd floor Flat (master bath has shower and Whirlpool Tub) 

40th Avenue at Balboa St., San Francisco

For Long Term Rental only

Email for appointment.",
  heat: true,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: false,
  iron: false,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})
spot3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot3_1.jpg"), filename: "spot3.jpg")
spot3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot3_2.jpg"), filename: "spot3.jpg")
spot3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot3_3.jpg"), filename: "spot3.jpg")
spot3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot3_4.jpg"), filename: "spot3.jpg")
spot3.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot3_5.jpg"), filename: "spot3.jpg")
spot3.save!

spot4 = Spot.create!({
  owner_id: cindy.id,
  city_id: la.id,
  title: 'Near Metro - Brand New 2 Bed/2 Bath Condo available',
  address: '1741-1701 N Las Palmas Ave',
  lat: 34.101763,
  lng: -118.337468,
  max_guests: 4,
  num_bedrooms: 2,
  num_beds: 3,
  price: 120,
  ratings: 5,
  description: "Brand new condo unit available for rent in brand new building. Very walk-able location. (Walkscore of 97 out of 100)

Includes In-Unit Washer and Dryer. Also stainless steel appliances (not pictured): Refrigerator, Oven, Gas Stove, Microwave and Dishwasher. 

Large bathrooms and large closets with built-in shelving. Recessed lighting throughout the unit.

1751 North Las Palmas Avenue has a Walk Score of 97 out of 100. This location is a Walker's Paradise so daily errands do not require a car.

1751 North Las Palmas Avenue is a five minute walk from the Metro Red Line (802) at the Hollywood / Highland Station stop.

This location is in the Hollywood Hills West neighborhood in Los Angeles. Nearby parks include Las Palmas Playground, Whitley Heights Historic District, and Hollywood Franklin Park.

Very close the Hollywood Highland mall. Right in the scene of Hollywood where there are top and classic hotels, restaurants, museums, and theaters. Live in the heart of it all!

Price and availability subject to change without notice. Listing description and square footage are estimates and should be verified by tenant prior to signing lease.",
  heat: false,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: false,
  iron: false,
  hair_dryer: true,
  first_aid: false,
  laundry: true
})
spot4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot4_1.jpg"), filename: "spot4.jpg")
spot4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot4_2.jpg"), filename: "spot4.jpg")
spot4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot4_3.jpg"), filename: "spot4.jpg")
spot4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot4_4.jpg"), filename: "spot4.jpg")
spot4.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot4_5.jpg"), filename: "spot4.jpg")
spot4.save!
