//require('dotenv').config({ path: './.env' });//but it makes inconsistent with import statements, so we can use import instead of require
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });  

import mongoose from 'mongoose';
import {DB_NAME} from './constants.js';
import connectDB from './db/index.js';



connectDB();

/*
import express from 'express';

const app = express();

/*
function connect DB() {}

DB()*/
/*
(async () => {
  try {
    await connectDB();
    // app.on('error', (error) => {
    //   console.log('Error while connecting to database', error);
    //     throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to database', error);
    throw error;  
  }
*/