import {StyleSheet} from 'react-native'
export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

export const commonstyle = StyleSheet.create({
    screenContainer:{
        backgroundColor: backgroundColor,
        flex: 1,
        padding: 0,
    },
    screenTitle:{
        fontSize: 20,
        color: primaryColorRed,
        marginHorizontal: 7,
        marginVertical:10
    },
    button:{        
        backgroundColor:primaryColorRed,
        alignItems:'center',
        padding:16,
        borderRadius:10
    }
})