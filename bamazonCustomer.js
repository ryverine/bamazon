
require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

var keys = require("./keys.js");

var pass = keys.password.bamazon_pass;

console.log("password = " + pass);

var connection = mysql.createConnection(
{
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "bamazon"
});



connection.connect(function(err) 
{
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startApp();
});


function startApp()
{
    inquirer.prompt([
    {
        type: "list",
        message: "What action:",
        choices: [  "PRODUCT LIST",
                    "BID ON AN ITEM"],
        name: "action"
    }
    ]).then(function(inquirerResponse) 
    {
        var action = inquirerResponse.action.toUpperCase();
        
        switch(action) 
        {
            case "PRODUCT LIST":
            printAllItems();
            break;
            case "BID ON AN ITEM":
            bidOnAnItem();
            break;
            default:
            console.log("Cannot process " + inquirerResponse.action + '!');
        }
    });
}

function printData(data)
{
    console.log("------------------------------"); 
    console.log("ID: " + data.item_id); 
    console.log("ITEM: " + data.product_name);
    console.log("DEPARTMENT: " + data.department_name);
    console.log("PRICE: " + data.price);
    console.log("QUANTITY: " + data.stock_quantity);
}


function printAllItems()
{
    console.log("Selecting all rows from products table...\n");

    connection.query("SELECT * FROM products", function(err, res) 
    {
        if (err) throw err;
       
        for(var i = 0; i < res.length; i++)
        {
            printData(res[i]);
        }

        connection.end();
    });
}


function bidOnAnItem()
{

    /*
    console.log("bidOnAnItem()");

    var items = [];

    connection.query("SELECT * FROM items", function(err, res) 
    {
        if (err) throw err;
        // Log all results of the SELECT statement
        for(var i = 0; i < res.length; i++)
        {
            var obj = {
                id: res[i].id,
                item: res[i].item,
                startingbid: res[i].startingbid,
                highestbid: res[i].highestbid
            };

            items.push(obj);
        }
        console.log("Items (in): " + items.length);

        connection.end();
    });

    
    console.log("Items (out): " + items.length);
    for (var i = 0; i < items.length; i++)
    {
        console.log("items["+i+"].item: " + items[i].item);
    }

    /*
    inquirer.prompt([
        {
            type: "list",
            message: "What action:",
            choices: [  "POST AN ITEM",
                        "BID ON AN ITEM"],
            name: "action"
        }
        ]).then(function(inquirerResponse) 
        {
            var action = inquirerResponse.action.toUpperCase();
            
            switch(action) 
            {
                case "POST AN ITEM":
                postAnItem();
                break;
                case "BID ON AN ITEM":
                bidOnAnItem();
                break;
                default:
                console.log("Cannot process " + inquirerResponse.action + '!');
            }
        });*/
}

