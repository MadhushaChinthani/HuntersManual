import {SafeAreaView, ScrollView, StyleSheet, Text, Pressable} from "react-native";
import { useState } from "react";
import getCategoryData from "../Components/Tools";

export default function Categories({navigation}){
    const [currentCategory, setCategory] = useState('')
    const categories = ['Ailments', 'Armor', 'Charms', 'Decorations', 'Events', 'Items', 'Locations', 'Monsters', 'Skills', 'Weapons']
    const [subCategories, setSubCategories] = useState([])
    const handlePress = category =>  {
        setCategory(category)
        getCategoryData(category, setSubCategories)
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{currentCategory}</Text>
            
            {
                currentCategory === "" ?
                <ScrollView contentContainerStyle={styles.categoryContainer}>
                    {
                        categories.map(category => 
                            <Pressable style={styles.categoryButton} key={category} onPress={() => handlePress(category.toLowerCase())}>
                                <Text style={styles.categoryText}>{category}</Text>
                            </Pressable> )
                    }
                </ScrollView>
                :
                <ScrollView contentContainerStyle={styles.categoryContainer}>
                    {
                        subCategories != undefined ?
                        subCategories.map(subCategory => 
                        <Pressable style={styles.categoryButton} key={subCategory.id} onPress={() => console.log('PRESSED')}>
                                <Text style={styles.categoryText}>{subCategory.name}</Text>
                        </Pressable>)
                        :
                        <Pressable style={styles.categoryButton} onPress={() => console.log(subCategories)}>
                                <Text style={styles.categoryText}>LOADING</Text>
                        </Pressable>
                        
                    }
                    <Pressable style={styles.categoryButton} onPress={() => {setCategory(''); setSubCategories([])}}>
                                <Text style={styles.categoryText}>RESET CATEGORY</Text>
                        </Pressable>
                </ScrollView>
            }
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