'use strict';

/**
 * network-city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::network-city.network-city');
