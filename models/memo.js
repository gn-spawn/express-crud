'use strict';

module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memo', {
    title: DataTypes.STRING,
    memo: DataTypes.STRING
  });
  return Memo;
};