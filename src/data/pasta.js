import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        id: uuidv4(),
        image: './images/pasta/pasta2.jpg',
        title: 'Pasta De La Creme',
        desc: 'Pasta With Grilled Onions and Cinnamon Leaves',
        category: 'Pasta'
    },
    {
        id: uuidv4(),
        image: './images/pasta/pasta1.jpg',
        title: 'Pasta De La Creme',
        desc: 'Beefed Pasta With Chicken Lap',
        category: 'Pasta'
    },
]


export default data;