import {View, Text, Pressable, Image, StyleSheet} from "react-native";

function MealItem({title, imageUrl, affordability, complexity, duration}) {

    return (
        <View style={styles.mealItemRoot}>
            <Pressable>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Image src={imageUrl} style={styles.img}/>
                </View>
                <View style={styles.extraInfoCont}>
                    <Text style={styles.extraInfo}>{affordability}</Text>
                    <Text style={styles.extraInfo}>{complexity}</Text>
                    <Text style={styles.extraInfo}>{duration}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItemRoot:{
        overflow: "hidden",
        backgroundColor: '#ffffff',
        margin: 20,
        borderRadius: 10,
        elevation: 10
    },

    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },

    img: {
        width: '80%',
        height: 200,
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,
    },

    extraInfoCont:{
        flexDirection: "row",
        justifyContent: "center",
        margin: 10
    },

    extraInfo: {
        padding: 10
    }
})

export default MealItem