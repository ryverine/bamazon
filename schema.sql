
-- Step 1: Create the database.
	CREATE DATABASE bamazon;

-- Step 2: Select the Bamazon database and create the Products table
	USE bamazon;
	CREATE TABLE products (
	  item_id INT NOT NULL AUTO_INCREMENT,
	  product_name VARCHAR(100) NOT NULL,
	  department_name VARCHAR(100) NOT NULL,
	  price DECIMAL(10,2) default 0,
	  stock_quantity INT default 0,
	  PRIMARY KEY (item_id)
	);

-- Step 3: Add data to the Products table
	INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES 
		("Nineteen Eighty-Four", "Books", "7.79", "100"),
		("Snow Crash", "Books", "10.87", "50"),
		("NieR: Automata", "Videogames", "27.48", "115"),
		("Dark Souls III", "Videogames", "19.99", "10"),
		("Masters of the Universe", "Movies", "11.99", "130"),
		("The BeastMaster", "Movies", "11.29", "101"),
		("HOLIFE 2 Slice Toaster", "Kitchen", "34.99", "1000"),
		("Bodum Chambord French Press Coffee Maker", "Kitchen", "29.51", "236"),
		("BIC Brite Liner Highlighter, Chisel Tip, Assorted Colors, 5-Count", "Office", "2.13", "427"),
		("Post-it Notes, 3 x 3, 100-Sheet, Pack of 5", "Office", "9.29", "1020");

-- Step 4: Verify that the data has been correctly added to the Products table
	SELECT * FROM products


