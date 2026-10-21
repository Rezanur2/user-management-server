import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;


const users = [
    {
        id: 1, name: 'Rezanur Rahman', email: 'reza@gmail.com'
    },
    {
        id: 2, name: 'Asif Ahmed', email: 'asif@gmail.com'
    },
    {
        id: 3, name: 'Ashikur Rahman', email: 'ashikur@gmail.com'
    },
    {
        id: 4, name: 'Taj Ahmed', email: 'taj@gmail.com'
    },
    
]

app.get('/', (req, res) => {
    res.send('Users are coming soon')
})

app.get('/users', (req, res) => {
    // res.send('Fetching users...')
    res.send(users);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})