# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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

kevin = User.new(
  username: "kevin",
  first_name: "Kevin",
  last_name: "Bai",
  password: "password"
)
kevin.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/kevin.jpg"), filename: "kevin.jpg")
kevin.save!

tim = User.new(
  username: "tim",
  first_name: "Tim",
  last_name: "Cook",
  password: "password"
)
tim.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/tim.jpg"), filename: "tim.jpg")
tim.save!

hhh = User.new(
  username: "hhh",
  first_name: "Paul",
  last_name: "Michael Levesque",
  password: "password"
)
hhh.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/hhh.jpg"), filename: "hhh.jpg")
hhh.save!

chris = User.new(
  username: "chris",
  first_name: "Chris",
  last_name: "Evans",
  password: "password"
)
chris.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/chris.jpg"), filename: "chris.jpg")
chris.save!

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

spot5 = Spot.create!({
  owner_id: dave.id,
  city_id: la.id,
  title: 'Spacious Modern Living! L.A 2 Bd / 2 Ba Apts!!',
  address: '7045 Lanewood Avenue',
  lat: 34.099689,
  lng: -118.343002,
  max_guests: 4,
  num_bedrooms: 1,
  num_beds: 1,
  price: 200,
  ratings: 5,
  description: "Our apartments for rent in Hollywood, CA is a secured community that features spacious one and two bedroom floor plans that include large closets, air conditioning, private oversized patios and in-house washers and dryers! The community also boasts gated underground parking, a beautiful fitness center and more!! The Pines welcomes cats and dogs too; please see our pet policy as some restrictions may apply. Give us a call or stop by to get current availability and to check out all of the amenities!",
  heat: false,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})
spot5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot5_1.jpg"), filename: "spot5.jpg")
spot5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot5_2.jpg"), filename: "spot5.jpg")
spot5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot5_3.jpg"), filename: "spot5.jpg")
spot5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot5_4.jpg"), filename: "spot5.jpg")
spot5.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot5_5.jpg"), filename: "spot5.jpg")
spot5.save!

spot6 = Spot.create!({
  owner_id: ryanmapa.id,
  city_id: la.id,
  title: 'Fully Furnished 1 bed',
  address: '7045 Lanewood Avenue',
  lat: 34.099659,
  lng: -118.313102,
  max_guests: 4,
  num_bedrooms: 1,
  num_beds: 1,
  price: 99,
  ratings: 5,
  description: "Our apartments for rent in Hollywood, CA is a secured community that features spacious one and two bedroom floor plans that include large closets, air conditioning, private oversized patios and in-house washers and dryers! The community also boasts gated underground parking, a beautiful fitness center and more!! The Pines welcomes cats and dogs too; please see our pet policy as some restrictions may apply. Give us a call or stop by to get current availability and to check out all of the amenities!",
  heat: false,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})
spot6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot6_1.jpg"), filename: "spot6.jpg")
spot6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot6_2.jpg"), filename: "spot6.jpg")
spot6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot6_3.jpg"), filename: "spot6.jpg")
spot6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot6_4.jpg"), filename: "spot6.jpg")
spot6.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot6_5.jpg"), filename: "spot6.jpg")
spot6.save!

spot7 = Spot.create!({
  owner_id: ned.id,
  city_id: la.id,
  title: 'STUNNING 1 BED 1 BATH CONDO',
  address: '6201 Hollywood Blvd',
  lat: 34.102250,
  lng: -118.323996,
  max_guests: 2,
  num_bedrooms: 1,
  num_beds: 1,
  price: 160,
  ratings: 5,
  description: "Welcome to Eastown. The new place to live, work, and play in the heart of East Hollywood. An apartment community where contemporary design meets world-class amenities, Eastown offers a modern take on luxury apartment living offering studio, one bedroom apartments and one bedroom live-work lofts for rent in the heart of LAs most iconic neighborhood. Live among the stars on the Hollywood Walk of Fame. A state-of-the-art gym, rooftop pool and spa, and on-site shopping are just a few of the benefits that come with calling Eastown home.",
  heat: false,
  pool: true,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: false,
  hair_dryer: true,
  first_aid: true,
  laundry: true
})
spot7.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot7_1.jpg"), filename: "spot7.jpg")
spot7.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot7_2.jpg"), filename: "spot7.jpg")
spot7.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot7_3.jpg"), filename: "spot7.jpg")
spot7.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot7_4.jpg"), filename: "spot7.jpg")
spot7.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot7_5.jpg"), filename: "spot7.jpg")
spot7.save!

spot8 = Spot.create!({
  owner_id: ned.id,
  city_id: la.id,
  title: 'Fully Furnished Luxury Penthouse - Rates are Negotiable',
  address: '6201 Hollywood Blvd',
  lat: 34.051722,
  lng: -118.262312,
  max_guests: 6,
  num_bedrooms: 2,
  num_beds: 3,
  price: 260,
  ratings: 5,
  description: "Our fully-furnished Live/Work lofts are the best place to live- work - play in Downtown LA. At TENTEN Wilshire fully-furnished apartments you have everything you need including a full business center with multiple board and conference rooms equipped for both video as well as tele-conferencing. * Fully equipped gourmet kitchens with stainless steel appliances *CaesarStone Countertops *Rich hardwood floors throughout, with glass tile bathrooms *Soaking tubs with breathtaking panoramic views *In-unit laundry machines *Custom housekeeping services available *Individual thermostats for optimum cooling and heating *24 hour valet service and garage parking *24 hour courtesy patrol",
  heat: false,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: false,
  hair_dryer: true,
  first_aid: true,
  laundry: false
})
spot8.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot8_1.jpg"), filename: "spot8.jpg")
spot8.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot8_2.jpg"), filename: "spot8.jpg")
spot8.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot8_3.jpg"), filename: "spot8.jpg")
spot8.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot8_4.jpg"), filename: "spot8.jpg")
spot8.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot8_5.jpg"), filename: "spot8.jpg")
spot8.save!

spot9 = Spot.create!({
  owner_id: kevin.id,
  city_id: sf.id,
  title: '2 bed 1 bath For Rent in Crocker Amazon',
  address: 'Mission Terrace, San Francisco, CA 94112',
  lat: 37.719958,
  lng: -122.441540,
  max_guests: 3,
  num_bedrooms: 1,
  num_beds: 1,
  price: 300,
  ratings: 5,
  description: "1st floor Unfurnished 2 bed, 1 bath in Crocker Amazon. A few blocks away from Mission St. Plenty of restaurants, grocery stores, shops, cafes and much more nearby. Short drive to freeways 280 & 101. Close to public transportation. Near City College and SF State. Shared laundry. 1 parking space in driveway.",
  heat: true,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: false,
  iron: true,
  hair_dryer: true,
  first_aid: true,
  laundry: false
})
spot9.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot9_1.jpg"), filename: "spot9.jpg")
spot9.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot9_2.jpg"), filename: "spot9.jpg")
spot9.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot9_3.jpg"), filename: "spot9.jpg")
spot9.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot9_4.jpg"), filename: "spot9.jpg")
spot9.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot9_5.jpg"), filename: "spot9.jpg")
spot9.save!

spot10 = Spot.create!({
  owner_id: ned.id,
  city_id: sf.id,
  title: 'SPECIAL! SPECIAL! SPECIAL! CALL TODAY!',
  address: '3580 W. Grant Line Rd',
  lat: 37.751967,
  lng: -122.443485,
  max_guests: 8,
  num_bedrooms: 4,
  num_beds: 4,
  price: 550,
  ratings: 5,
  description: "Be the first to ever live in these unbeatable luxury apartment homes! Gateway Crossing is Tracy's newest and most desirable apartment homes. Residents can enjoy lying out by the sparkling swimming pool, relaxing in the steaming spa, working out in our state-of-the-art fitness center or taking their fury friend to our onsite dog park. Gateway Crossing has everything at your fingertips without leaving the comfort of your home. Stainless steel appliances, full size washer and dryer and granite counter tops are just a few of the luxuries you will enjoy. ",
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
spot10.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot10_1.jpg"), filename: "spot10.jpg")
spot10.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot10_2.jpg"), filename: "spot10.jpg")
spot10.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot10_3.jpg"), filename: "spot10.jpg")
spot10.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot10_4.jpg"), filename: "spot10.jpg")
spot10.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot10_5.jpg"), filename: "spot10.jpg")
spot10.save!

spot11 = Spot.create!({
  owner_id: chris.id,
  city_id: sf.id,
  title: 'Buchanan & Hermann/$0 Deposit/Flexible Lease Terms/Available Now!',
  address: '78 Buchanan',
  lat: 37.771008,
  lng: -122.426450,
  max_guests: 4,
  num_bedrooms: 2,
  num_beds: 2,
  price: 190,
  ratings: 5,
  description: "*MOVE IN SPECIAL*
Pay $0 Deposit with approved credit. Resident is responsible for any damages to unit at move out.

*FLEXIBLE LEASE TERMS*
Now offering 7-12 month leases and extended move-in dates! Rent will fluctuate based on lease term and move-in date. 
*Cancellation fee applies if move-in is cancelled 2 weeks prior to lease start date*

Take a virtual tour here!
https://real.vision/78-buchanan-street-203?o=u

This apartment is in a fantastic location conveniently located between the neighborhoods of Lower Haight, Hayes Valley, Duboce Triangle and The Mission! You are minutes away from all the attractions that each of those neighborhoods have to offer!

-1 block away from Safeway and Whole Foods
-2 blocks away from the Church Street Muni Station
-3 blocks from Dolores Park
",
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
spot11.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot11_1.jpg"), filename: "spot11.jpg")
spot11.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot11_2.jpg"), filename: "spot11.jpg")
spot11.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot11_3.jpg"), filename: "spot11.jpg")
spot11.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot11_4.jpg"), filename: "spot11.jpg")
spot11.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot11_5.jpg"), filename: "spot11.jpg")
spot11.save!

spot12 = Spot.create!({
  owner_id: tim.id,
  city_id: sf.id,
  title: 'Stylish Features, City and Bay Views, Dog Run',
  address: '1285 Sutter Street',
  lat: 37.787610,
  lng: -122.426450,
  max_guests: 4,
  num_bedrooms: 2,
  num_beds: 2,
  price: 400,
  ratings: 5,
  description: "Open the doors to your new home at ETTA and revel in the floor-to-ceiling windows that give front row seats to San Francisco's beautiful skyline. 


Bright and open two bedroom, two bathroom apartment home featuring walk-in master closet, gourmet kitchen and more!",
  heat: true,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: false,
  hair_dryer: true,
  first_aid: false,
  laundry: true
})
spot12.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot12_1.jpg"), filename: "spot12.jpg")
spot12.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot12_2.jpg"), filename: "spot12.jpg")
spot12.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot12_3.jpg"), filename: "spot12.jpg")
spot12.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot12_4.jpg"), filename: "spot12.jpg")
spot12.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot12_5.jpg"), filename: "spot12.jpg")
spot12.save!

spot13 = Spot.create!({
  owner_id: hhh.id,
  city_id: la.id,
  title: 'Completely Furnished 2 Bedroom Gather Up 3 Roommates & Live Near USC',
  address: '1275 West 30th Street',
  lat: 37.742124,
  lng: -122.427856,
  max_guests: 4,
  num_bedrooms: 2,
  num_beds: 2,
  price: 209,
  ratings: 5,
  description: "This is a 2 bedroom 2 bath. Shared Bedroom, Shared bathroom 


APARTMENT AMENITIES
- 10 ft High Ceilings*
- In Unit Washer and Dryer
- Central AC/Heat Controlled by The Nest
- Quartz Countertops
- All Units Are Fully Furnished
- WiFi in Unit
- Stainless Steel Appliances (Refrigerator, Stove/oven, Microwave, Dishwasher)
- Direct TV
- Private Roof Decks*
- Balconies*
- Direct Community Deck Access*
- Sonos Playbar
- 55' TV
- Each Unit has their Own Victory Beach Cruiser

COMMUNITY AMENITIES
- Community Roof Deck with Lush Landscaping and Views of Los Angeles Skyline
- Community Deck with Lounge Seating and TV
- 24 Hour Video Surveillance
- Secured Bike Storage
- Secured Underground Parking*
- WiFi Throughout Building*
- Direct TV",
  heat: true,
  pool: false,
  shampoo: true,
  tv: true,
  wifi: true,
  air_conditioning: true,
  iron: false,
  hair_dryer: true,
  first_aid: false,
  laundry: true
})
spot13.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot13_1.jpg"), filename: "spot13.jpg")
spot13.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot13_2.jpg"), filename: "spot13.jpg")
spot13.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot13_3.jpg"), filename: "spot13.jpg")
spot13.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot13_4.jpg"), filename: "spot13.jpg")
spot13.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot13_5.jpg"), filename: "spot13.jpg")
spot13.save!

spot14 = Spot.create!({
  owner_id: dave.id,
  city_id: hk.id,
  title: 'Hey, You Found Me! This is Dave Chan!',
  address: 'Tai Po, Hong Kong ',
  lat: 22.452047,
  lng: 114.168858,
  max_guests: 99,
  num_bedrooms: 10,
  num_beds: 20,
  price: 9999,
  ratings: 5,
  description: "This is Dave Chan. I was born and raise and raised in Hong Kong. I like traveling because I can learn different culture and make new friends from different background. Paris is my favorite city. I like to play guitar in my spare which makes me feel peaceful.",
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
spot14.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot14_1.jpg"), filename: "spot14.jpg")
spot14.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot14_2.jpg"), filename: "spot14.jpg")
spot14.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot14_3.jpg"), filename: "spot14.jpg")
spot14.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot14_4.jpg"), filename: "spot14.jpg")
spot14.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/spots/spot14_5.jpg"), filename: "spot14.jpg")
spot14.save!