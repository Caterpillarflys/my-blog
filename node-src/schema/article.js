// 字段	说明	必填
// id	自增文章ID	否
// title	文章标题	是
// author	文章作者	是
// content	文章内容	是
// category	文章分类	是
// createdAt	创建时间	否
// updatedAt	更新时间	否

const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'article',
    {
      // 文章ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      // 文章标题
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'title'
      },
      // 文章作者
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'author'
      },
      // 文章内容
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'content'
      },
      // 文章分类
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'category'
      },
      // 创建时间
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format(
            'YYYY-MM-DD HH:mm:ss'
          );
        }
      },
      // 更新时间
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('updatedAt')).format(
            'YYYY-MM-DD HH:mm:ss'
          );
        }
      }
    },
    {
      // 如果为 true 则表的名称和 model 相同，即 user
      // 为 false MySQL创建的表名称会是复数 users
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: true
    }
  );
};
