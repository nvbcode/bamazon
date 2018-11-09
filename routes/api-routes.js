const db = require('../models');

module.exports = function (app) {

    app.get('/api/product', function (req, res) {
        db.Product.findAll({}).then(function (rows) {
            res.json(rows);
        }).catch(function (error) {
            res.json({ error: error });
        });

    });


    // 
    // app.put('/api/product', function (req, res) {

    //     const updatesQueries = req.body.map(function (product) {
    //         return db.Product.update(product, {
    //             where: { stock_quantity: product.stock_quantity }
    //         });
    //     });

    //     Promise.all(updatesQueries).then(function (data) {
    //         res.json({ sucess: true });
    //     }).catch(function (err) {
    //         res.json(err);
    //     });
    // });

    app.put('/api/product/:id', function (req, res) {
        console.log(req.body);
        let updatedStock = req.body.stock_quantity;
        db.Product.update({ stock_quantity: updatedStock},
            { where: { id: req.params.id } })
            .then(function () {
                res.json({ success: true });
            }).catch(function (error) {
                res.json({ error: error });
            });
    });

}