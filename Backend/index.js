 require("dotenv").config();
 const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");


const {HoldingsModel}=require("./model/HoldingsModel");
const {OrderModel}=require("./model/OrderModel");
const{PositionModel}=require("./model/PositionModel");
const {SignUp} = require("./utility/AuthController.js");
const {LogIn} = require("./utility/AuthController.js");


const app = express();
  
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());


const PORT= process.env.PORT || 3002;

const uri=process.env.MONGO_URI;

 mongoose.connect(uri)
 .then(()=>{
    console.log("connection successful with DB")
 })
 .catch((err)=>{
    console.log(err);
 });


// // Add TempHolding Data
//  app.get("/addHoldings",async(req,res)=>{
//      let tempHoldingsData=[
      
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },

//      ];

//      tempHoldingsData.forEach((item)=>{
//         let newHolding=new HoldingsModel({
//          name: item.name,
//          qty: item.qty,
//          avg: item.avg,
//          price: item.price,
//          net: item.net,
//          day: item.day,
//         });

//         newHolding.save();
//      })
//      res.send("Done");
//  })
 

// // add TempOrder Data
//  app.get("/addOders",async(req,res)=>{
//      let tempOrderData=[
//   {
//     name: "INFY",
//     price: 1555.45,
//     percent: "-1.60%",
//     isDown: true,
//   },
//   {
//     name: "ONGC",
//     price: 116.8,
//     percent: "-0.09%",
//     isDown: true,
//   },
//   {
//     name: "TCS",
//     price: 3194.8,
//     percent: "-0.25%",
//     isDown: true,
//   },
//   {
//     name: "KPITTECH",
//     price: 266.45,
//     percent: "3.54%",
//     isDown: false,
//   },
//   {
//     name: "QUICKHEAL",
//     price: 308.55,
//     percent: "-0.15%",
//     isDown: true,
//   },
//   {
//     name: "WIPRO",
//     price: 577.75,
//     percent: "0.32%",
//     isDown: false,
//   },
//   {
//     name: "M&M",
//     price: 779.8,
//     percent: "-0.01%",
//     isDown: true,
//   },
//   {
//     name: "RELIANCE",
//     price: 2112.4,
//     percent: "1.44%",
//     isDown: false,
//   },
//   {
//     name: "HUL",
//     price: 512.4,
//     percent: "1.04%",
//     isDown: false,
//   },
// ];

//      tempOrderData.forEach((item)=>{
//         let newOrder=new OrderModel({
//         name:item.name,
//         price: item.price,
//         percent:item.percent,
//         isDown: item.isDown,
//         });

//         newOrder.save();
//      })
//      res.send("Order Data Added");
//  })


//  // add temp position data
//   app.get("/addPositions",async(req,res)=>{
//      let tempPositionData= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//      tempPositionData.forEach((item)=>{
//         let newPosition=new PositionModel({
//        product: item.product,
//        name: item.name,
//        qty: item.qty,
//        avg: item.avg,
//        price:item.price,
//        net: item.net,
//        day: item.day,
//        isLoss:item.isLoss,
//         });

//         newPosition.save();
//      })
//      res.send("Position Data Added");
//  })

 
app.get("/allHoldings",async(req,res)=>{
   let allHoldings=await HoldingsModel.find({});
   res.json(allHoldings);
});



app.get("/allPositions",async(req,res)=>{
   let allPositions=await PositionModel.find({});
   res.json(allPositions);
})

app.get("/allOrders",async(req,res)=>{
   let allOrders=await OrderModel.find({});
   res.json(allOrders);
})

app.post("/newOrder",(req,res)=>{
     let newOrder= new OrderModel({
         name:req.body.name,
         qty: req.body.qty,
         price:req.body.price,
         mode: req.body.mode,
     })
     newOrder.save();

     res.send("Order Saved");
})

app.listen(PORT,()=>{
    console.log("App is started");
});

app.post("/signUp", SignUp);

app.post('/logIn', LogIn);


// app.use(
//   cors({
//     origin: [ "http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );


