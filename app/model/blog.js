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
<<<<<<< HEAD
        update_html: TIME,
        created_at: TIME,
        updated_all: TIME
    });
    return blog;
}
=======
        update_html: DATE,
        created_at: DATE,
        updated_all: DATE
    });
    return Blog;
};
>>>>>>> feature-console
