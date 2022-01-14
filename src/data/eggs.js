import {v4 as uuidv4} from 'uuid'


const data = [
    {
        id: uuidv4(),
        image: './images/eggs/eggs1.jpg',
        title: 'Eggs',
        desc: 'Fried Eggs With Banana and Turkey',
        category: 'Eggs'
    },
    {
        id: uuidv4(),
        image: './images/eggs/eggs2.jpg',
        title: 'Eggs',
        desc: 'Boiled Egg With Fruits',
        category: 'Eggs'
    },
    {
        id: uuidv4(),
        image: './images/eggs/eggs3.jpg',
        title: 'Eggs',
        desc: 'Fried Eggs With lentils and Fruits',
        category: 'Eggs'
    },
    {
        id: uuidv4(),
        image: './images/eggs/eggs4.jpg',
        title: 'Eggs',
        desc: 'Fried Eggs With Boiled Plantain',
        category: 'Eggs'
    },
]


export default data;