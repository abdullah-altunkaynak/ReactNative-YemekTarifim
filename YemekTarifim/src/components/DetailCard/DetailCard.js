import React, { useCallback } from "react";
import { Text, SafeAreaView, Image, View, TouchableHighlight, Linking } from "react-native";
import style from './DetailCard.style';
import ReadMore from 'react-native-read-more-text'

function DetailCard({meal}){
    // this method for read more click (react-native-read-more-text package)
    const _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{fontSize: 18, fontWeight: '400' ,color: 'blue', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
    }
    // this method for show less click (react-native-read-more-text package)
    const _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{fontSize: 18, fontWeight: '400', color: 'red', marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
    }
    // youtube linking 
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(meal.strYoutube);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(meal.strYoutube);
        } else {
          Alert.alert(`Don't know how to open this URL: ${meal.strYoutube}`);
        }
      }, [meal.strYoutube]);
    return(
        <SafeAreaView>
            <View style={style.ImageContainer}>
                <Image style={style.Image}  source={{uri: meal.strMealThumb}}/>
            </View>
            <View style={style.InfoTextContainer}>
                <Text style={style.MealNameText}>{meal.strMeal}</Text>
                <View style={style.InfoContainer}>
                    <Text style={style.InfoText}>From {meal.strArea}</Text>
                    <Text style={style.InfoText}>For {meal.strCategory}</Text>
                </View>
            </View>
            <View style={style.DetailContainer}>
                <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter}>
                    <Text style={style.DetailText}>{meal.strInstructions}</Text>
                </ReadMore>
            </View>
            <TouchableHighlight activeOpacity={0.4} underlayColor="red"  onPress={handlePress}>
                <View style={style.YoutubeContainer}>
                    <Text style={style.YoutubeText}>Watch On Youtube</Text>
                </View>
            </TouchableHighlight>
            
        </SafeAreaView>
    );
}
export default DetailCard;