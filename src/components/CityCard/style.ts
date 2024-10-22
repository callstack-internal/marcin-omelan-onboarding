import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        flex: 1,
        borderRadius: 100,
        margin: 8,
        height: 80,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flexDirection: 'column',
        flex: 1,
    },
    leftIcon: {
        width: 40,
        aspectRatio: 1,
        marginRight: 8,
        borderRadius: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
