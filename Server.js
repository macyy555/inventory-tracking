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
      // console.log(category.rows);
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
      // console.log(items.rows);
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
      // console.log(category.rows);
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
      // console.log(items.rows);
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
      // console.log(inventory.rows);
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
      // console.log(supplier.rows);
    } catch (err) {
      console.log(err);
    }
  }
  
  res.send({category: category, items: items, inventory: inventory, supplier: supplier});
});

app.post('/customer/submitquiz', async (req, res) => {
  const cust_name = req.body.name;
  const cust_email = req.body.email;
  const cust_phoneNumber = req.body.phone;
  const cust_lineid = req.body.lineID;
  const cust_quiz = req.body.question;
  
  try{

    //check if this customer is already in db 
    let check_customer = await db.query('SELECT cust_id, email, phonenumber, lineid FROM customer WHERE name=$1', [cust_name]);
    console.log("check customer");
    
    console.log(check_customer.rows);
    if (check_customer.rows.length > 0){
      let cust_id_selected = "";
      for (let check_customer_iter of check_customer.rows){
        if (cust_email.length>0 && cust_email != check_customer_iter.email){
          //new customer found (only name is duplicated)
          await db.query('INSERT INTO customer (email, name, phonenumber, lineid) VALUES ($1, $2, $3, $4)', [cust_email, cust_name, cust_phoneNumber, cust_lineid]);
          console.log("add customer");
          check_customer = await db.query('SELECT cust_id FROM customer WHERE email=$1', [cust_email]);
          cust_id_selected = check_customer.rows[0].cust_id
          break;
        } else if (cust_phoneNumber.length>0 && cust_phoneNumber != check_customer_iter.phonenumber){
          //new customer found (only name is duplicated)
          await db.query('INSERT INTO customer (email, name, phonenumber, lineid) VALUES ($1, $2, $3, $4)', [cust_email, cust_name, cust_phoneNumber, cust_lineid]);
          console.log("add customer");
          check_customer = await db.query('SELECT cust_id FROM customer WHERE phonenumber=$1', [cust_phoneNumber]);
          cust_id_selected = check_customer.rows[0].cust_id
          break;
        } else if (cust_lineid.length>0 && cust_lineid != check_customer_iter.lineid){
          //new customer found (only name is duplicated)
          await db.query('INSERT INTO customer (email, name, phonenumber, lineid) VALUES ($1, $2, $3, $4)', [cust_email, cust_name, cust_phoneNumber, cust_lineid]);
          console.log("add customer");
          check_customer = await db.query('SELECT cust_id FROM customer WHERE lineid=$1', [cust_lineid]);
          cust_id_selected = check_customer.rows[0].cust_id
          break;
        }
        else {
          //old customer submit the question
          cust_id_selected = check_customer_iter.cust_id;
          break;
        }
      }
      //add question
      await db.query('INSERT INTO cust_quiz (quiz, cust_id) VALUES ($1, $2)', [cust_quiz, cust_id_selected]);
      console.log("add question");
      
    } else {
      //add customer info
      await db.query('INSERT INTO customer (email, name, phonenumber, lineid) VALUES ($1, $2, $3, $4)', [cust_email, cust_name, cust_phoneNumber, cust_lineid]);
      console.log("add new customer");
      check_customer = await db.query('SELECT cust_id FROM customer WHERE email=$1 OR phonenumber=$2 OR lineid=$3', [cust_email, cust_phoneNumber, cust_lineid]);
      //add question
      await db.query('INSERT INTO cust_quiz (quiz, cust_id) VALUES ($1, $2)', [cust_quiz, cust_id_selected]);
      console.log("add question");
    }
    
    res.redirect(client_origin+'/customer/submitquizcomplete')
  } catch (err) {
    console.log(err);
  }
  
});

app.post('/employee/addlist', async (req, res) => {
  const productname = req.body.productname;
  const categoryname = req.body.category;
  const suppliername = req.body.supplier;
  const lot_order = req.body.lot_order;
  const capital = req.body.capital;
  const sale1pc = req.body.sale1pc;

  try{

    //check category
    const category_db = await db.query('SELECT * FROM category');
    const found_category = category_db.rows.filter(category => category.name == categoryname);
    let cate_id = "";
    if (found_category.length>0){
      cate_id = found_category[0].cate_id;
      console.log(`category ${cate_id}`);
    } else {
      //add category
      await db.query('INSERT INTO category (name) VALUES ($1)', [categoryname]);
      console.log("add category");
      const get_cate_id = await db.query('SELECT cate_id FROM category WHERE name=$1',[categoryname]);
      cate_id = get_cate_id.rows[0].cate_id;
    }
    
    //check product
    const product_db = await db.query('SELECT item_id, cate_id, name FROM items');
    const found_product = product_db.rows.filter(product => product.name == productname);
    let item_id = "";
    if (found_product.length>0){
      item_id = found_product[0].item_id;
    } else {
      //add new product
      await db.query('INSERT INTO items (name, cate_id) VALUES ($1,$2)', [productname, cate_id]);
      console.log("add product");
      item_id = await db.query('SELECT item_id FROM items WHERE name=$1', [productname]);
    }

    //check supplier
    const supplier_db = await db.query('SELECT * FROM supplier');
    const found_supplier = supplier_db.rows.filter(sup => sup.name == suppliername);
    let sup_id = "";
    if (found_supplier.length>0){
      sup_id = found_supplier[0].sup_id;
    } else {
      await db.query('INSERT INTO supplier (name) VALUES ($1)',[suppliername]);
      console.log("add supplier");
      const get_sup_id = await db.query('SELECT sup_id FROM supplier WHERE name=$1', [suppliername]);
      sup_id = get_sup_id.rows[0].sup_id;
    }

    //add to inventory
    await db.query('INSERT INTO inventory (items_id, sup_id, lot_order, defect, instock, capital, sale1pc, createdat, createdby) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
      [item_id, sup_id, lot_order, 0, lot_order, capital, sale1pc, new Date(), 123456]);
    console.log("add inventory");

    res.redirect(client_origin+'/employee/submitlistcomplete')
  } catch (err) {
    console.log(err);
  }
});

app.put('/employee/editlist', async (req, res) => {
  const productname = req.body.productname;
  const categoryname = req.body.category;
  const suppliername = req.body.supplier;
  const lot_order = req.body.lot_order;
  const capital = req.body.capital;
  const sale1pc = req.body.sale1pc;
  const instock = req.body.instock;
  const defect = req.body.defect;

  try {
    //check if items exist -> if not -> don't allow editing
    const items_db = await db.query('SELECT * FROM items');
    const found_item = items_db.rows.filter(item => item.name == productname);
    if(found_item.length>0){
      //update category
      //only add the new one
      // if(categoryname.length>0){
      //   const category_db = await db.query('SELECT * FROM category');
      //   const found_category = category_db.rows.filter(category => category.name == categoryname);
      //   let cate_id = "";
      //   if (found_category.length>0){
      //     cate_id = found_category[0].cate_id;
      //     console.log(`category ${cate_id}`);
      //   } else {
      //     //add category
      //     await db.query('INSERT INTO category (name) VALUES ($1)', [categoryname]);
      //     console.log("add category");
      //     const get_cate_id = await db.query('SELECT cate_id FROM category WHERE name=$1',[categoryname]);
      //     cate_id = get_cate_id.rows[0].cate_id;
      //   }
      // }

      // //update supplier
      // //only add the new one
      // if(suppliername.length>0){
      //   const supplier_db = await db.query('SELECT * FROM supplier');
      //   const found_supplier = supplier_db.rows.filter(sup => sup.name == suppliername);
      //   let sup_id = "";
      //   if (found_supplier.length>0){
      //     sup_id = found_supplier[0].sup_id;
      //   } else {
      //     await db.query('INSERT INTO supplier (name) VALUES ($1)',[suppliername]);
      //     console.log("add supplier");
      //     const get_sup_id = await db.query('SELECT sup_id FROM supplier WHERE name=$1', [suppliername]);
      //     sup_id = get_sup_id.rows[0].sup_id;
      //   }
      // }

      res.redirect(client_origin+'/employee/submitlistcomplete')

    } else {
      res.redirect(client_origin+'/employee/submitlistcomplete')
    }

  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://${process.env.VITE_DB_HOST}:${port}`);
});