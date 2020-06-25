
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {title: 'Neapolitan Pasta',
         ingredients:'Tomato, Basil, Pasta, Salt, Celery, Pepper, Onions', 
         instructions: 'All my family is from Italy, i want to recreate this recipe in honor of my grandma. First we boil the tomatoes and put them in a blender, then cook with all the ingredients.',
         category: 'Pasta',
         source: 'La Nonna',
         img_url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
         user_id: 1,
         private: false
        },
        {title: 'Fried Chicken',
         ingredients:'Raw Chicken, flour, salt, pepper, 2 eggs', 
         instructions: 'The best Fried Chicken from South Carolina. Just deep the chicken in eggs, then flour mixed with salt and pepper and then fried in very hot oil',
         category: 'Chicken',
         source: 'My mother Julie',
         img_url: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         user_id: 1,
         private: true
        },
        {title: 'Asian Noodles',
         ingredients:'Raw Chicken, noodles, soy sauce', 
         instructions: 'I learned this recipe from my Mother, she is chinese',
         category: 'Asian',
         source: 'Mother',
         img_url: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
         user_id: 2,
         private: false
        },
        {title: 'Secret Garlic Dressing',
         ingredients:'3 Garlics, 1 cup of Mayo, Cilantro', 
         instructions: 'My secret garlic sauce great for everything. Put all the ingredients in a Blender for one minute then serve',
         category: 'Dressing',
         source: 'Me',
         img_url: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         user_id: 2,
         private: true
        },
        {
          title: "Family Guacamole Toast",
          ingredients: "Avocado, tomato, cilantro, green pepper, onions, lime",
          instructions: "When a went to Mexico i learned this recipe from a host family, cut all vegetables and mix with the avocado. Put some lime to keep it fresh ",
          category: "Mexican",
          source: "Host Family",
          img_url: "https://images.pexels.com/photos/3535380/pexels-photo-3535380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          user_id: 2,
          private: 0
        }


      ]);
    });
};
