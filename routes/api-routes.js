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
    app.put('/api/product/:id', function (req, res) {
        db.Product.update({
            req.body,
            { where: { id: req.params.id },
         }
    
        ).then(function(data) {
            res.json({ sucess: true, data: data })
        })
    }).catch(function(error) {
        res.json({ success: false, error: error });
    });

// });

}