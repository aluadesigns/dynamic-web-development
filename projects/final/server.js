const express = require("express");
const nedb = require("@seald-io/nedb");

const app = express();
const database = new nedb({ filename: "database.txt", autoload: true });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/input", (req, res)=>{
    console.log(req.body.name)

    let data = {
        name: req.body.name,
        time: Date.now()
    };

    database.insert(data, (err, alldata)=>{
        if(err) console.log(err);
        console.log(alldata);
    })

    res.redirect("/");


})

app.get("/passdata", (req, res)=>{
    let query = {}

    database.find(query, (err, alldata)=>{
        console.log(alldata)

        //sorting data chrnologically (a and b are two posts that are being compared)
        alldata.sort((a, b) => {
            return b.time - a.time;
        })
        res.json({
            posts: alldata,
        })
    })

})


//last
app.listen(80, () => {
  console.log("server is running");
});