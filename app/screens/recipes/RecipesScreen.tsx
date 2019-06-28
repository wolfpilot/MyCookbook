// Libs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps, NavigationScreenComponent } from "react-navigation";

// Assets
import CommonStyles from '../../global/styles/common';

interface IProps extends NavigationScreenProps {}

const RecipesScreen: NavigationScreenComponent<IProps> = props => {
  const { navigate } = props.navigation;

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.pageHeading}>Recipes</Text>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Text style={CommonStyles.button}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipesScreen;
