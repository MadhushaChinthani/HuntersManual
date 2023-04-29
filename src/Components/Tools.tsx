import axios from 'axios';
import { View , Text, Pressable} from 'react-native';

export function getCategoryData(category, setter): any {
    axios.get(`https://mhw-db.com/${category}`, {params: {p: JSON.stringify({id: true, name: true})}})
        .then(response => setter(response.data))
        .catch(err => {
            console.log(err)
            return {id:0, name:'DIDNT WORK'}})
}

export function getEntryData(category, id, setter): any {
    axios.get(`https://mhw-db.com/${category}/${id}`)
        .then(response => setter(response.data))
        .catch(err => {
            console.log(err)
            return {id:0, name:'DIDNT WORK'}})
}

function generateList(value, key, navigation){
    const capKey = key.charAt(0).toUpperCase() + key.slice(1)
    return(
        <View>
            <Text>{capKey}</Text>
            {
            value.length > 0 ?
            value.map( item => {
                if(key === "actions"){
                    console.log('FOUND ACTION')
                    return(<Text key={item}>{item}</Text>)
                } else {
                    return(
                        <Pressable key={item.id} onPress={() => navigation.navigate('CategoryEntry', {id: item.id, category: key})}>
                            <Text>{item.name}</Text>
                        </Pressable>
                    )
                }
                }
            )
            :
            <Text>No entries?</Text>
            }
        </View>
    )
}

export function getEntryDisplay(category, entry, style, navigation): any {
    switch(category) {
        case 'ailments':
            return (
            <View>
                <Text>{entry.name}</Text>
                <Text>{entry.description}</Text>
                <View>
                    <Text>Recovery:</Text>
                    { generateList(entry.recovery.actions, 'actions', navigation) }
                    { generateList(entry.recovery.items, 'items', navigation) }
                </View>
                <View>
                    <Text>Protection</Text>
                    { generateList(entry.protection.items, 'items', navigation) }
                    { generateList(entry.protection.skills, 'skills', navigation) }
                </View>
            </View>)
        case 'armor':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'charms':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'decorations':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'events':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'items':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'locations':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'monsters':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'skills':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        case 'weapons':
            return (
            <View>
                <Text>{entry.name}</Text>
            </View>)
        
    }
}