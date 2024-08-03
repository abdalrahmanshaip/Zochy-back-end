'use strict';

/**
 * products-admin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::products-admin.products-admin');
