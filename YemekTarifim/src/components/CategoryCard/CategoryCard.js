import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import styles from './CategoryCard.style'

function CategoryCard({selectCategory ,categories, navigation}){
    return(
        <TouchableHighlight activeOpacity={0.4} underlayColor="rgba(210, 125, 45, 0.4)" onPress={selectCategory}>
            <View style={styles.Container}>
                <Image style={styles.Image} source={{uri: categories.strCategoryThumb}}/>
                <View style={styles.TextContainer}> 
                    <Text style={styles.Text}>{categories.strCategory}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
   
}

export default CategoryCard;