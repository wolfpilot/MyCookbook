// Libs
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Components
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = props => {
  const { recipes } = props;

  return (
    <View style={styles.list}>
      <Text style={styles.heading}>Recipes</Text>

      <FlatList
        data={recipes}
        renderItem={item => <RecipeCard recipe={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 20,
    fontSize: 20
  },
});

export default RecipeList;
