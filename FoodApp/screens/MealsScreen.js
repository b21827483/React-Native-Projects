import {View, Text, StyleSheet, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsScreen({route}) {
    const router = useRoute();
    const categoryId = router.params.categoryId;

    const meals = MEALS.filter(meal => {return meal.categoryIds.indexOf(categoryId) >= 0});

    const renderMealItem = (data) => {

        const item = data.item;

        const mealProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        return <MealItem {...mealProps} />
    }


    return <View>
        <FlatList data={meals}
                  renderItem={renderMealItem}
                  keyExtractor={meals => meals.id}/>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20
    }
})

export default MealsScreen;