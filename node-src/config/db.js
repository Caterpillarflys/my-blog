const Sequelize = require('sequelize');

const sequelize = new Sequelize('blogs', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    // 字符集
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' //东八时区
});
sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功');
  })
  .catch(err => {
    console.log('连接失败');
  });
module.exports = {
  sequelize
};
