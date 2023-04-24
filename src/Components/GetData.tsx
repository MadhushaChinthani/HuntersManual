import {SafeAreaView, ScrollView, StyleSheet, Text, Button} from "react-native";

export default function GetData({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Monsters Menu</Text>
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
    text: {
        color: '#777',
        fontSize: 20,
    }
});