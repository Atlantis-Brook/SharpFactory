'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR
    } = app.Sequlize;
    const navigateIndex = app.model.define('navigate_index', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        category_id: INTEGER,
        category: VARCHAR,
        site_name: VARCHAR,
        site_url: VARCHAR,
        site_icon: VARCHAR
    });
    return navigateIndex;
}