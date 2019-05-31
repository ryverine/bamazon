CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Nineteen Eighty-Four", "Books", "7.79", "100");
-- VALUES ("Snow Crash", "Books", "10.87", "50");
-- VALUES ("NieR: Automata", "Videogames", "27.48", "115");
-- VALUES ("Dark Souls III", "Videogames", "19.99", "10");
-- VALUES ("Masters of the Universe", "Movies", "11.99", "130");
-- VALUES ("The BeastMaster", "Movies", "11.29", "101");
-- VALUES ("HOLIFE 2 Slice Toaster", "Kitchen", "34.99", "1000");
-- VALUES ("Bodum Chambord French Press Coffee Maker", "Kitchen", "29.51", "236");
-- VALUES ("BIC Brite Liner Highlighter, Chisel Tip, Assorted Colors, 5-Count", "Office", "2.13", "427");
-- VALUES ("Post-it Notes, 3 x 3, 100-Sheet, Pack of 5", "Office", "9.29", "1020");

SELECT * FROM products
