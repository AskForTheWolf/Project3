# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all

# Restaurant.create(address: "", open: , close: , name: "", menu: [{:name => '', :price => , :description => '', :rating => , :category => '', :pictures => [], :featured => false}])



pekinggourmet = Restaurant.create(pic_url: 'http://peking.typografik.com/wp-content/uploads/2014/07/about4.jpg',rating: 5,featured: false, address: "6029 Leesburg Pike Falls Church, VA 22041-2203",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 22, hours_string: '11AM - 10PM',name: "Peking Gourmet Inn", menu_item: ['Seafood Imperial'], menu_price: [40], menu_description: ['Generous portions of snow crab, jumbo shrimp & sea scallop in a light garlic sauce.'], menu_rating: [5], menu_category: ['Seafood'], menu_pictures: [], menu_featured: [false])
honeypig = Restaurant.create(pic_url: 'http://3.bp.blogspot.com/-jTxryiK8y_g/VLSfrsFQVOI/AAAAAAAAZyA/XSHlPNPXO8c/s1600/IMG_3409.JPG',rating: 4.2,featured: false, address: "7220 Columbia Pke, Annandale, VA 22003",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 0, close: 0, hours_string: '24/7',name: "Honey Pig", menu_item: ['Thinly Sliced Duck Breast'], menu_price: [9], menu_description: ['Thinly sliced duck breast brought to you fresh and raw ready to be BBQ\' for freshest of taste.'], menu_rating: [4], menu_category: ['Meat'], menu_pictures: [], menu_featured: [false])
uma = Restaurant.create(pic_url: 'https://media-cdn.tripadvisor.com/media/photo-s/08/67/44/be/bali-safari-marine-park.jpg',rating: 4.5,featured: true, address: "9380 Baltimore National Pike, Ellicott City, MD 21042",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 22, hours_string: '11AM - 10PM',name: "Uma Uma", menu_item: ['TONKOTSU ramen'], menu_price: [13], menu_description: ['Tonkotsu broth, chashu,soft-boiled egg,bok choy, scallion,nori'], menu_rating: [4], menu_category: ['Soup'], menu_pictures: [], menu_featured: [false])
captainGeorge = Restaurant.create(pic_url: 'http://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2016/1/13/50f01ec8e32f40b2bb1f40b4b2b0c3a6_18.jpg',rating: 3.5,featured: false, address: "5363 Richmond Rd, Williamsburg, VA 23188",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 3, close: 22 , hours_string: '3PM - 10PM',name: "Captain George Seafood", menu_item: ['Fried Select Oysters'], menu_price: [15], menu_description: ['Daily changed oysters'], menu_rating: [5], menu_category: ['Seafood'], menu_pictures: [], menu_featured: [false])
bonchon = Restaurant.create(pic_url: 'https://static1.squarespace.com/static/53c05406e4b0c06112874fd4/t/557f2f45e4b0cdc3c0536cd2/1434398534251/',rating: 4.1,featured: true, address: "1015 Half St SE, Washington, DC 20003",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 22, hours_string: '11AM - 10PM',name: "Bonchon", menu_item: ['Wings'], menu_price: [29], menu_description: ['Korean BBQ Fried Chicken Wings'], menu_rating: [4], menu_category: ['Meat'], menu_pictures: [], menu_featured: [false])
miPeru = Restaurant.create(pic_url: 'http://vignette1.wikia.nocookie.net/tacobell/images/3/3e/Crunchwrap-supreme.jpg/revision/latest?cb=20151028161615',rating: 4.3,featured: true, address: "18216 Flower Hill WayGaithersburg, MD 20879",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 22, hours_string: '11AM - 10PM',name: "Mi Peru", menu_item: ['Lomo Saltado'], menu_price: [15], menu_description: ['Stir in the tomato and aji amarillo; cook until the tomato softens. Pour in the vinegar and soy sauce, add the French fries, cover, and cook until the beef is done,'], menu_rating: [5], menu_category: ['Stir Fry'], menu_pictures: [], menu_featured: [false])
daikokuya = Restaurant.create(pic_url: 'https://theburgerguide.com/images/burgers/700/1411125670-burgers-2-beer-cleveland-ohio.jpg',rating: 4.5,featured: true, address: "327 E 1st St, Los Angeles, CA 90012",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 24, hours_string: '11AM - 12AM',name: "Daikokuya", menu_item: ['Tuna Sashimi Bowl'], menu_price: [15.95], menu_description: ['Slices of raw tuna over a bowl of sushi rice. served with miso soup and salad'], menu_rating: [5], menu_category: ['Soup'], menu_pictures: [], menu_featured: [false])
saigon = Restaurant.create(pic_url: 'https://bbqdragon.com/wp-content/uploads/2014/04/1398125894-0.jpg',rating: 5,featured: false, address: "6218 Wilson Blvd, Falls Church, VA 22044",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 10, close: 20 , hours_string: '11AM - 8PM',name: "Little Saigon Restaurant", menu_item: ['Vietnamese Crepe'], menu_price: [5.95], menu_description: ['Vietnamese Crepes'], menu_rating: [3], menu_category: ['Deserts'], menu_pictures: [], menu_featured: [false])
taraThai = Restaurant.create(pic_url: 'https://photos.travelblog.org/Photos/198707/670247/f/6635597-bugs-on-a-stick-0.jpg',rating: 4,featured: false, address: "4849 Massachusetts Ave NW, Washington, DC 20016",description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, tortor sed finibus pretium, mauris velit viverra leo, at finibus metus risus et est.', open: 11, close: 22, hours_string: '11AM - 10PM',name: "Tara Thai", menu_item: ['Pad Thai'], menu_price: [12], menu_description: ['Stir Fried noodles, spicy nuts with scrambled eggs and hoison sauce.'], menu_rating: [3.5], menu_category: ['Stir Fry'], menu_pictures: [], menu_featured: [false])