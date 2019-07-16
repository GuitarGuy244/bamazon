var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "aurora726",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  //runSearch();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    
    for (i=0; i<res.length;i++)
    {
        console.log(res[i].item_id + ": " + res[i].product_name);
    }
    // connection.end();
    runSearch();
  });
}

function runSearch()
{
    inquirer
        .prompt({
            name: "product",
            type: "rawlist",
            message: "What would you like to purchase?",
            choices: [
                1,2,3,4,5,6,7,8,9,10
            ]
        })
        .then(function(answer){
            
        });
}