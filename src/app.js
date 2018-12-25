const server = require('./server').Server;
const app = new server().app;

app.listen(8080, (err) => {
    if(err) console.log(err);
    else console.log("server on 8080");
})

app.get('/', (req, res) => {
    res.send({
        message: "welcome"
    });
});