
require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

const {table} = require('table');

var keys = require("./keys.js");

var pass = keys.password.bamazon_pass;

var divider = "------------------------------";

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
 
    displayProducts();
});


function displayProducts() 
{
    var selectedProduct = {
        item_id: 0,
        product_name: "",
        department_name: "",
        price: 0.0,
        stock_quantity: 0
    };

    var productTableData = []; 

    var productTableHeader = [ "ITEM ID",
                        "DEPARTMENT",
                        "ITEM",
                        "PRICE",
                        "IN STOCK"];

    productTableData.push(productTableHeader);
    var productTableOutput;

    connection.query("SELECT * FROM products ORDER BY item_id", function(err, results) 
    {
        if (err) throw err;

        console.log(divider);
        console.log("WELCOME TO BAMAZON!");
        console.log(divider);

        for (var i = 0; i < results.length; i++) 
        {
            var record = [  results[i].item_id,
                            results[i].department_name,
                            results[i].product_name,
                            "$" + results[i].price,
                            results[i].stock_quantity];

            productTableData.push(record);
        }

        productTableOutput = table(productTableData);
        console.log(productTableOutput);
        console.log(divider);

        inquirer.prompt([
        {
            name: "whatItem",
            type: "input",
            message: "What item would you like to buy? (enter item ID): "
        },
        {
            name: "howMany",
            type: "input",
            message: "How many whould you like to purchase?"
        }]).then(function(answer)
        {
            console.log(divider);
            if(Number.isNaN(answer.whatItem) || Number.isNaN(answer.howMany))
            {
                console.log("We're sorry!");
                console.log("Your input is not recognized.");
                console.log("Please use numeric values for both questions.");
                console.log(divider);
                displayProducts();
            }
            else
            {
                var answerWhatItem = Number.parseInt(answer.whatItem);
                var answerHowMany = Number.parseInt(answer.howMany);

                for (var j = 0; j < results.length; j++) 
                {
                    if (results[j].item_id === answerWhatItem)
                    {
                        selectedProduct = results[j];
                    }
                }

                if (selectedProduct.item_id === 0)
                {
                    console.log("We're sorry!");
                    console.log("We do not carry the item you selected.");
                    console.log(divider);
                    displayProducts();
                }
                else
                {
                    if (answerHowMany < 1)
                    {
                        console.log("Quantity must be greater than zero!");
                        console.log(divider);
                        displayProducts();
                    }
                    else if((selectedProduct.stock_quantity - answerHowMany) < 0)
                    {
                        console.log("We're sorry!");
                        console.log("We do have enough in stock to satisfy your order.");
                        displayProducts();
                    }
                    else
                    {
                        var orderTotal = selectedProduct.price * answerHowMany;

                        orderTotal.toFixed(2); 

                        console.log("YOUR ORDER");

                        var orderTableData = []; 

                        var orderTableHeader = ["ID",
                                                "ITEM",
                                                "QTY",
                                                "PRICE",
                                                "TOTAL"];

                        orderTableData.push(orderTableHeader);

                        var order = [   selectedProduct.item_id,
                                        selectedProduct.product_name,
                                        answerHowMany,
                                        "$" + selectedProduct.price,
                                        "$" + orderTotal];
                        
                        orderTableData.push(order);

                        var orderTableOutput = table(orderTableData);

                        console.log(orderTableOutput);
                        console.log(divider);

                        var qtyAfterPurchase = selectedProduct.stock_quantity - answerHowMany
                        updateProductQty(selectedProduct.item_id, qtyAfterPurchase);
                    }
                }
            }
        });
    });
}


function updateProductQty(id, qty)
{
    connection.query("UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantity: qty
        },
        {
            item_id: id
        }
    ],
    function(err, res) 
    {
        console.log(divider);
        console.log("Product # " + id + " quantity updated!");
        console.log(divider);
        displayProducts();
    });
}

