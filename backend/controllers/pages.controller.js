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
  Order_a_Custom_Table.aggregate([
    { $unionWith: { coll: "order_constructed_tables" } },
  ])
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const updateOrder = async (req, res) => {
  let id = req.params.id;
  await Order_a_Constructed_Table.findById(id).then((response) => {
    // let responseArray = JSON.parse(response);
    if (response) {
      console.log(`found in Order_a_Constructed_Table`);
      console.log(response);
      res.json(response);
    } else {
      console.log(`found in Order_a_Custom_Table`);
      console.log(response);

      res.json(response.isDone);

      // Order_a_Custom_Table.findByIdAndUpdate(id)
    }
  });
};

export {
  getCompletedTables,
  getCompletedTablesById,
  putNewCustomOrder,
  putNewConstructedOrder,
  showAllOrders,
  updateOrder,
};
