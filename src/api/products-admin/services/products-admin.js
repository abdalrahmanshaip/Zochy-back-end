'use strict';

/**
 * products-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-admin.products-admin');
