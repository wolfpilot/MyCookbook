// Libs
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

// Components
import Checkbox from "../../components/Checkbox/Checkbox";

// Assets
import CommonStyles from '../../global/styles/common';

// Resources
import recipes from '../../data/raw/recipes.js';

const renderNutrients = nutrients => {
  const { calories, fat, sugar, carbs, protein, fiber } = nutrients;

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Nutrients</Text>

      {calories && <Text style={styles.copy}>Calories - {calories}</Text>}
      {fat && <Text style={styles.copy}>Fat - {fat}</Text>}
      {sugar && <Text style={styles.copy}>Sugar - {sugar}</Text>}
      {carbs && <Text style={styles.copy}>Carbs - {carbs}</Text>}
      {protein && <Text style={styles.copy}>Protein - {protein}</Text>}
      {fiber && <Text style={styles.copy}>Fiber - {fiber}</Text>}
    </View>
  );
};

const renderInstructions = instructions => (
  <View style={styles.section}>
    <Text style={styles.heading}>Instructions</Text>
    <Text style={styles.copy}>{instructions}</Text>
  </View>
);

const renderIngredient = ({ item }) => {
  return (
    <View style={styles.ingredient}>
      <View style={styles.ingredientCheckbox}>
        <Checkbox
          id="1"
          value={item}
        />
      </View>
      <Text style={styles.ingredientText}>{item}</Text>
    </View>
  );

  // return (
  //   <Text style={styles.copy}>- {item}</Text>
  // );
}

const renderIngredientList = ingredients => (
  <View style={styles.section}>
    <Text style={styles.heading}>Ingredients</Text>
    <FlatList
      data={ingredients}
      renderItem={renderIngredient}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

class RecipeScreen extends PureComponent {
  state = {
    data: null
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', null);

    if (!id) { return; }

    const data = recipes.find(recipe => recipe.id === id);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <ScrollView>
        { data &&
          <>
            {data.image &&
            <FullWidthImage
              source={data.image}
              width={900}
              height={600}
              style={styles.image}/>
            }

            <View style={styles.container}>
              <View style={styles.intro}>
                {data.title && <Text style={CommonStyles.pageHeading}>{data.title}</Text>}
                {data.description && <Text style={styles.copy}>{data.description}</Text>}
              </View>
              {data.ingredients && renderIngredientList(data.ingredients)}
              {data.instructions && renderInstructions(data.instructions)}
              {data.nutrients && renderNutrients(data.nutrients)}
            </View>
          </>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20
  },
  intro: {
    marginBottom: 40
  },
  heading: {
    marginBottom: 10,
    fontSize: 24
  },
  copy: {
    fontSize: 18
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  ingredientCheckbox: {
    marginRight: 10
  },
  ingredientText: {
    fontSize: 16
  }
});

export default RecipeScreen;
