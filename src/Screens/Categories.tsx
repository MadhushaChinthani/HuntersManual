import {SafeAreaView, ScrollView, StyleSheet, Text, Pressable} from "react-native";

export default function Categories({navigation}){
    const categories = ['Ailments', 'Armor', 'Armor Sets', 'Charms', 'Decorations', 'Events', 'Itmes', 'Locations', 'Monsters', 'Skills', 'Weapons']
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView contentContainerStyle={styles.categoryContainer}>
                {
                    categories.map(category => 
                        <Pressable style={styles.categoryButton} key={category}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </Pressable> )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#777',
        fontSize: 35,
        marginBottom: 35,
    },
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        width:'90%',

    },
    categoryButton: {
        backgroundColor: '#550bcb',
        borderRadius: 10,
        borderWidth: 3,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginBottom:8,
    },
    categoryText: {
        color: '#dac32b',
        fontSize: 25,
    }
});