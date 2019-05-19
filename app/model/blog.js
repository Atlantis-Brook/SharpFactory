'use strict';

module.exports = app => {
    const {
        INTEGER,
        TEXT,
        DATE,
        STRING
    } = app.Sequelize;
    const Blog = app.model.define('blog', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user_id: INTEGER,
        title: STRING,
        visits: INTEGER,
        markdown: TEXT,
        synopsis: TEXT,
        html: TEXT,
        update_html: DATE,
        created_at: DATE,
        updated_all: DATE
    });
    return Blog;
};
