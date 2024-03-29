import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";

type AppProps = {
    /* TODO: Add User props to HomeScreen */
}

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={styles.text}>Hunter's Manual</Text>
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