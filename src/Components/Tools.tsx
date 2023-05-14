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

function generateListArr(value, key, navigation){
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

export  function ArmorSetLister(armorSet, navigation){
    let setList;
    axios.get(`https://mhw-db.com/armor/sets/${armorSet.id}`).then(resp => setList = resp.data)
    console.log(setList)
    if(armorSet.pieces.length > 0 ){
        return(
            <View>
                <Text>{armorSet.name}</Text>
                <Text>Rank: {armorSet.rank}</Text>
                {}
            </View>
        )
    }
    
    return(<Text>No Set</Text>)
}

export function getEntryDisplay(category, entry, style, navigation): any {
    switch(category) {
        case 'ailments': // ********* AILMENTS *************************** AILMENTS *****************
            return (
            <View>
                <Text>{entry.name}</Text>
                <Text>{entry.description}</Text>
                <View>
                    <Text>Recovery:</Text>
                    { generateListArr(entry.recovery.actions, 'actions', navigation) }
                    { generateListArr(entry.recovery.items, 'items', navigation) }
                </View>
                <View>
                    <Text>Protection</Text>
                    { generateListArr(entry.protection.items, 'items', navigation) }
                    { generateListArr(entry.protection.skills, 'skills', navigation) }
                </View>
            </View>)

        case 'armor': // ********* ARMOR *************************** ARMOR *****************
            return (
                <View>
                <Text>{entry.name}</Text>
                <Text>Armor Type: {entry.type}</Text>
                <Text>Rank: {entry.rank}</Text>
                <Text>Rarity: {entry.rarity}</Text>
                <View>
                    <Text>Defense</Text>
                    <Text>Base: {entry.defense['base']}</Text>
                    <Text>Max: {entry.defense.max}</Text>
                    <Text>Augmented: {entry.defense.augmented}</Text>
                </View>
                <View>
                    <Text>Resistances</Text>
                    <Text>Fire: {entry.resistances.fire}</Text>
                    <Text>Water: {entry.resistances.water}</Text>
                    <Text>Ice: {entry.resistances.ice}</Text>
                    <Text>Thunder: {entry.resistances.thunder}</Text>
                    <Text>Dragon: {entry.resistances.dragon}</Text>
                </View>
                <View>
                    <Text>Slots</Text>
                    {   entry.slots.length > 0 ? 

                        entry.slots.map((slot, index) => {
                            <Text key={index}>Rank {slot.rank}</Text>
                        })
                        :
                        <Text>No slots for this armor</Text>
                    }
                </View>
                <View>
                    <Text>Armor Set</Text>
                    {  ArmorSetLister(entry.armorSet, navigation) }
                </View>
                <View>
                    { generateListArr(entry.skills, 'skills', navigation) }
                </View>
                
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