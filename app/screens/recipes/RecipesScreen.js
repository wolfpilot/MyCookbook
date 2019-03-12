// Libs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Assets
import CommonStyles from '../../global/styles/common';

const RecipesScreen = props => {
  const { navigate } = props.navigation;

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.heading}>Recipes</Text>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Text style={CommonStyles.button}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipesScreen;
