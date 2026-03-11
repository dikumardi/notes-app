const app = require("./src/app");
const connectedDB = require("./src/db/db");


connectedDB()

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
    
})