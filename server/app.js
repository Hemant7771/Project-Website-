const express = require("express");
const userMsg = require("./models/userMsg.js");
const app = express();
const cors = require("cors");
const port = 8000;
const product = require("./models/product.js");
const cartproduct = require("./models/cartproduct.js");
const connectToMongo = require("./mongo.js");
const { json } = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToMongo();

app.get("/contact-us", (req, res) => {
  res.json({
    msg: "hii",
  });
});

app.post("/contact-us", async (req, res) => {
  const usermsg = req.body;
  const { username, email, phone, subject, message } = usermsg;
  const data = {
    username: username,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };
  console.log(data)
  try {
    await userMsg.insertMany([data]);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send("An error occurred while saving the message.");
  }
});

app.get("/products/electronics/mobiles", async (req, res) => {
  res.send(await product.find({ category: "Mobile" }));
});

app.get("/products/electronics/laptops", async (req, res) => {
  res.send(await product.find({ category: "Laptop" }));
});

app.get("/products/electronics/:category/:id", async (req, res) => {
  const category = req.params.category;
  const firstLetter = category.charAt(0).toUpperCase();
  const remainingLetters = category.slice(1);
  const finalCategory =
    firstLetter + remainingLetters.substring(0, remainingLetters.length - 1);
  const productId = req.params.id;
  res.send(await product.findOne({ _id: productId, category: finalCategory }));
});


app.get("/getCartData2", async (req, res) => {
  try {
    const cartProducts = await cartproduct.find();
    const prodIds = cartProducts.map((prod) => prod.prodId);
    
    const productDetails = [];

    for (const prodId of prodIds) {
      const productDetail = await product.findOne({ _id: prodId });
      const productQty=await cartproduct.findOne({prodId:prodId})
      if (productDetail&&productQty) {
        productDetails.push({
          prodId:productDetail._id,
          imgurl: productDetail.imgurl,
          price: productDetail.price,
          productname: productDetail.productname,
          qty:productQty.qty
        });
      }
    }

    res.json(productDetails);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get("/getCartData", async (req, res) => {
  res.send(await cartproduct.find());
});

// app.post('/takeCartData',async(req,res)=>{
//   const cartData = await req.body;
//   // console.log(cartData)
//   await cartproduct.create(cartData);
// })

app.post("/takeCartData", async (req, res) => {
  try {
    const cartData = req.body;
    const data = cartData.prodId;
    const iscartdata = await cartproduct.findOne({ prodId: data });
    // console.log(iscartdata)
    if (iscartdata === null) {
      await cartproduct.create(cartData);
      res.status(200).json({ message: "added to cart" });
    } else {
      const prevqty = iscartdata.qty;
      console.log("qty" + prevqty);
      await cartproduct.updateOne({ prodId: data }, { qty: prevqty + 1 });
      res.status(200).json({ message: "cart updated" });
    }
    // res.sendStatus(200)
  } catch (error) {
    console.log("Error:", error);
    res.sendStatus(500);
  }
});


// app.post("/deleteCartData", async (req, res) => {
//   const CartData = await req.body;
//   const { id, name } = CartData;
//   try {
//     cartproduct.deleteOne({ _id: id }).then((res) => {
//       console.log(res);
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//   }
// });


app.post("/deleteCartData", async (req, res) => {
  const CartData = await req.body;
  console.log(CartData)
  const id = CartData.prodId;
  console.log(id)
  try {
    const iscartdata = await cartproduct.findOne({ prodId: id });
    console.log(iscartdata)
     if (iscartdata == null) {
      res.status(404).json({ message: "Cart data not found" });
      return; 
     }

    const prevqty = iscartdata.qty;
    if (prevqty == 1) {
      cartproduct.deleteOne({ prodId: id }).then((result) => {
        console.log(result);
        res.status(200).json({message:"deleted from the cart", updatedQty: 0})
        return 
      });
    } else {
      await cartproduct.updateOne({ prodId: id }, { qty: prevqty - 1 });
      res.status(200).json({message:"qty decreased from the cart", updatedQty: prevqty-1})
      return 
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen({ port }, () => {
  console.log("server is running on port", port);
});
