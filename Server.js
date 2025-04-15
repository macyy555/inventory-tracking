import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import pg from "pg";

dotenv.config();

const client_origin = 'http://'+process.env.VITE_CLIENT_HOST+":"+process.env.VITE_CLIENT_PORT;

const db = new pg.Client({
  user: process.env.VITE_DB_USER,
  host: process.env.VITE_DB_HOST,
  database: process.env.VITE_DB_NAME,
  password: process.env.VITE_DB_PASS,
  port: process.env.VITE_DB_PORT,
});
db.connect();

const app = express();
const port = process.env.VITE_DB_EXP_PORT;
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: client_origin,
    credentials: true,
};

app.use(cors(corsOptions));

let inventory = {rows: []};
let category = {rows: []};
let items = {rows: []};
let supplier = {rows: []};
let teams = {rows: []};

app.get('/customer', async (req, res) => {
  //retrieve category
  if (category.rows.length){
    console.log("category in cache");
  } else {
    try {
      category = await db.query("SELECT * FROM category");
      console.log(category.rows);
    } catch (err) {
      console.log(err);
    }
  }

  //retrieve items
  if (items.rows.length){
    console.log("items in cache");
  } else {
    try {
      items = await db.query("SELECT * FROM items");
      console.log(items.rows);
    } catch (err) {
      console.log(err);
    }
  }

  res.send({category: category, items: items});
});

app.get('/employee', async (req, res) => {
  //retrieve category
  if (category.rows.length){
    console.log("category in cache");
  } else {
    try {
      category = await db.query("SELECT * FROM category");
      console.log(category.rows);
    } catch (err) {
      console.log(err);
    }
  }

  //retrieve items
  if (items.rows.length){
    console.log("items in cache");
  } else {
    try {
      items = await db.query("SELECT * FROM items");
      console.log(items.rows);
    } catch (err) {
      console.log(err);
    }
  }

  //retrieve inventory
  if (inventory.rows.length){
    console.log("inventory in cache");
  } else {
    try {
      inventory = await db.query("SELECT * FROM inventory");
      console.log(inventory.rows);
    } catch (err) {
      console.log(err);
    }
  }

  //retrieve supplier
  if (supplier.rows.length){
    console.log("supplier in cache");
  } else {
    try {
      supplier = await db.query("SELECT * FROM supplier");
      console.log(supplier.rows);
    } catch (err) {
      console.log(err);
    }
  }
  
  res.send({category: category, items: items, inventory: inventory, supplier: supplier});
});

app.listen(port, () => {
  console.log(`Server running on http://${process.env.VITE_DB_HOST}:${port}`);
});