// Libs
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps, NavigationScreenComponent } from 'react-navigation';

// Components
import RecipeList from "../../components/RecipeList/RecipeList";

// Resources
import data from './data';
import CommonStyles from '../../global/styles/common';

interface IProps extends NavigationScreenProps {}

const HomeScreen: NavigationScreenComponent<IProps> = props => {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.pageHeading}>My Cookbook</Text>

        <RecipeList
          navigation={navigation}
          recipes={data.promoted.recipes} />

        <TouchableOpacity onPress={() => navigation.navigate('Recipes')}>
          <Text style={CommonStyles.button}>Recipes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
