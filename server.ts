import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import corsOptions from './src/config/cors';
require("dotenv").config()
import userRoute from "./src/routes/user-routes"
import songRoute from "./src/routes/song-routes"
import artistsRoute from "./src/routes/artists-routes"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"
require("dotenv").config()


const app = express();
const port = String(process.env.PORT) || 3040;
      
// Set up your routes and middleware here
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }))

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "PlayBucks API",
      version: "0.1.0",
      description:
        "This is the docs for all APIs for PlauBucks",
    },
    servers: [
      {
        url: "http://localhost:3040",
      },
    ],
  },
  apis: ["./src/docs/*.ts"],
};

const specs = swaggerJSDoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true,
    customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
  })
);
     
// Run MongoDB
mongoose.connect(String(process.env.DB_URI))
const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')});
      
//render the html file
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

app.use("/auth", userRoute)
app.use("/artists", artistsRoute)
app.use("/songs", songRoute)

// endpoints
// app.post("/users/sign-up", )
      
// Run Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
        