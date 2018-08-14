let orm = require('../config/orm');

let burgers = {

    create: function(columns, values, callBack){
        orm.create('burgers', function(data){
            callBack(data);
        })
    },
    read: function(callBack){
        orm.all('burgers',function(data){
            callBack(data);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};

module.exports = burgers

