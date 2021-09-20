const express = require('express');
const app = express();
const PORT = 2000;
const friends = [
    {
        id: 0,
        name: 'santosh thap'
    },
    {
        id: 1,
        name: 'Krishna raja'
    },
    {
        id: 2, 
        name: "johngffg doe"
    }, {
        id: 3,
        name: 'ljlj austin'
    },
    {
        id: 4,
        name: 'Hariram austin'
    },
    {
        id: 5,
        name: 'johntak austin'
    }
];

app.use((req,res,next) => {
    const start = Date.now();
    next();
    console.log(`${req.method} ${req.url} ${Date.now() - start}`);
})


app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req,res) => {
   const friendId = Number(req.params.friendId);
   const friend = friends[friendId];

   if(friend) {
       res.status(200).json(friend);
   } else {
       res.status(404).json({
           error: "Friends doesnot exit",
       })
   }
});

app.listen(PORT
    // console.log(`listening on port ${PORT}`)
);
