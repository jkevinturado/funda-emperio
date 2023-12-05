import db from './models/index.js';
import dbConn from './utils/database.js';
import UserModel from './models/userModel.js';

const userData = [
  {
    first_name: 'Test1',
    last_name: 'Test1',
    address: 'Address1',
    postalcode: '4800',
    contactnumber: '+63912345678',
    email: 'onetest@mail.com',
    username: 'onetest',
    password: 'Test1234',
  },
  {
    first_name: 'Test2',
    last_name: 'Test2',
    address: 'Address2',
    postalcode: '4800',
    contactnumber: '+63912345678',
    email: 'twotest@mail.com',
    username: 'twotest',
    password: 'Test1234',
  },
  {
    first_name: 'Test3',
    last_name: 'Test3',
    address: 'Address3',
    postalcode: '4800',
    contactnumber: '+63912345678',
    email: 'threetest@mail.com',
    username: 'threetest',
    password: 'Test1234',
  },
  {
    first_name: 'Test4',
    last_name: 'Test4',
    address: 'Address4',
    postalcode: '4800',
    contactnumber: '+63912345678',
    email: 'fourtest@mail.com',
    username: 'fourtest',
    password: 'Test1234',
  },
  {
    first_name: 'Test5',
    last_name: 'Test5',
    address: 'Address5',
    postalcode: '4800',
    contactnumber: '+63912345678',
    email: 'fivetest@mail.com',
    username: 'fivetest',
    password: 'Test1234',
  },
];

const UserSeed = {
  up: async () => {
    try {
      userData.forEach(
        async ({
          first_name,
          last_name,
          address,
          postalcode,
          contactnumber,
          email,
          username,
          password,
        }) => {
          const user = await UserModel.create({
            first_name,
            last_name,
            address,
            postalcode,
            contactnumber,
            email,
            username,
            password,
          });
        }
      );

      console.log('User Seed has been added to DB');
    } catch (error) {
      throw error;
    }
  },
  down: async () => {
    try {
      await UserModel.destroy({
        where: {},
        truncate: true,
      });

      console.log('User table has been truncated');
    } catch (error) {
      throw error;
    }
  },
};

try {
  if (db) {
    await dbConn
      .authenticate()
      .then(() => {
        console.log('Database Connected');
      })
      .catch((error) => {
        throw error;
      });
    const arg = process.argv[2];
    if (arg === 'up') UserSeed.up();
    else if (arg === 'down') UserSeed.down();
    else console.log('No arguments detected ');
  }
} catch (error) {
  throw error;
}
