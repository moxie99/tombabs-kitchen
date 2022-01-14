import {v4 as uuidv4} from 'uuid';

const data = [
    {
        id: uuidv4(),
        image: './images/rice/rice1.jpg',
        title: 'Fried Rice',
        desc: 'Fried Rice With Fried Chicken',
        category: 'Rice'
    },
    {
        id: uuidv4(),
        image: './images/rice/rice2.jpg',
        title: 'Jollof Rice',
        desc: 'Jollof Rice With Scent Leaves',
        category: 'Rice'
    },
    {
        id: uuidv4(),
        image: './images/rice/rice1.jpg',
        title: 'Jollof Rice',
        desc: 'Jollof Rice With Onions and Stewed Beef',
        category: 'Rice'
    },
    {
        id: uuidv4(),
        image: './images/rice/rice1.jpg',
        title: 'Jollof Rice',
        desc: 'Jollof Rice With Fried Chicken Wings',
        category: 'Rice'
    },
]

export default data;