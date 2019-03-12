// Libs
import { StyleSheet } from 'react-native';

// Utils
import { COLOURS } from "./variables";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    button: {
        overflow: 'hidden',
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: COLOURS.black,
        borderRadius: 5,
        color: COLOURS.white,
        fontSize: 24,
    }
});