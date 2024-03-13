import {View, Text, StyleSheet, useWindowDimensions, Pressable} from "react-native";

function CategoryGrid(props) {


    return (
        <View style={styles.gridRoot}>
            <View style={[styles.grid, {backgroundColor: props.color}]}>
                <Pressable android_ripple={{color:'#367d80'}} style={({pressed}) => [styles.button, pressed ? styles.buttonPress : '']} onPress={props.onPress}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{props.title}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gridRoot: {
        flex:1,
        margin: 15,
    },

    grid: {
        flex: 1,
        height: 150,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 1,
        overflow: 'hidden'
    },

    button: {
        flex:1
    },

    buttonPress: {
        opacity: 0.5
    },

    textContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontWeight: "bold",
        fontSize:20
    }
})

export default CategoryGrid