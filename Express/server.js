// const app = require("./app")

// app.listen(3000,()=>{console.log("http://127.0.0.1:3000")})


//---------------------------------------------------------------------------------------------------------------------------------------------------

//                                                           AFTER DOTENV package

const app = require("./app")

// console.log(process.env.PORT);
let port=process.env.PORT || 3000       // 3000 - automatically runs in 3000 when PORT is not given 

app.listen(port,()=>{console.log("http://127.0.0.1:3000")})
