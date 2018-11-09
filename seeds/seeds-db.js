// INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Cotton Towels', 'You will get too dry', 4.50, 15);
// INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Hand Towels', 'Dryness to go', 2.50, 10);
// INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Micro-fiber towels', 'Towels for the rich', 100, 5);
// INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Polyester towels', 'Towels that probably will not work', 50, 20);
// INSERT INTO products (product_name, description, price, stock_quantity) VALUES ('Paper towels', 'Towels made out of paper', 1.00, 100);

// const db = require("../models");

const db = require("../models");

const items = [
  {
    product_name: "Cotton Towels",
    description: "You will get too dry",
    price: 10,
    stock_quantity: 150
  },
  {
    product_name: "Hand Towels",
    description: "Dryness to go",
    price: 12,
    stock_quantity: 100
  },
  {
    product_name: "Micro-fiber Towels",
    description: "Towels for the rich",
    price: 100,
    stock_quantity: 25
  },
  {
    product_name: "Polyester Towels",
    description: "Towels that probably wont dry you well",
    price: 50,
    stock_quantity: 75
  },
  {
    product_name: "Paper Towels",
    description: "Towels made out of paper",
    price: 1.00,
    stock_quantity: 1000
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items)
    .then(function(rows) {
      console.log("\n\nINSERTED\n\n");
      db.sequelize.close();
    })
    .catch(function(err) {
      console.log("\n\nError:", err);
      db.sequelize.close();
    });
});