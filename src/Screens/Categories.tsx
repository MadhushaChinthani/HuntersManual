import {SafeAreaView, ScrollView, StyleSheet, Text, Button} from "react-native";

export default function Categories({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Categories</Text>
                <Button
                    title="Monsters"
                    color={'#007AFF'}
                    onPress={() => {
                        navigation.navigate('Monsters')
                    }}
                />
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