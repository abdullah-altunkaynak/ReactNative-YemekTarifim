import React from "react";
import { FlatList, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import style from './Detail.style';
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import DetailCard from "../../components/DetailCard";

function Detail({route}){
    const {mealId: idMeal} = route.params; 
    const {loading, error, data} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);
    const renderItem = ({item}) => <DetailCard  meal={item} />
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
        <FlatList  data={data.meals} renderItem={renderItem}/>
        
    );
}
export default Detail;