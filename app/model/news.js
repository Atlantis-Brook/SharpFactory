'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const News = app.model.define('news', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        title: STRING,
        synopsis: STRING,
        news_url: STRING
    });
    return News;
}