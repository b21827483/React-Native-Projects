import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

function CategoryScreen({navigation}) {

    const navigationHandler = (item) => {
      navigation.navigate('MealsScreen', {
          categoryId: item.id
      });
    }

    return (
         <FlatList
             data={CATEGORIES}
             renderItem={({item}) => <CategoryGrid title={item.title} color={item.color} onPress={navigationHandler.bind(null, item)}/>}
             keyExtractor={item => item.id}
             numColumns={2}>
         </FlatList>
    )
}

export default CategoryScreen