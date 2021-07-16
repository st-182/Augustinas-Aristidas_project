import mongoose from "mongoose";
import dotenv from "dotenv";

import Completed_Table from "./models/compledTableModel.js";

dotenv.config();

let completedTable = [
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/saxton-reclaimed-pine-dining-table/saxton-reclaimed-pine-dining-table.jpg`,
    name: `Saxton Reclaimed Pine Dining Table`,
    sizes: `length: 240cm, width: 100cm, heigh: 76cm`,
    color: `transparent`,
    material: `pine`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/ceramic-top-table-with-metal-legs/ceramic-top-table-with-metal-legs.jpg`,
    name: `Ceramic Top Table with Metal Legs`,
    sizes: `length: 167cm, width: 100cm, heigh: 76cm`,
    color: `ornament painting`,
    material: `metal, ceramic`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/tbl-506-ca-boden-table/painted-dining-table.jpg`,
    name: `Boden Bespoke Pine Kitchen Table`,
    sizes: `length: 300cm, width: 120cm, heigh: 85cm`,
    color: `black, transparent`,
    material: `metal, pine`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/sheffield-outdoor-patio-tables/round-outdoor-table.jpg`,
    name: `Sheffield Outdoor Patio Table`,
    sizes: `diameter: 90cm, heigh: 76cm`,
    color: `metallic, brown`,
    material: `reclaimed timber`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/TB-1833-PEP%20-%20Vintage%20Height%20Adjustable%20Cast%20Iron%20Dining%20Table/vintage-height-adjustable-cast-iron-dining-table.jpg`,
    name: `Vintage Height Adjustable Cast Iron Dining Table`,
    sizes: `diameter: 120cm, heigh: 81cm`,
    color: `brown`,
    material: `pine, cast iron`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/TBL-1911-PEP/metal-base-dining-table.jpg`,
    name: `Reclaimed Timber Table with Metal Base`,
    sizes: `length: 175cm, width: 106cm, heigh: 77cm`,
    color: `transparent`,
    material: `pine, steel`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/zinc-and-copper-edge-dining-table-with-wooden-base/copper-top-industrial-style-table.jpg`,
    name: `Zinc and Copper Edge Table Tops with a Wooden Tapered Base`,
    sizes: `length: 200cm, width: 80cm, heigh: 76.5cm`,
    color: `transparent, black`,
    material: `zinc, cooper, oak`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/TBL-1640-SH%20-%20Detroit%20Y%20Base%20Dining%20Table/detroit-table.jpg`,
    name: `Detroit Y Base Dining Table`,
    sizes: `length: 200cm, width: 90cm, heigh: 77cm`,
    color: `gray`,
    material: `pine`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/3704-windsor-dining-table/made%20to%20measure%20kitchen%20table.jpg`,
    name: `Windsor Bespoke Double Pedestal Table With Oiled Finish`,
    sizes: `length: 250cm, width: 90cm, heigh: 79cm`,
    color: `white`,
    material: `oak`,
  },
  {
    image: `https://www.peppermillinteriors.com/image/catalog/products/TBL-1160-CA-swing-out-seat-table/swing-out-seat-table.jpg`,
    name: `Swing Out Seat Table`,
    sizes: `length: 30cm, width: 97cm, heigh: 81cm`,
    color: `transparent`,
    material: `reclaimed timber (railway sleepers) `,
  },
];

// //Connecting mongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log(`Connected to MongoDB from seeder`);
//     Completed_Table.insertMany(completedTable);
//   })
//   .catch((err) => console.log(err));
