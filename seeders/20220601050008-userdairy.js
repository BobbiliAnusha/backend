'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usersdairies', [{
     userid:2,
     description:"I like the day",
     date:"2022-04-3",
     createAt:new Date(),
     updateAt:new Date()
  },{
    userid:1,
    description:"I love the day",
    date:"2022-04-8",
    createAt:new Date(),
    updateAt:new Date()
  }
]);
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usersdairies', null, {});
    
  }
};
