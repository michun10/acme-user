const { faker } = require("@faker-js/faker");

const createRandomUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const generate = () => {
  const users = [];
  while (users.length < 50) {
    users.push(createRandomUser());
  }
  return users;
};

module.exports = generate;
