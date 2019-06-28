// Libs
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

// Utils
import { COLOURS } from '../../global/styles/variables';

const imgPlaceholderPath = '../../data/images/recipes/placeholder.jpg';

const RecipeCard = props => {
  const { id, title, tagline, image } = props.recipe.item;
  const { navigate } = props.navigation;

  const recipeImage = image ? image : require(imgPlaceholderPath);

  return (
    <View style={styles.recipe}>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <FullWidthImage
            source={recipeImage}
            width={900}
            height={600}
            style={styles.image} />
        </View>

        <View style={styles.details}>
          {title && <Text style={styles.heading}>{title}</Text>}
          {tagline && <Text style={styles.tagline}>{tagline}</Text>}

          <TouchableOpacity onPress={() => navigate('Recipe', { id })}>
            <Text style={styles.cta}>VIEW RECIPE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  recipe: {
    marginBottom: 20,
    padding: 2
  },
  content: {
    borderRadius: 20,
    backgroundColor: COLOURS.white,
    shadowColor: "#9b958f",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageWrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  details: {
    padding: 20,
  },
  heading: {
    marginBottom: 4,
    fontSize: 20
  },
  tagline: {
    marginBottom: 20,
    color: '#6b6b6b',
    fontSize: 16
  },
  cta: {
    height: 50,
    overflow: 'hidden',
    paddingHorizontal: 24,
    backgroundColor: COLOURS.black,
    borderRadius: 25,
    color: COLOURS.white,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 50,
    fontWeight: 'bold'
  }
});

export default RecipeCard;
