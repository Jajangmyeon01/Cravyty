export const categories = [
    {
      id: 1,
      name: 'Meals',
      image: require("../assets/images/categories/categories-meals.png"),
    },
    {
      id: 2,
      name: 'Burgers',
      image: require("../assets/images/categories/categories-burger.png"),
    },
    {
      id: 3,
      name: 'Drinks',
      image: require("../assets/images/categories/categories-drinks.png"),
    },
    {
      id: 4, 
      name: 'Desserts',
      image: require("../assets/images/categories/categories-desserts.png"),
    },
    {
      id: 5,
      name: 'All',
      image: require("../assets/images/categories/categories-all.png"),
    },
  ];
  
  export const featured = [
    // Jolibee and Mcdonald's JSON
    {
      id: 1,
      title: "Global Fast Food Favorites",
      description: "Explore some of fast food Global Restaurants",
      restaurants: [
        {
          id: 1,
          name: "Jollibee",
          image: require("../assets/images/featured/Jollibee/Jollibee-logo.png"),
          description: "A popular Filipino fast-food chain known for its delicious Chickenjoy, sweet-style spaghetti, and burger steaks. Jollibee offers a joyful dining experience with a variety of affordable meals that are loved by families.",
          category: "Global Fast Food",
          categories: ['Chickenjoy', 'Burgers', 'Fries & Sides', 'Beverages'],
          dishes: [
            {
              // Chicken Joy //
              id: 1,
              name: "2pc-Chickenjoy-Solo",
              description: "2pc delicious chickenjoy",
              price: 163,
              image: require("../assets/images/featured/Jollibee/Chickenjoy/2pc-Chickenjoy-Solo.png"),
              category: "Chickenjoy",
              nutrition: {
                calories: 800,
                totalFat: 45,
                protein: 50,
                sodium: 1200,
              },
            },
            {
              id: 2,
              name: "1pc-Chickenjoy-Solo",
              description: "1pc delicious chickenjoy",
              price: 82,
              image: require("../assets/images/featured/Jollibee/Chickenjoy/1pc-Chickenjoy-Solo.png"),
              category: "Chickenjoy",
              nutrition: {
                calories: 400,
                totalFat: 23,
                protein: 25,
                sodium: 600,
              },
            },
            {
              id: 3,
              name: "1pc-Breakfast-Chickenjoy-w-Jolly-Spaghetti",
              description: "1pc-Breakfast chickenjoy-w-Jolly-Spaghetti",
              price: 139,
              image: require("../assets/images/featured/Jollibee/Chickenjoy/1pc-Breakfast-Chickenjoy-w-Jolly-Spaghetti.png"),
              category: "Chickenjoy",
              nutrition: {
                calories: 650,
                totalFat: 30,
                protein: 35,
                sodium: 1100,
              },
            },
            {
              // Burgers //
              id: 4,
              name: "Yumburger",
              description: "Jollibee’s classic Yumburger",
              price: 40,
              image: require("../assets/images/featured/Jollibee/Burgers/Yumburger.png"),
              category: "Burgers",
              nutrition: {
                calories: 300,
                totalFat: 15,
                protein: 12,
                sodium: 800,
              },
            },
            {
              id: 5,
              name: "Cheesy Yumburger",
              description: "Cheesy Yumburger",
              price: 66,
              image: require("../assets/images/featured/Jollibee/Burgers/Cheesy-Yumburger.png"),
              category: "Burgers",
              nutrition: {
                calories: 350,
                totalFat: 18,
                protein: 15,
                sodium: 900,
              },
            },
            {
              id: 6,
              name: "Bacon Cheesy Yumburger",
              description: "Bacon Cheesy Yumburger",
              price: 91,
              image: require("../assets/images/featured/Jollibee/Burgers/Bacon-Cheesy-Yumburger.png"),
              category: "Burgers",
              nutrition: {
                calories: 420,
                totalFat: 22,
                protein: 20,
                sodium: 1000,
              },
            },
            {
              // Fries & Sides
              id: 7,
              name: "Jolly Crispy Fries",
              description: "Crispy golden fries",
              price: 48,
              image: require("../assets/images/featured/Jollibee/FriesAndSides/Jolly-Crispy-Fries.png"),
              category: "Fries & Sides",
              nutrition: {
                calories: 340,
                totalFat: 17,
                protein: 4,
                sodium: 450,
              },
            },
            {
              id: 8,
              name: "Extra Gravy",
              description: "Jollibee's Extra Gravy",
              price: 27,
              image: require("../assets/images/featured/Jollibee/FriesAndSides/Chickenjoy-Gravy.png"),
              category: "Fries & Sides",
              nutrition: {
                calories: 80,
                totalFat: 6,
                protein: 1,
                sodium: 300,
              },
            },
            {
              id: 9,
              name: "Plain Extra White Rice",
              description: "Jollibee's Plain Extra White Rice",
              price: 32,
              image: require("../assets/images/featured/Jollibee/FriesAndSides/Plain-White-Rice.png"),
              category: "Fries & Sides",
              nutrition: {
                calories: 200,
                totalFat: 0.5,
                protein: 4,
                sodium: 2,
              },
            },
            {
              // Beverages
              id: 10,
              name: "Coffee",
              description: "Jollibee's Hot Coffee",
              price: 43,
              image: require("../assets/images/featured/Jollibee/Beverages/Hot-Coffee.png"),
              category: "Beverages",
              nutrition: {
                calories: 200,
                totalFat: 0.5,
                protein: 4,
                sodium: 2,
              },
            },
            {
              id: 11,
              name: "Coke",
              description: "Jollibee's Coke",
              price: 53,
              image: require("../assets/images/featured/Jollibee/Beverages/Coke-Regular.png"),
              category: "Beverages",
              nutrition: {
                calories: 150,
                totalFat: 0,
                protein: 0,
                sodium: 40,
              },
            },
            {
              id: 12,
              name: "Soda Float",
              description: "Jollibee's Soda Float",
              price: 52,
              image: require("../assets/images/featured/Jollibee/Beverages/Soda-Float.png"),
              category: "Beverages",
              nutrition: {
                calories: 300,
                totalFat: 5,
                protein: 3,
                sodium: 90,
              },
            },
          ],
        },
        {
          id: 2,
          name: "McDonald's",
          image: require("../assets/images/featured/Mcdonalds/mcdonalds-logo.png"),
          description: "An iconic American fast-food giant famous for its Big Mac, fries, and Chicken McNuggets. McDonald’s is known worldwide for its quick service and consistent flavors across thousands of locations.",
          category: "Global Fast Food",
          categories: ['Chicken & Platters', 'Burgers', 'Fries', 'Drinks & Desserts'],
          dishes: [
            {
              // Chicken & Platters //
              id: 1,
              name: "Chicken Fillet with Rice",
              description: "Crispy Chicken Fillet with Rice",
              price: 82,
              image: require("../assets/images/featured/Mcdonalds/ChickenAndPlatters/1pcChickenFillet.png"),
              category: "Chicken & Platters",
              nutrition: {
                calories: 389,
                totalFat: 12,
                protein: 18,
                sodium: 642
              }
            },
            {
              id: 2,
              name: "1pc Chicken with Rice",
              description: "1pc Chicken with Rice",
              price: 92,
              image: require("../assets/images/featured/Mcdonalds/ChickenAndPlatters/1pcChicken.png"),
              category: "Chicken & Platters",
              nutrition: {
                calories: 389,
                totalFat: 12,
                protein: 18,
                sodium: 642
              }
            },
            {
              id: 3,
              name: "6pc Chicken McNuggets with Fries",
              description: "6pc Chicken McNuggets with Fries",
              price: 103,
              image: require("../assets/images/featured/Mcdonalds/ChickenAndPlatters/6pcChickenNuggetsAndFries.png"),
              category: "Chicken & Platters",
              nutrition: {
                calories: 605,
                totalFat: 31,
                protein: 23,
                sodium: 1081
              }
            },
            // Burgers //
            {
              id: 4,
              name: "McCrispy Chicken Sandwich",
              description: "McCrispy Chicken Sandwich",
              price: 70,
              image: require("../assets/images/featured/Mcdonalds/Burgers/CrispyChickenFilletSandwich.png"),
              category: "Burgers",
              nutrition: {
                calories: 470,
                totalFat: 20,
                protein: 27,
                sodium: 1100
              }
            },
            {
              id: 5,
              name: "Cheeseburger",
              description: "Cheeseburger",
              price: 82,
              image: require("../assets/images/featured/Mcdonalds/Burgers/Cheeseburger.png"),
              category: "Burgers",
              nutrition: {
                calories: 300,
                totalFat: 12,
                protein: 15,
                sodium: 680
              }
            },
            {
              id: 6,
              name: "McChicken Sandwich",
              description: "McChicken Sandwich",
              price: 103,
              image: require("../assets/images/featured/Mcdonalds/Burgers/McChickenSandwich.png"),
              category: "Burgers",
              nutrition: {
                calories: 400,
                totalFat: 21,
                protein: 14,
                sodium: 560
              }
            },
            // Fries //
            {
              id: 7,
              name: "Regular Fries",
              description: "Regular Fries",
              price: 72,
              image: require("../assets/images/featured/Mcdonalds/Fries/regular-fries.png"),
              category: "Fries",
              nutrition: {
                calories: 230,
                totalFat: 11,
                protein: 2,
                sodium: 160
              }
            },
            {
              id: 8,
              name: "Medium Fries",
              description: "Medium Fries",
              price: 89,
              image: require("../assets/images/featured/Mcdonalds/Fries/medium-fries.png"),
              category: "Fries",
              nutrition: {
                calories: 320,
                totalFat: 15,
                protein: 3,
                sodium: 260
              }
            },
            {
              id: 9,
              name: "Large Fries",
              description: "Large Fries",
              price: 109,
              image: require("../assets/images/featured/Mcdonalds/Fries/large-fries.png"),
              category: "Fries",
              nutrition: {
                calories: 490,
                totalFat: 23,
                protein: 5,
                sodium: 350
              }
            },
            // Drinks & Desserts //
            {
              id: 10,
              name: "Coke",
              description: "Coke",
              price: 77,
              image: require("../assets/images/featured/Mcdonalds/DrinksAndDesserts/Coke.png"),
              category: "Drinks & Desserts",
              nutrition: {
                calories: 140,
                totalFat: 0,
                protein: 0,
                sodium: 45
              }
            },
            {
              id: 11,
              name: "Coke McFloat Medium",
              description: "Coke McFloat",
              price: 59,
              image: require("../assets/images/featured/Mcdonalds/DrinksAndDesserts/McFloatCoke.png"),
              category: "Drinks & Desserts",
              nutrition: {
                calories: 220,
                totalFat: 3,
                protein: 1,
                sodium: 80
              }
            },
            {
              id: 12,
              name: "McFlurry with Oreo Cookies",
              description: "McFlurry with Oreo Cookies",
              price: 69,
              image: require("../assets/images/featured/Mcdonalds/DrinksAndDesserts/McFlurryOreo.png"),
              category: "Drinks & Desserts",
              nutrition: {
                calories: 510,
                totalFat: 16,
                protein: 10,
                sodium: 170
              }
            },
          ],
        }, 
      ],
    },
    // Mang Inasal and Chowking JSON
    {
      id: 2,
      title: "Filipino Favorites",
      description: "Filipino restaurant chains serving beloved local dishes",
      restaurants: [
        {
          id: 1,
          name: "Mang Inasal",
          image: require("../assets/images/featured/MangInasal/mang-inasal-logo.png"),
          description: "Popular Filipino restaurant known for its grilled chicken, unlimited rice, and traditional meals.",
          category: "Local Filipino Food",
          categories: ['Chicken Inasal', 'Halo-Halo', 'Other Meals', 'Drinks'],
          dishes: [
            // Chicken Inasal
            {
              id: 1,
              name: "Paa (Leg part) with Rice",
              description: "Marinated leg part grilled to perfection, served with rice.",
              price: 120,
              image: require("../assets/images/featured/MangInasal/ChickenInasal/PaaWithRice.png"),
              category: "Chicken Inasal",
              nutrition: {
                calories: 450,
                totalFat: 18,
                protein: 35,
                sodium: 900
              }
            },
            {
              id: 2,
              name: "Pecho (Breast part) with Rice",
              description: "Tender breast part grilled with Mang Inasal marinade.",
              price: 135,
              image: require("../assets/images/featured/MangInasal/ChickenInasal/PechoWithRice.png"),
              category: "Chicken Inasal",
              nutrition: {
                calories: 480,
                totalFat: 20,
                protein: 38,
                sodium: 950
              }
            },
            {
              id: 3,
              name: "Paa & Pecho Buddy Size",
              description: "Grilled chicken thigh and breast in signature marinade.",
              price: 250,
              image: require("../assets/images/featured/MangInasal/ChickenInasal/PaaAndPecho.png"),
              category: "Chicken Inasal",
              nutrition: {
                calories: 690,
                totalFat: 35,
                protein: 60,
                sodium: 1400
              }
            },
            // Halo-Halo
            {
              id: 4,
              name: "Extra Creamy Halo-Halo Small",
              description: "A small serving of classic Filipino dessert with shaved ice, milk, sweetened beans, fruits, and leche flan.",
              price: 60,
              image: require("../assets/images/featured/MangInasal/HaloHalo/HaloHaloSmall.png"),
              category: "Halo-Halo",
              nutrition: {
                calories: 250,
                totalFat: 7,
                protein: 4,
                sodium: 70
              }
            },
            {
              id: 5,
              name: "Extra Creamy Halo-Halo Regular",
              description: "A regular serving of classic Filipino Halo-Halo dessert with added leche flan and ube.",
              price: 85,
              image: require("../assets/images/featured/MangInasal/HaloHalo/HaloHaloRegular.png"),
              category: "Halo-Halo",
              nutrition: {
                calories: 390,
                totalFat: 12,
                protein: 6,
                sodium: 110
              }
            },
            {
              id: 6,
              name: "Crema de Leche Halo-Halo Small",
              description: "Shaved ice dessert with leche flan, ube, and milk.",
              price: 76,
              image: require("../assets/images/featured/MangInasal/HaloHalo/CremaDeLeche.png"),
              category: "Halo-Halo",
              nutrition: {
                calories: 520,
                totalFat: 17,
                protein: 8,
                sodium: 180
              }
            },
            // Other Meals
            {
              id: 5,
              name: "Palabok Regular Size",
              description: "A traditional Filipino noodle dish topped with savory shrimp sauce, chicharrón, boiled egg, and green onions.",
              price: 75,
              image: require("../assets/images/featured/MangInasal/Meals/PalabokRegular.png"),
              category: "Other Meals",
              nutrition: {
                calories: 320,
                totalFat: 11,
                protein: 9,
                sodium: 820
              }
            },
            {
              id: 6,
              name: "Pork Sisig",
              description: "Sizzling chopped pork seasoned with calamansi, chili, and onions, served on a hot plate.",
              price: 99,
              image: require("../assets/images/featured/MangInasal/Meals/PorkSisig.png"),
              category: "Other Meals",
              nutrition: {
                calories: 450,
                totalFat: 35,
                protein: 20,
                sodium: 950
              }
            },
            {
              id: 7,
              name: "2 pcs Pork BBQ",
              description: "Grilled pork skewers with sweet-savory marinade.",
              price: 99,
              image: require("../assets/images/featured/MangInasal/Meals/PorkBBQ.png"),
              category: "Other Meals",
              nutrition: {
                calories: 520,
                totalFat: 28,
                protein: 24,
                sodium: 1000
              }
            },
             // Drinks
             {
              id: 8,
              name: "Coke Zero Medium (16oz)",
              description: "Sugar-free cola with the classic Coke taste.",
              price: 55,
              image: require("../assets/images/featured/MangInasal/Drinks/CokeZero.png"),
              category: "Drinks",
              nutrition: {
                calories: 0,
                totalFat: 0,
                protein: 0,
                sodium: 40
              }
            },
            {
              id: 9,
              name: "Iced Tea Medium (16oz)",
              description: "Refreshing sweet iced tea with a citrus twist.",
              price: 55,
              image: require("../assets/images/featured/MangInasal/Drinks/IceTea.png"),
              category: "Drinks",
              nutrition: {
                calories: 120,
                totalFat: 0,
                protein: 0,
                sodium: 10
              }
            },
            {
              id: 10,
              name: "Sprite Medium (16oz)",
              description: "Lemon-lime soda with a crisp, clean taste",
              price: 55,
              image: require("../assets/images/featured/MangInasal/Drinks/Sprite.png"),
              category: "Drinks",
              nutrition: {
                calories: 200,
                totalFat: 0,
                protein: 0,
                sodium: 65
              }
            },
          ]
        },
        {
          id: 2,
          name: "Chowking",
          image: require("../assets/images/featured/Chowking/chowking-logo.png"),
          description: "Chinese-style fast food offering rice meals, noodles, dim sum, and halo-halo.",
          category: "Local Filipino Food",
          categories: ['Lauriat Meals', 'Noodles', 'Siopao & Siomai', 'Side Dishes'],
          dishes: [
            // Lauriat Meals
            {
              id: 1,
              name: "Chinese-Style Fried Chicken Lauriat",
              description: "Fried chicken with pancit canton, steamed rice, and buchi.",
              price: 205,
              image: require("../assets/images/featured/Chowking/Lauriat/FriedChickenLauriat.png"),
              category: "Lauriat Meals",
              nutrition: {
                calories: 940,
                totalFat: 45,
                protein: 38,
                sodium: 1550
              }
            },
            {
              id: 2,
              name: "Sweet 'n' Sour Chicken Lauriat",
              description: "Breaded chicken in sweet and sour sauce with pancit, rice, and buchi.",
              price: 227,
              image: require("../assets/images/featured/Chowking/Lauriat/SweetAndSourLauriat.png"),
              category: "Lauriat Meals",
              nutrition: {
                calories: 970,
                totalFat: 42,
                protein: 37,
                sodium: 1620
              }
            },
            {
              id: 3,
              name: "Chix & Sauce Lauriat",
              description: "Chicken with savory sauce, pancit canton, rice, and buchi.",
              price: 227,
              image: require("../assets/images/featured/Chowking/Lauriat/ChixAndSauceLauriat.png"),
              category: "Lauriat Meals",
              nutrition: {
                calories: 910,
                totalFat: 40,
                protein: 36,
                sodium: 1500
              }
            },
           // Noodles
            {
              id: 4,
              name: "Beef Mami",
              description: "Noodle soup with tender beef, egg, and vegetables.",
              price: 184,
              image: require("../assets/images/featured/Chowking/Noodles/BeefMami.png"),
              category: "Noodles",
              nutrition: {
                calories: 530,
                totalFat: 16,
                protein: 25,
                sodium: 1450
              }
            },
            {
              id: 5,
              name: "Wanton Mami",
              description: "Noodle soup with pork wantons, egg, and vegetables.",
              price: 92,
              image: require("../assets/images/featured/Chowking/Noodles/WantonMami.png"),
              category: "Noodles",
              nutrition: {
                calories: 480,
                totalFat: 14,
                protein: 22,
                sodium: 1380
              }
            },
            {
              id: 6,
              name: "Pancit Canton",
              description: "Stir-fried egg noodles with veggies, meat, and soy sauce.",
              price: 81,
              image: require("../assets/images/featured/Chowking/Noodles/PancitCanton.png"),
              category: "Noodles",
              nutrition: {
                calories: 500,
                totalFat: 18,
                protein: 14,
                sodium: 1250            
              }
            },   
            // Siopao & Siomai
            {
              id: 7,
              name: "Siomai (4 pcs)",
              description: "Steamed pork dumplings served with soy and calamansi.",
              price: 65,
              image: require("../assets/images/featured/Chowking/SiopaoAndSiomai/Siomai.png"),
              category: "Siopao & Siomai",
              nutrition: {
                calories: 260,
                totalFat: 12,
                protein: 11,
                sodium: 780
              }
            },
            {
              id: 8,
              name: "Chunky Asado Siopao",
              description: "Steamed bun filled with savory pork asado in a sweet-savory sauce.",
              price: 53,
              image: require("../assets/images/featured/Chowking/SiopaoAndSiomai/AsadoSiopao.png"),
              category: "Siopao & Siomai",
              nutrition: {
                calories: 340,
                totalFat: 10,
                protein: 13,
                sodium: 950
              }
            },
            {
              id: 9,
              name: "4pc Lumpiang Shanghai",
              description: "Crispy spring rolls filled with ground pork and vegetables.",
              price: 70,
              image: require("../assets/images/featured/Chowking/SiopaoAndSiomai/LumpiangShanghai.png"),
              category: "Siopao & Siomai",
              nutrition: {
                calories: 320,
                totalFat: 18,
                protein: 10,
                sodium: 720
              }
            },
            // Side Dishes
            {
              id: 10,
              name: "Kangkong w/ Chinese Bagoong",
              description: "Stir-fried water spinach topped with savory Chinese-style bagoong.",
              price: 81,
              image: require("../assets/images/featured/Chowking/SideDishes/KangkongBagoong.png"),
              category: "Side Dishes",
              nutrition: {
                calories: 90,
                totalFat: 4,
                protein: 3,
                sodium: 410
              }
            },
            {
              id: 11,
              name: "Chicharap",
              description: "Crispy and airy shrimp crackers, perfect as a light snack or side.",
              price: 65,
              image: require("../assets/images/featured/Chowking/SideDishes/Chicharap.png"),
              category: "Side Dishes",
              nutrition: {
                calories: 160,
                totalFat: 9,
                protein: 1,
                sodium: 250
              }
            },
            {
              id: 12,
              name: "Buchi",
              description: "Golden-fried rice balls with sweet mung bean filling, coated in sesame seeds.",
              price: 54,
              image: require("../assets/images/featured/Chowking/SideDishes/Buchi.png"),
              category: "Side Dishes",
              nutrition: {
                calories: 210,
                totalFat: 10,
                protein: 3,
                sodium: 80
              }
            },
          ]
        }
        
      ]
    },
    // Bonchon and Tokyo-Tokyo JSON
    {
      id: 3,
      title: "Asian Favorites",
      description: "Korean and Japanese restaurant chains",
      restaurants: [
        {
          id: 1,
          name: "Bonchon",
          image: require("../assets/images/featured/Bonchon/bonchon-logo.png"),
          description: "Korean-inspired restaurant famous for its Rice bowls and Korean flavors .",
          category: "Korean Food",
          categories: ['Rice Bowls', 'Bulgogi/Beef Meals', 'Seafood', 'Desserts'],
          dishes: [
            // Rice Bowls
            {
              id: 1,
              name: "Ultimate Sizzling Bibimbowl",
              description: "A deluxe Korean rice bowl topped with crispy chicken, fried egg, mixed vegetables.",
              price: 234,
              image: require("../assets/images/featured/Bonchon/RiceBowls/UltimateSizzlingBibimbowl.png"),
              category: "Rice Bowls",
              nutrition: {
                calories: 750,
                totalFat: 38,
                protein: 42,
                sodium: 1650
              }
            },
            {
              id: 2,
              name: "Sizzling Bibimbowl",
              description: "A sizzling rice bowl with Bonchon’s signature crispy chicken, sautéed vegetables.",
              price: 189,
              image: require("../assets/images/featured/Bonchon/RiceBowls/SizzlingBibimbowl.png"),
              category: "Rice Bowls",
              nutrition: {
                calories: 680,
                totalFat: 34,
                protein: 36,
                sodium: 1580
              }
            },
            {
              id: 3,
              name: "Bap Bibimbowl",
              description: "A hearty rice bowl with marinated meat or chicken, kimchi, fresh veggies.",
              price: 180,
              image: require("../assets/images/featured/Bonchon/RiceBowls/BapBowl.png"),
              category: "Rice Bowls",
              nutrition: {
                calories: 620,
                totalFat: 28,
                protein: 34,
                sodium: 1450
              }
            },
            // Bulgogi/Beef Meals
            {
              id: 4,
              name: "Korean Beef Stew",
              description: "Slow-simmered tender beef chunks in a rich Korean soy-garlic stew.",
              price: 295,
              image: require("../assets/images/featured/Bonchon/BeefMeals/BeefStew.png"),
              category: "Bulgogi/Beef Meals",
              nutrition: {
                calories: 580,
                totalFat: 26,
                protein: 32,
                sodium: 1150
              }
            },
            {
              id: 5,
              name: "Beef Bulgogi Korean Rice Bowl",
              description: "Thinly sliced marinated beef stir-fried with onions and sesame.",
              price: 250,
              image: require("../assets/images/featured/Bonchon/BeefMeals/BeefBulgogi.png"),
              category: "Bulgogi/Beef Meals",
              nutrition: {
                calories: 560,
                totalFat: 22,
                protein: 35,
                sodium: 1080
              }
            },
            {
              id: 6,
              name: "Beef Bulgogi Noodle Soup",
              description: "Flavorful Korean noodle soup with sliced beef bulgogi, vegetables.",
              price: 100,
              image: require("../assets/images/featured/Bonchon/BeefMeals/BeefBulgogiNoodleSoup.png"),
              category: "Bulgogi/Beef Meals",
              nutrition: {
                calories: 600,
                totalFat: 24,
                protein: 34,
                sodium: 1250
              }
            },
            // Seafood
            {
              id: 7,
              name: "Crispy Shrimp",
              description: "Golden fried shrimp tossed in your choice of Bonchon’s soy garlic or spicy glaze.",
              price: 252,
              image: require("../assets/images/featured/Bonchon/Seafood/CrispyShrimp.png"),
              category: "Seafood",
              nutrition: {
                calories: 580,
                totalFat: 29,
                protein: 24,
                sodium: 1300
              }
            },
            {
              id: 8,
              name: "Crispy Squid",
              description: "Lightly breaded and fried squid rings served with your choice of Bonchon glaze.",
              price: 252,
              image: require("../assets/images/featured/Bonchon/Seafood/CrispySquid.png"),
              category: "Seafood",
              nutrition: {
                calories: 520,
                totalFat: 27,
                protein: 22,
                sodium: 1180
              }
            },
            {
              id: 9,
              name: "Crispy Fish",
              description: "Crispy fried white fish fillet glazed in soy garlic or spicy sauce.",
              price: 252,
              image: require("../assets/images/featured/Bonchon/Seafood/CrispyFish.png"),
              category: "Seafood",
              nutrition: {
                calories: 540,
                totalFat: 25,
                protein: 26,
                sodium: 1220
              }
            },
            // Desserts
            {
              id: 10,
              name: "Choco Bingsu",
              description: "Shaved ice topped with chocolate syrup, crushed cookies, chocolate bites, and vanilla ice cream.",
              price: 138,
              image: require("../assets/images/featured/Bonchon/Desserts/ChocoBingsu.png"),
              category: "Desserts",
              nutrition: {
                calories: 430,
                totalFat: 18,
                protein: 6,
                sodium: 120
              }
            },
            {
              id: 11,
              name: "Mango Bingsu",
              description: "Refreshing shaved ice dessert with fresh mango chunks, condensed milk, and a scoop of vanilla ice cream.",
              price: 138,
              image: require("../assets/images/featured/Bonchon/Desserts/MangoBingsu.png"),
              category: "Desserts",
              nutrition: {
                calories: 410,
                totalFat: 16,
                protein: 5,
                sodium: 100
              }
            },
            {
              id: 12,
              name: "Strawberry Choco Bingsu",
              description: "A sweet blend of strawberries and chocolate syrup over fluffy shaved ice, topped with chocolate chips and ice cream.",
              price: 138,
              image: require("../assets/images/featured/Bonchon/Desserts/StrawberryChocoBingsu.png"),
              category: "Desserts",
              nutrition: {
                calories: 440,
                totalFat: 19,
                protein: 6,
                sodium: 130
              }
            },
          ]
        },
        {
          id: 2,
          name: "Tokyo Tokyo",
          image: require("../assets/images/featured/TokyoTokyo/tokyotokyo-logo.png"),
          description: "Japanese fast food chain offering tempura, bento meals, ramen, and sushi.",
          category: "Japanese Food",
          categories: ['Bento Ala Carte', 'DonBuri Ala Carte', 'Ramen Ala Carte', 'Drinks'],
          dishes: [
            // Bento Ala Carte
            {
              id: 1,
              name: "3Pc Chicken Karaage Bento",
              description: "Japanese-Style Fried Chicken With Light Crispy Breading.",
              price: 170,
              image: require("../assets/images/featured/TokyoTokyo/Bento/3pcChickenKaraageBento.png"),
              category: "Bento Ala Carte",
              nutrition: {
                calories: 700,
                totalFat: 34,
                protein: 37,
                sodium: 1480
              }
            },
            {
              id: 2,
              name: "3Pc Honey Chicken Bento",
              description: "Chicken Karaage Coated With Our Signature Teriyaki Sauce.",
              price: 170,
              image: require("../assets/images/featured/TokyoTokyo/Bento/3pcHoneyChickenBento.png"),
              category: "Bento Ala Carte",
              nutrition: {
                calories: 740,
                totalFat: 36,
                protein: 34,
                sodium: 1550
              }
            },
            {
              id: 3,
              name: "Best Chicken Teriyaki Bento",
              description: "Tender Chicken Breast Fillet Grilled To Perfection.",
              price: 240,
              image: require("../assets/images/featured/TokyoTokyo/Bento/ChickenTeriyakiBento.png"),
              category: "Bento Ala Carte",
              nutrition: {
                calories: 610,
                totalFat: 24,
                protein: 28,
                sodium: 1650
              }
            },
            // DonBuri Ala Carte
            {
              id: 4,
              name: "Gyoza Donburi",
              description: "Fried Gyoza On Top Of Hot Steamed Rice, Drizzled With Unagi Sauce",
              price: 110,
              image: require("../assets/images/featured/TokyoTokyo/DonBuri/GyozaDonburi.png"),
              category: "DonBuri Ala Carte",
              nutrition: {
                calories: 590,
                totalFat: 27,
                protein: 20,
                sodium: 1100
              }
            },
            {
              id: 5,
              name: "Pork Tonkatsu Donburi",
              description: "Pork Tonkatsu On Top Of Hot Steamed Rice, Served With Our Signature Tonkatsu Sauce.",
              price: 125,
              image: require("../assets/images/featured/TokyoTokyo/DonBuri/PorkTonkatsuDonburi.png"),
              category: "DonBuri Ala Carte",
              nutrition: {
                calories: 670,
                totalFat: 28,
                protein: 26,
                sodium: 1300
              }
            },
            {
              id: 6,
              name: "Chicken Karaage Donburi",
              description: "Fried Chicken Karaage On Top Of Hot Steamed Rice, Glazed With Karaage Soy Ginger Sauce.",
              price: 125,
              image: require("../assets/images/featured/TokyoTokyo/DonBuri/ChickenKaraageDonburi.png"),
              category: "DonBuri Ala Carte",
              nutrition: {
                calories: 650,
                totalFat: 29,
                protein: 27,
                sodium: 1250
              }
            },
            // Ramen Ala Carte
              {
                id: 7,
                name: "Spicy Chicken Ramen Ala Carte",
                description: "Japanese Ramen Noodles In Tonkotsu Broth, Topped With Fresh Vegetables.",
                price: 185,
                image: require("../assets/images/featured/TokyoTokyo/Ramen/SpicyChickenRamen.png"),
                category: "Ramen Ala Carte",
                nutrition: {
                  calories: 730,
                  totalFat: 28,
                  protein: 32,
                  sodium: 1700
                }
              },
              {
                id: 8,
                name: "Seafood Ramen Ala Carte",
                description: "Authentic, Slow-Cooked Tonkotsu Broth Topped With Crunchy Prawn Tempura.",
                price: 205,
                image: require("../assets/images/featured/TokyoTokyo/Ramen/SeaFoodRamen.png"),
                category: "Ramen Ala Carte",
                nutrition: {
                  calories: 760,
                  totalFat: 30,
                  protein: 31,
                  sodium: 1750
                }
              },
              {
                id: 9,
                name: "Cheesy Beef Ramen Ala Carte",
                description: "Japanese Ramen Noodles In Tonkotsu Broth, Topped With Fresh Vegetables, Spicy Cheese.",
                price: 205,
                image: require("../assets/images/featured/TokyoTokyo/Ramen/CheesyBeefRamen.png"),
                category: "Ramen Ala Carte",
                nutrition: {
                  calories: 790,
                  totalFat: 32,
                  protein: 33,
                  sodium: 1800
                }
              },
            // Drinks
            {
              id: 10,
              name: "Red Iced Tea",
              description: "Tokyo Tokyo'S Signature Red Iced Tea.",
              price: 70,
              image: require("../assets/images/featured/TokyoTokyo/Drinks/RedIceTea.png"),
              category: "Drinks",
              nutrition: {
                calories: 120,
                totalFat: 0,
                protein: 0,
                sodium: 10
              }
            },
            {
              id: 11,
              name: "Iced Pure Matcha",
              description: "Concocted From Stone-Ground Matcha Leaves.",
              price: 130,
              image: require("../assets/images/featured/TokyoTokyo/Drinks/IcedPureMatch.png"),
              category: "Drinks",
              nutrition: {
                calories: 190,
                totalFat: 3,
                protein: 4,
                sodium: 45
              }
            },
            {
              id: 12,
              name: "Bottled Water",
              description: "Plain Bottle Water",
              price: 40,
              image: require("../assets/images/featured/TokyoTokyo/Drinks/BottleWater.png"),
              category: "Drinks",
              nutrition: {
                calories: 0,
                totalFat: 0,
                protein: 0,
                sodium: 0
              }
            },
          ]
        }
      ]
    }
    
    
    
  ]
  