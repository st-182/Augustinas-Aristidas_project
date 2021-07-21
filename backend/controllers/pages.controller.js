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

const putOrderToPortfolio = async (req, res) => {
  let id = req.params.id;
  console.log(`order to portfolio`);
  let body = req.body;
  console.log(body);

  if (true) {
    await Order_a_Constructed_Table.findById(id).then((response) => {
      if (response) {
        console.log(`found in Order_a_Constructed_Table`);
        Completed_Table.create({
          image: `${body[0]}`,
          name: `${body[1]}`,
          sizes: `${response.table_length ? response.table_length + ", " : ``}${
            response.table_width ? response.table_width + ", " : ``
          }${response.table_diameter ? response.table_diameter + ", " : ``}${
            response.table_height ? response.table_height + "" : ``
          }`,
          color: `${
            response.table_order_color ? response.table_order_color : ``
          }`,
          material: `${
            response.table_order_material_type
              ? response.table_order_material_type + ": "
              : ``
          }${
            response.table_order_material
              ? response.table_order_material + ""
              : ``
          }`,
        }).then((message) => {
          Order_a_Constructed_Table.findByIdAndDelete(id).then((message) => {
            console.log(message);
          });
          console.log(message);
        });
        console.log(response);
        res.json(response);
      } else {
        console.log(`found in Order_a_Custom_Table`);
        Order_a_Custom_Table.findById(id).then((message) => {
          Completed_Table.create({
            image: `${body[0]}`,
            name: `${body[1]}`,
            sizes: `${
              response.table_length ? response.table_length + ", " : ``
            }${response.table_width ? response.table_width + ", " : ``}${
              response.table_diameter ? response.table_diameter + ", " : ``
            }${response.table_height ? response.table_height + "" : ``}`,
            color: `${
              response.table_order_color ? response.table_order_color : ``
            }`,
            material: `${
              response.table_order_material_type
                ? response.table_order_material_type + ": "
                : ``
            }${
              response.table_order_material
                ? response.table_order_material + ""
                : ``
            }`,
          }).then((res) => {
            console.log(res);
            Order_a_Custom_Table.findByIdAndDelete(id).then((message) => {
              console.log(message);
            });
          });
        });
        res.json(response);
      }
    });
  }
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
  console.log(`update started`);
  let data = req.body;
  if (data.inProgress === `true`) {
    await Order_a_Constructed_Table.findById(id).then((response) => {
      if (response) {
        console.log(`found in Order_a_Constructed_Table`);
        Order_a_Constructed_Table.findByIdAndUpdate(id, {
          inProgress: true,
        }).then((message) => {
          console.log(message);
        });
        res.json(response);
      } else {
        console.log(`found in Order_a_Custom_Table`);
        Order_a_Custom_Table.findByIdAndUpdate(id, { inProgress: true }).then(
          (message) => {
            console.log(message);
          }
        );
        res.json(response);
      }
    });
  } else {
    await Order_a_Constructed_Table.findById(id).then((response) => {
      if (response) {
        console.log(`found in Order_a_Constructed_Table`);
        Order_a_Constructed_Table.findByIdAndUpdate(id, {
          inProgress: false,
        }).then((message) => {
          console.log(message);
        });
        res.json(response);
      } else {
        console.log(`found in Order_a_Custom_Table`);
        Order_a_Custom_Table.findByIdAndUpdate(id, { inProgress: false }).then(
          (message) => {
            console.log(message);
          }
        );
        res.json(response);
      }
    });
  }
};

const deleteOrder = async (req, res) => {
  let id = req.params.id;
  console.log(`delete started`);
  if (true) {
    await Order_a_Constructed_Table.findById(id).then((response) => {
      if (response) {
        console.log(`found in Order_a_Constructed_Table`);
        Order_a_Constructed_Table.findByIdAndDelete(id).then((message) => {
          console.log(message);
        });
        res.json(response);
      } else {
        console.log(`found in Order_a_Custom_Table`);
        Order_a_Custom_Table.findByIdAndDelete(id).then((message) => {
          console.log(message);
        });
        res.json(response);
      }
    });
  }
};

export {
  getCompletedTables,
  getCompletedTablesById,
  putNewCustomOrder,
  putNewConstructedOrder,
  putOrderToPortfolio,
  showAllOrders,
  updateOrder,
  deleteOrder,
};
