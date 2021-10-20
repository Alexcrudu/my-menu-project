const express = require('express')


const server = express();
server.use(express.static('public', {
    extensions: ['html']
}))

server.get('/', (req, res) => {
    res.sendFile(path.join('/public/index.html'))
})

server.listen(80, err => {
    if(err) console.log(err);
    else console.log('server auft');
})