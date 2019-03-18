// Libs
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// Components
import RecipeList from "../../components/RecipeList/RecipeList";

// Resources
import data from './data.js';
import CommonStyles from '../../global/styles/common';

const HomeScreen = props => {
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
