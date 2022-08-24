import React from 'react';
import {Text, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import CategoryCard from "../../components/CategoryCard";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from "../../hooks/useFetch/useFetch";
//import Config from 'react-native-config';

function Categories({navigation}){
    const {error, loading, data} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const selectCategory = category => {
        navigation.navigate('MealsPage', {category});
    }
    const renderCategories = ({item}) => <CategoryCard categories={item} selectCategory={() => selectCategory(item.strCategory)}/>;
    if(loading){
        return <Loading size='large' />;
    }
    if(error){
        return <Error />
    }
    return(
        <SafeAreaView style={{backgroundColor: '#F7ECDE'}}>
            <FlatList horizontal={false} numColumns={2} columnWrapperStyle={{justifyContent: 'center'}}
             data={data.categories} renderItem={renderCategories} />
        </SafeAreaView>
    );
}
export default Categories;