const hbs = require('hbs');

// helpers

hbs.registerHelper('getAnio', () => new Date().getFullYear());