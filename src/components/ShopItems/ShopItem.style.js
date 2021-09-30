import { Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        margin:10,
        borderRadius:10,
        width: Dimensions.get('window').width/ 2.2
    },
    lastitem:{
        width: Dimensions.get('window').width,
        backgroundColor: '#eceff1',
        margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        margin:10
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    price:{
        marginTop:3
    },
    notfound:{
        marginTop:3,
        color:'red',
        fontWeight:'bold',
        fontSize:14
    },
    inner_container:{
        padding:5
    },
    author:{
        fontStyle:"italic",
        textAlign:"right"

    }
})