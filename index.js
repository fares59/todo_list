const express = require("express");
const routers = require("./routers");

const app = express();





app.use(express.json());

for(const route in routers){
  app.use(`/${route}`, new routers[route]().router);
}

// routers.route("/").get((req, res) => {
//     console.log("GET /");
//     res.send((req.method + req.path));
// })

// .post((req, res) => {
//     res.send((req.method + req.path));
// });
app.use('*', (req, res)=> res.send(false));


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT},`);
});