import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
    console.log('data from client', req.body);
    const newUser = req.body;
    // Temporary data storage
    newUser.id = users.length + 1;
    users.push(newUser);
    
    res.send({success: true, message: 'User added successfully'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})