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
app.get('/.well-known/pki-validation', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', '883748C0D3374101C0E8A2C788C7F86E.txt'));
});

app.get('/api/*', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})