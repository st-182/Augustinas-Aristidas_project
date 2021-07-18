import Completed_Table from "../models/completedTableModel.js";
import Order_a_Constructed_Table from "../models/constructorOrderModel.js";
import Order_a_Custom_Table from "../models/customOrderModel.js";

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

const putNewCustomOrder = (req, res) => {
  let order = req.body;
  Order_a_Custom_Table.create(order)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const putNewConstructedOrder = (req, res) => {
  let order = req.body;
  Order_a_Constructed_Table.create(order)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const showAllOrders = (req, res) => {
  let id = req.params.id;
  Order_a_Custom_Table.aggregate([
    { $unionWith: { coll: "order_constructed_tables" } },
  ])
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};
export {
  getCompletedTables,
  getCompletedTablesById,
  putNewCustomOrder,
  putNewConstructedOrder,
  showAllOrders,
};
