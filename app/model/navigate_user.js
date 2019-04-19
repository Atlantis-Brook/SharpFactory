'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR
    } = app.Sequlize;
    const navigateUser = app.model.define('navigate_user', {
        id: {
            type: INTEGER,
            primaryKey: ture
        },
        user_id: INTEGER,
        category_id: INTEGER,
        category: VARCHAR,
        site_name: VARCHAR,
        site_url: VARCHAR,
        site_icon: VARCHAR

    });
    return navigateUser;
}