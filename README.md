
# Bamazon

A Node.js application that replicates an online market place.

Product data is contained in an external MySQL database.

A customer can load this application to view the product data and place an order for a specific item.


## Installation Instructions

Before you can run Bamazon there are few things you need to have in place.


### Node JS

You must have Node JS and a terminal/command line application installed on your machine.

[How to install Node.js on Windows](https://www.guru99.com/download-install-node-js.html)


### Download My Project

Click on the green "Clone or Download" button above. 

You may clone my repo, but you can also select the "download zip" option and unzip the downloaded file in any directory you please.


### Create the Bamazon Database

For this application you will need to have MySQL and you will need to build the Bamazon database.

To create the database you can execute the code in the `schema.sql` file.

I have ordered the steps you need to take, so just follow a long to the commented directions.


### Database Password and Environment File

Your MySQL password is required for the application to connect to the Bamazon database.

My application does not use the password as a hard coded value, you will need to use your own MySQL password.

Make sure you have the `keys.js` file.

In the `bamazon` directory you need to create a new file named `.env`.

On a Windows machine you can make this file by creating a new text file and naming it `.env.`. 

You will be prompted to confirm the name change and after selecting `yes` you should see that the file is named `.env`.

The contents of the `.env` file should be as follows:

	# MySQL Password
	db_password="your_mysql_password"

The content in quotes should be your specific MySQL password. 

Do not remove the quote characters, your password should go between the quotes.


### NPM Install 

Bamazon uses a few different packages which provide special functionality.

You will need to have these installed so that Bamazon can function correctly.

The primary packages used are:
* [MySQL] (https://www.npmjs.com/package/mysql)
* [Inquirer] (https://www.npmjs.com/package/inquirer)
* [Table] (https://www.npmjs.com/package/table)

Make sure you have the `package.JSON` file.

In your command line application navigate to the `bamazon` directory. 

Before you run `bamazonCustomer.js` you must install the various NPM packages that Bamazon uses. 

Once you are under the `bamazon` directory, enter `npm i` into your command line and press the `enter` key. 

If you have the `package.JSON` file, the various packages will be installed. 

![npm install](/documentation/img01.png)

After the NPM installation you can then run Bamazon. 


### Running Bamazon

Now that you have your password added to the `.env` file and the NPM packages installed, Bamazon is ready to run.

Simply type `node bamazonCustomer` into your command line and press the `enter` key to begin.

![run bamazon](/documentation/img02.png)


## Bamazon User Manual

Bamazon replicates an online market place. You can view data that is stored in an external database and interact with that database with command line arguments.

Upon running `bamazonCustomer.js` you will be presented with a table that displays the content of the `products` table, and a prompt to selected the item you would like to purchase.

![bamazon customer](/documentation/img03.png)


### Placing an Order

By default, Bamazon will ask you what item you would like to purchase. 

To make a selection, enter the numeric ID of the item and press the `enter` key.

You will then be asked to enter the amount you would like to purchase.

![bamazon customer](/documentation/img04.png)

Bamazon will process your order and return an invoice that shows the details of your order.

The quantity of the item will be updated to reflect the number purchased by the customer, and the customer will be returned to the item select prompt.

![bamazon order](/documentation/img05.png)

The prompts expect a neumeric value, and for the amount you must provide a value that is not greater than the current in stock quantity.






