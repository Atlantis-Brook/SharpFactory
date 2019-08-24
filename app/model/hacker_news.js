'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE
    } = app.Sequelize;
    const hackerNews = app.model.define('hacker_news', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        title: STRING,
        synopsis: STRING,
        url: STRING,
        time:DATE
    });
    return hackerNews;
}