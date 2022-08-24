import React from "react";
import { SafeAreaView, FlatList} from 'react-native';
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import MealCard from "../../components/MealCard";
import useFetch from "../../hooks/useFetch/useFetch";

function Meals({route, navigation}){
    const {category} = route.params;
    const {error, loading, data} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
    const selectMeal = mealId => {
        navigation.navigate('DetailPage', {mealId});
    }
    const renderItem = ({item}) => <MealCard meal={item} selectMeal={() => selectMeal(item.idMeal)} />

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <SafeAreaView style={{backgroundColor: '#F7ECDE'}}>
            <FlatList data={data.meals} renderItem={renderItem} />
        </SafeAreaView>
    );
}

export default Meals;