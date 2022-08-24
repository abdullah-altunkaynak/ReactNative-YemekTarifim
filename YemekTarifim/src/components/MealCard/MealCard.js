import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import style from './MealCard.style'

function MealCard({meal, selectMeal}){
    return(
        <TouchableHighlight activeOpacity={0.4} underlayColor="rgba(210, 125, 45, 0.4)"  onPress={selectMeal}>
            <View style={style.Container}>
                <Image style={style.Image}  source={{uri: meal.strMealThumb}}/>
                <View style={style.TextContainer}>
                    <Text style={style.Text}>{meal.strMeal}</Text>
                </View>
            </View>   
        </TouchableHighlight>
    );
    
}
export default MealCard;