import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './ShopItem.style'
const ShopItem= ({item,isLast}) =>  {
    return (
        <View style={isLast ? styles.lastitem : styles.container}>
            <Image 
            source={{uri: item.imgURL}}
            style={styles.image}/>
            <View style={styles.inner_container}>
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.price} >{item.price}</Text>
            {item.inStock? null :<Text style={styles.notfound} >STOKTA YOK</Text>}
            </View>
        </View>
    )
}

export default ShopItem
