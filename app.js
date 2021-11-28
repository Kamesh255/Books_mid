const express = require ('express');
const users = require("./book.json");

const app = express();
 
app.use(express.json()) 

app.get("/", (req, res) => {
    //do ehatever you want
    res.send({users});
    
});

app.post("/", (req,res) =>{
   const newUsers = [...users, req.body];
   res.send(newUsers)

});

app.patch("/:author", (req, res) =>{
    console.log(req.params.author);

    const newUsers = users.map((user) => {
        if(req.params.author === user.author){
            return req.body
        }
        return user;
    })
    res.send(newUsers)
})

app.delete("/:author",(req,res) => {
    const newUsers = users.filter((user) => user.author === req.params.author)
res.send(newUsers);
     
})

app.listen(8520, function () {
    console.log("Listening on port 8520");
});











//REST API
//HTTP 
/*
get :- get all items
get :- get single item
post :-create a single item
patch/put:- update a single item
delete:- delete a single item
*/

/*DISADVANTAGES OG get  
limited capacity 
everthingg that you send is visible in the request url
*/