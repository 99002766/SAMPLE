const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/register.html");
})

app.listen(3334, () => {
    console.log("Client App running at 3334");
})
