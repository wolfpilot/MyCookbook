// Libs
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from './screens/home/HomeScreen';
import RecipesScreen from './screens/recipes/RecipesScreen';
import RecipeScreen from './screens/recipe/RecipeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Recipes: {screen: RecipesScreen},
  Recipe: {screen: RecipeScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
