module.exports = function (connection, Sequelize) {
    const Product = connection.define('Product', {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.INTEGER,
        stock_quantity: Sequelize.INTEGER


    }, { timestamps: false }
    );
    return Product;
}