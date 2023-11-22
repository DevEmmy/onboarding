import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import corsOptions from './src/config/cors';
require("dotenv").config()


const app = express();
const port = String(process.env.PORT) || 3030;
      
// Set up your routes and middleware here
app.use(cors(corsOptions));
express.urlencoded({limit:"50mb", extended: false})
express.json({limit:"50mb"})
     
// Run MongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/onboarding`)
const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')});
      
//render the html file
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

// endpoints
// app.post("/users/sign-up", )
      
// Run Server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
      
  });
        