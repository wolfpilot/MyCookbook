// Libs
import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// Utils
import { COLOURS } from "../../global/styles/variables";

class Checkbox extends PureComponent {
  state = {
    isChecked: false
  };

  toggle = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const stylesInner = this.state.isChecked ? styles.innerChecked : styles.innerNotChecked;

    return (
      <TouchableOpacity onPress={this.toggle} style={styles.root}>
        <View style={styles.outer}>
          <View style={[styles.inner, stylesInner]} />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  root: {

  },
  outer: {
    height: 24,
    width: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLOURS.accent1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    height: 12,
    width: 12,
    borderRadius: 2,
  },
  innerChecked: {
    backgroundColor: COLOURS.accent1
  },
  innerNotChecked: {
    backgroundColor: 'transparent'
  }
});

export default Checkbox;
