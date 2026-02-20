
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let inputs = [];

app.get("/test", (request, response) => {
  response.send("<h1>my server is live!</h1>");
});

// this is not a route we access through our own url, we access it from the form when we make a request
// specifically, we need the guestbook html
// http://localhost:8000/guestbook.html contains the form that uses the POST method
app.post("/getcolor", (request, response) => {
  console.log(request.body);

  inputs.push({
    name: request.body.name,
    color: request.body.color,
  });
  
   response.redirect("/colors.html");
});

// http://localhost:8000/all-inputs
app.get("/all-inputs", (req, res) => {
  res.json({ data: inputs });
});

// LAST STEP ALWAYS
// start our express application
app.listen(8000, () => {
  console.log("starter server is working");
});