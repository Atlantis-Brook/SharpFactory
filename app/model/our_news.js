'use strict';

module.exports = app => {
    const {
        INTEGER,
        TEXT,
        DATE,
        STRING
    } = app.Sequelize;
    const ourNews = app.model.define('our_news', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        title: STRING,
        visits: INTEGER,
        markdown: TEXT,
        synopsis: TEXT,
        html: TEXT,
        update_html: DATE,
        created_at: DATE,
        updated_all: DATE
    });
    return ourNews;
};
