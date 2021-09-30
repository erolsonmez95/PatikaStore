import React from 'react'
import {View,TextInput} from 'react-native'
import styles from './SearchItem.style'
const SearchItem= ({text}) =>  {
    return (
        <View style={styles.container}>
           <TextInput 
           placeholder={text}
           />
           
        </View>
    )
}

export default SearchItem
