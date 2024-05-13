import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "xnailedx";
const yourPassword = "xnailedx";
const yourAPIKey = "346864fe-17e6-4c4a-816f-3f4c31e577b8";
const yourBearerToken = "0a699f15-502e-4efd-b8cd-b80857e43902";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
  const result = await axios.get(API_URL +"random");
  res.render("index.ejs", {content: JSON.stringify(result.data)});
  }
  catch(error){
    res.status(404).send("Error:", console.error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
 try{
  const result = await axios.get(API_URL +"all?page=2",{
    auth:{
      username: yourUsername,
      password: yourPassword,
    },
  });
  res.render("index.ejs", {content:JSON.stringify(result.data)});
 }
 catch(error){
  res.status(404).send("Error:", error.message);
 }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const result = await axios.get(API_URL +"filter",{
      params:{
        score:5,
        apiKey: yourAPIKey
      },
    });
    res.render("index.ejs", {content:JSON.stringify(result.data)});
   }
   catch(error){
    res.status(404).send("Error:", error.message);
   }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try{
    const result = await axios.get(API_URL +"secrets/2",{
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs", {content:JSON.stringify(result.data)});
   }
   catch(error){
    res.status(404).send("Error:", error.message);
   }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
