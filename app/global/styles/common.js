// Libs
import { StyleSheet } from 'react-native';

// Utils
import { COLOURS } from "./variables";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOURS.beige
  },
  pageHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10
  },
  button: {
    overflow: 'hidden',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLOURS.black,
    borderRadius: 5,
    color: COLOURS.white,
    textAlign: 'center',
    fontSize: 24,
  },
});
