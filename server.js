const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clientes", function(req, res){
     res.json(data);

});


app.get("/clientes/:id" , function(req, res){
   const { id } = req.params;
   const cliente = data.find(cli => cli.id == id);

   if(!cliente) return res.status(204).json({ message: "Cliente nao encontrado" });;

   res.json(cliente);
});

app.post("/clientes", function(req, res){
   const {name , email} = req.body;

   res.json({name , body });

});

app.put("/clientes/:id", function(req, res){
   const { id } = req.params;
   const cliente = data.find(cli => cli.id == id);

   if(!cliente) return res.status(204).json({ message: "Cliente nao encontrado" });;

   const {name} = req.body;

   cliente.name = name;

   res.json(cliente);

});

app.delete("/clientes/:id", function(req, res){

   const {id} = req.params;
   const clientesFiltered = data.filter(cliente => cliente.id =! id);

   res.json(clientesFiltered);
});



app.listen(3001, function(){
   console.log("Serve está rodando");
})