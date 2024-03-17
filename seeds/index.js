const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedBlogs = require('./blogSeeds');
const seedComments = require('./commentSeeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlogs();

  process.exit(0);
};

seedAll();
