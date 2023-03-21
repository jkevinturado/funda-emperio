import { Op } from 'sequelize';

import UserModel from '../models/userModel.js';

const Add = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      address,
      postalcode,
      contactnumber,
      email,
      username,
      password,
    } = req.body;

    const exisitingUser = await UserModel.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });

    if (exisitingUser) {
      const error = new Error();
      error.status = 404;
      error.message = 'Email or username already exist';
      throw error;
    }

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

    res.status(201).json({ status: true, data: user });
  } catch (error) {
    next(error);
  }
};

const Edit = async (req, res, next) => {
  try {
    const {
      id,
      first_name,
      last_name,
      address,
      postalcode,
      contactnumber,
      email,
      username,
      password,
    } = req.body;

    const exisitingUser = await UserModel.findOne({ where: { id } });
    if (!exisitingUser) {
      const error = new Error();
      error.status = 401;
      error.message = 'User not found';
      throw error;
    }

    const updatedUser = await UserModel.update(
      {
        first_name: first_name || exisitingUser.first_name,
        last_name: last_name || exisitingUser.last_name,
        address: address || exisitingUser.address,
        postalcode: postalcode || exisitingUser.postalcode,
        contactnumber: contactnumber || exisitingUser.contactnumber,
        email: email || exisitingUser.email,
        username: username || exisitingUser.username,
        password: password || exisitingUser.password,
      },
      { where: { id } }
    );

    res.status(201).json({ status: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
};

const Delete = async (req, res, next) => {
  try {
    const { id } = req.body;
    id.forEach(async (id) => {
      await UserModel.destroy({ where: { id } });
    });

    res.status(200).json({ status: true });
  } catch (error) {
    next(error);
  }
};

const List = async (req, res, next) => {
  try {
    const user = await UserModel.findAll({ raw: true });

    res.status(200).json({ status: true, data: user });
  } catch (error) {
    next(error);
  }
};

export { Add, Edit, Delete, List };
