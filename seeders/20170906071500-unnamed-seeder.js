'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Memos', [
      {id: 1, title:"initial", memo: "初期メモ", createdAt:"2016-02-16 15:58:58", updatedAt:"2016-02-17 11:20:59"},
      {id: 2, title:"メール送付", createdAt:"2016-04-01 08:38:49", updatedAt:"2016-11-23 23:01:25"},
      {id: 3, title:"ツールお試し", createdAt:"2016-11-22 23:01:25", updatedAt:"2016-11-23 23:01:25"}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
