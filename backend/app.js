const cors = require(`cors`);
const express = require(`express`);
const colors = require(`colors`);
const dotenv = require(`dotenv`);
const mongoose = require(`mongoose`);

const app = express();
dotenv.config();
app.use(cors());

// setting up mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`connected to mongoDB`.rainbow);
    app.listen(process.env.PORT, () =>
      //console.log(colors.inverse(`Server started`))
      console.log(
        `Server started`.yellow.underline +
          ` on port ` +
          `${process.env.PORT}`.blue
      )
    );
  });

const Product = mongoose.model("Product", {
  name: String,
  price: String,
  img: String,
});

app.use(`/`, (req, res) => {
  Product.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
});
