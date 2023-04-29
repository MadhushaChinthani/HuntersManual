import {SafeAreaView, ScrollView, StyleSheet, Text, Pressable} from "react-native";
import {getEntryData, getEntryDisplay} from "../Components/Tools";
import { useEffect, useState } from "react";

export default function CategoryEntry({route, navigation}) {
    const [entry, setEntry] = useState({name: ''})
    const {id, category} = route.params

    useEffect(() => {
        getEntryData(category, id, setEntry)
    }, [category, id])

    return(
        <SafeAreaView>
            <ScrollView>
                {entry.name != '' ? 
                    getEntryDisplay(category, entry , styles, navigation)
                :
                    <Text>LOADING</Text>
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