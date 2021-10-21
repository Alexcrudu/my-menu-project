const e = require('express');
const express = require('express')
const fs = require('fs');

const pfade = {
    file: 'data/user.json'
}


const server = express();
server.use(express.static('public', {
    extensions: ['html']
}))

server.use(express.json())

server.post('/login',(req, res)=> {
    let user = req.body.user;
    let pass = req.body.pass;
    console.log(user, pass);
    fs.readFile(pfade.file, (err, content)=>{
        if(err) return;
        else {content = JSON.parse(content);
            console.log(content);

            if(user != content[0].user) {
                res.send('no')

            } else {
                console.log('yes user, pass?');
                if(pass != content[0].pass){
                    res.send('no')
                    console.log('no pass');
                } else {
                    console.log('yes user and pass');
                    res.send('super')
                }
            }
        }
    });
})

// server.get('/', (req, res) => {
//     res.send('public/index.html')
// })

server.listen(80, err => {
    if(err) console.log(err);
    else console.log('OK');
})