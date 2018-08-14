const connection = require("../config/connection.js");


module.exports = {
  selectAll: function(table,callBack){
      connection.query(`SELECT * FROM ??`, [table],function (err, data){
          if (err) throw err;
          callBack(data);
      })
  },

  insertOne: function(table, col, value, callBack){''
      connection.query("INSERT INTO ?? (??) VALUE (?)", [table, col, value], function(err, data){
          if (err) throw err;
          callBack(data);
      });
  },

  updateOne: function(table, col, colVal, where, whereEqual, callBack) {
      connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [table, col, colVal, where, whereEqual], function(err, data){
          if (err) throw err;
          callBack(data);
      });
  }
}


/* 
3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.
*/