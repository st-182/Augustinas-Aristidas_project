import Completed_Table from "../models/completedTableModel.js";

const showGrapesAndWine = (req, res) => {
  // Wine.find().then((response) => {
  //   res.json(response);
  // });
  Grape.aggregate([
    {
      $lookup: {
        from: "wines", //The collection you're getting the items from
        localField: "name", //The local field you're using to lookup
        foreignField: "grape", //The field the `A` document you're using to match
        as: "wines", //The name of the field that will be populated with the results
      },
    },
  ]).then((response) => {
    res.json(response);
  });
};

export { showGrapesAndWine };
