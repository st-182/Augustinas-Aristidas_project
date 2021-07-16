import Completed_Table from "../models/completedTableModel.js";
import Order_a_Table from "../models/orderModel.js";

const getCompletedTables = (req, res) => {
  Completed_Table.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const getCompletedTablesById = (req, res) => {
  let id = req.params.id;
  Completed_Table.findById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const putNewOrder = (req, res) => {
  let order = req.body
  Order_a_Table.insertOne(order)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const showAllOrders = (req, res) => {
  let id = req.params.id;
  Order_a_Table.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};
export {
  getCompletedTables,
  getCompletedTablesById,
  putNewOrder,
  showAllOrders,
};
