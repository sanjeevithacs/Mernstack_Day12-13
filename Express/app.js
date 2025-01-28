//24.01.25

// const http = require("http")

// const s = http.createServer()
// s.on("request",(req,res)=>{           //callback can be done like this too
//     console.log("server requested");
// })

// s.listen(14,()=>{console.log("running in server")})







//                                                     CUSTOM EVENTS

// const events = require("events")

// const customEvent = new events.EventEmitter()
// customEvent.on("cs",()=>{
//     console.log("cs is called");
// })
// customEvent.emit("cs")






//-----------------------------------------------------------------------------------------------------------------------------------------------------------



//                                                   EXPRESS JS

// const express = require("express")
// const path = require("path")

// const app = express()                     //closure

// app.get("/",(req,res)=>{
//     // console.log("server called");
//     // res.json({ok:true})
//     res.setHeader("Content-Type", "text/html");
//     console.log(res.getHeaders());
//     res.status(200).sendFile(__dirname+'/index.html')
// })
// app.listen(14,()=>{console.log("server is running");
// })







//--------------------------------------------------------------------------------------------------------------------------------------------------------


//                                                                       API

// const express = require("express")
// const http = require("http")
// const fs = require("fs")
// const path = require("path")
// const app = express()
// app.use(express.json())


// const jsonData =JSON.parse( fs.readFileSync(path.join(__dirname,"model","product.json"),"utf8"))     //JSON.parse - to covert json to obj


// app.get("/api/v1/products",(req,res)=>{
// // res.json(jsonData)

// try{
// res.status(200).json({
//     status : "fullfilled",             //to print data in postman
//     count:jsonData.length,
//     data:{
//         products:jsonData
//     }
// })
// } catch(err){
//     res.status(500).json({
//         status:"failed",
//         message:"error"
//     })
// }


// })



// app.get("/api/v1/products/:id/:id1?", (req, res) => {          //:id1 - return value of gn id | ? - make :id1 optional
//     console.log("yes");                                          // Output in terminal: yes

//     let id = req.params.id * 1;                                  // Convert to integer
//     let id1 = req.params.id1;                                    // Optional parameter

//     try {
//         const data = jsonData.find((i) => i.id === id);          // Find product by id
//         console.log(data); 
//         res.status(200).json({
//             status: "fulfilled",
//             count: data.length,                                            
//             data: {
//                 product: data
//             }
//         });
//     } catch (err) {
//         res.status(404).json({
//             status: "fail",
//             message:"error"                                   
//         });
//     }
// });


// //POST

// app.post("/api/v1/products",(req,res)=>{
//     // console.log(req.body)
//     const id = jsonData.length+1           // to create new id
//     const newProduct = {...req.body,id:id}
//     jsonData.push(newProduct) 
//     fs.writeFile(path.join(__dirname,"model","product.json"),JSON.stringify(jsonData),()=>{})    //to convert obj to json
//     res.json({
//         status:"fullfilled",
//         count:jsonData.length,
//         data:{
//             product:jsonData
//         }
//     })
// })



// app.delete("/api/v1/products/:id",(req,res)=>{
//     let id=req.params.id*1
//     let deletedJson = jsonData.filter((i)=>i.id!==id)
//     fs.writeFile(path.join(__dirname,"model","product.json"),JSON. stringify(deletedJson),()=>{})
//     res.status(204)
//     res.json()

// })




// app.patch("/api/v1/products/:id",(req,res)=>{
//     let id = req.params.id*1
//     let updateProd = jsonData.find((i)=>i.id===id)
//     let index = jsonData.indexOf(updateProd)
//     console.log( jsonData[index] );
//     jsonData[index] = Object.assign(updateProd,req.body)     //updateProd - target |  req.body - value
//     fs.writeFile(path.join(__dirname,"model","product.json"),JSON. stringify(jsonData),()=>{})    //to write update in json file
//     try{
//     res.status(200).json({
//         status:"patch updated",
//         count:updateProd.length,
//         data:{
//             product:updateProd
//         }
//     })
// }catch(err){res.json({status:"failed",message:"error"})}
    
// })




// app.put("/api/v1/products/:id",(req,res)=>{
//     let id = req.params.id*1
//     let updateProd=jsonData.find((i)=>i.id===id)
//     let index = jsonData.indexOf(updateProd)
//     console.log( jsonData[index] );
//     jsonData[index] =(req.body)                           // req.body - value
//     fs.writeFile(path.join(__dirname,"model","product.json"),JSON. stringify(jsonData),()=>{})    //to write update in json file
//     try{
//     res.status(200).json({
//         status:"put updated",
//         count:updateProd.length,
//         data:{
//             product:updateProd
//         }
//     })
// }catch(err){res.json({status:"failed",message:"error"})}

// })


// // app.get("/*",(req,res)=>{
// //     res.json({
// //         status:"failed"                            //http://localhost:3000/api/v1/productsapi means o/p status:"failed"
// //     }) 
// // })


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //                                               USE FUNCTION INSTEAD CALL BACK


// const express = require("express")
// const http = require("http")
// const app = express()
// app.use(express.json())

// const {getProducts, getProduct , post_fun , delete_fun, patch_fun, put_fun}= require("./routeHandler/productFunctions")   //importing 



// app.get("/api/v1/products",getProducts)

// app.get("/api/v1/products/:id/:id1?",getProduct);

// app.post("/api/v1/products",post_fun)

// app.delete("/api/v1/products/:id",delete_fun)

// app.patch("/api/v1/products/:id",patch_fun)

// app.put("/api/v1/products/:id",put_fun)



// app.listen(3000,()=>{console.log("http://127.0.0.1:3000")})






//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //                                                          MIDDLE WARE


// const express = require("express")
// const http = require("http")
// const app = express()
// const {getProducts, getProduct , post_fun , delete_fun, patch_fun, put_fun}= require("./routeHandler/productFunctions")   //importing 
// app.use(express.json())

// // app.use((req,res,next)=>{
// //     console.log("middleware");
// //     next() ;            // to execute following rest functions
// // })

// app.use(mid)

// function mid(req,res,next){
//         console.log("middleware");
//         next() ;            // to execute following rest functions
//     }




// app.get("/api/v1/products",getProducts)

// app.get("/api/v1/products/:id/:id1?",getProduct);

// app.post("/api/v1/products",post_fun)

// app.delete("/api/v1/products/:id",delete_fun)

// app.patch("/api/v1/products/:id",patch_fun)

// app.put("/api/v1/products/:id",put_fun)



// app.listen(3000,()=>{console.log("http://127.0.0.1:3000")})







//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //                                                          MORGAN  - just to log API call


// const express = require("express")
// // const http = require("http")
// const morgan = require("morgan")      //morgan import
// const app = express()
// // const {getProducts, getProduct , post_fun , delete_fun, patch_fun, put_fun}= require("./routeHandler/productFunctions")   //importing 
// const productRoutes = require("./routes/productRoutes")
// app.use(express.json())

// app.use(morgan("dev"))            


// // app.get("/api/v1/products",getProducts)

// // app.get("/api/v1/products/:id/:id1?",getProduct);

// // app.post("/api/v1/products",post_fun)

// // app.delete("/api/v1/products/:id",delete_fun)

// // app.patch("/api/v1/products/:id",patch_fun)

// // app.put("/api/v1/products/:id",put_fun)


// //SIMPLER FORM FOR ABOVE COMMENTED

// //                                                                ROUTE COMBINED

// // app.route("/api/v1/products").get(getProducts).post(post_fun)
// // app.route("/api/v1/products/:id").get(getProduct).delete(delete_fun).patch(patch_fun).put(put_fun)


// // MORE SIMPLER   -   ref productRoutes.js

// // const productRoutes=express.Router()
// // app.use("/api/v1/products",productRoutes)             // 'productRoute' linked with 'app' | 1st para - common url
// // productRoutes.route("/").get(getProducts).post(post_fun)
// // productRoutes.route("/:id").get(getProduct).delete(delete_fun).patch(patch_fun).put(put_fun)


// //from productRoutes.js
// app.use("/api/v1/products",productRoutes)             // 'productRoute' linked with 'app' | 1st para - common url


// // app.listen(3000,()=>{console.log("http://127.0.0.1:3000")})  // refer server.js 

// module.exports=app;         //for server.js



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//                                                         after DOTENV package

const express = require("express")
const morgan = require("morgan")
const productRoutes = require("./routes/productRoutes")
const app = express()

const dotenv = require("dotenv")      //import dotenv
dotenv.config({path:"./config.env"})   //configuring the package

app.use(express.json())
app.use(morgan("dev"))


app.use("/api/v1/products", productRoutes)




module.exports = app;