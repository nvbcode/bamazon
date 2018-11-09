USE bamazon_db;


INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Cotton Towels', 'You will get too dry', 4.50, 15);
INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Hand Towels', 'Dryness to go', 2.50, 10);
INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Micro-fiber towels', 'Towels for the rich', 100, 5);
INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Polyester towels', 'Towels that probably will not work', 50, 20);
INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Paper towels', 'Towels made out of paper', 1.00, 100);

SELECT * FROM products;