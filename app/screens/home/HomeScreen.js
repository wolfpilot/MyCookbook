// Libs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Assets
import CommonStyles from '../../global/styles/common';

const HomeScreen = props => {
  const { navigate } = props.navigation;

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.heading}>Home</Text>
      <TouchableOpacity onPress={() => navigate('Recipes')}>
        <Text style={CommonStyles.button}>Recipes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
