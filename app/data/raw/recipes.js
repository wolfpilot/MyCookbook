const recipes = [
  {
    id: 1,
    title: "Shakshuka",
    description: "Shakshuka is a North African dish that is now made throughout the Middle East; it is especially popular in Israel, where it is often eaten for breakfast.",
    image: require("../../data/images/recipes/shakshuka.jpg"),
    stats: {
      likes: 56,
      estimatedTime: 26,
      difficulty: "3/5"
    },
    ingredients: [
      "1 tbs Olive Oil",
      "2 chopped Red Onions",
      "1 finely chopped Red Chili",
      "1 clove Garlic",
      "Chopped Coriander",
      "800g Cherry Tomatoes",
      "1 tbs Caster Sugar",
      "4 Eggs",
      "Sprinkling Feta"
    ],
    instructions: "Heat the oil in a frying pan that has a lid, then soften the onions, chilli, garlic and coriander stalks for 5 mins until soft.\n\nStir in the tomatoes and sugar, then bubble for 8-10 mins until thick.\n\nCan be frozen for 1 month.\n\nUsing the back of a large spoon, make 4 dips in the sauce, then crack an egg into each one.\n\nPut a lid on the pan, then cook over a low heat for 6-8 mins, until the eggs are done to your liking.\n\nScatter with the coriander leaves and serve with crusty bread.",
    nutrients: {
      calories: 439,
      fat: "15g",
      sugar: "15g",
      carbs: "50g",
      protein: "34g",
      fiber: "7g"
    }
  },
  {
    id: 2,
    title: "Roasted vegetables with herbs",
    description: "A simple blend of veggies - potatoes, carrots and greens."
  }
];

export default recipes;
