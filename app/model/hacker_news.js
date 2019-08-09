'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const News = app.model.define('hacker_news', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        title: STRING,
        synopsis: STRING,
        url: STRING
    });
    return News;
}