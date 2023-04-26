import axios from 'axios';

interface CategoryNames {
    id: number;
    name: string;
}

export default function getCategoryData(category, setter): any {
    axios.get(`https://mhw-db.com/${category}`, {params: {p: JSON.stringify({id: true, name: true})}})
        .then(response => setter(response.data))
        .catch(err => {
            console.log(err)
            return {id:0, name:'DIDNT WORK'}})
}