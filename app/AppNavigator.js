// Libs
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from '../app/screens/home/HomeScreen';
import RecipesScreen from '../app/screens/recipes/RecipesScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Recipes: {screen: RecipesScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
