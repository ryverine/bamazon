CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id CHAR(36) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (uuid(), "Nineteen Eighty-Four", "Books", "7.79", "100");
-- VALUES (uuid(), "Snow Crash", "Books", "10.87", "50");
-- VALUES (uuid(), "NieR: Automata", "Videogames", "27.48", "115");
-- VALUES (uuid(), "Dark Souls III", "Videogames", "19.99", "10");
-- VALUES (uuid(), "Masters of the Universe", "Movies", "11.99", "130");
-- VALUES (uuid(), "The BeastMaster", "Movies", "11.29", "101");
-- VALUES (uuid(), "HOLIFE 2 Slice Toaster", "Kitchen", "34.99", "1000");
-- VALUES (uuid(), "Bodum Chambord French Press Coffee Maker", "Kitchen", "29.51", "236");
-- VALUES (uuid(), "BIC Brite Liner Highlighter, Chisel Tip, Assorted Colors, 5-Count", "Office", "2.13", "427");
-- VALUES (uuid(), "Post-it Notes, 3 x 3, 100-Sheet, Pack of 5", "Office", "9.29", "1020");

SELECT * FROM products

-- UUID/GUID as item ID

DELIMITER ;;
CREATE TRIGGER before_insert_products
BEFORE INSERT ON products
FOR EACH ROW
BEGIN
  IF new.item_id IS NULL THEN
    SET new.item_id = uuid();
  END IF;
END
;;





