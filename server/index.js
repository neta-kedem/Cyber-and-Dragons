const express = require('express')
const app = express()
const port = process.env.PORT || 3003;
const path = require('path');
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
app.get('/api/*', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})