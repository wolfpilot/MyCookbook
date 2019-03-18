// Libs
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from '../app/screens/home/HomeScreen';
import RecipesScreen from '../app/screens/recipes/RecipesScreen';
import RecipeScreen from '../app/screens/recipe/RecipeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Recipes: {screen: RecipesScreen},
  Recipe: {screen: RecipeScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
