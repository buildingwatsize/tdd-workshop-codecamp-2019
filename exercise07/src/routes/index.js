import express from 'express';
import setupAddRoutes from "./add";
import setupGetRoutes from "./get";

function setupRoutes(app) {
  const addRouter = express.Router();
  setupAddRoutes(addRouter);
  app.use('/add', addRouter);
  
  const getRouter = express.Router();
  setupGetRoutes(getRouter);
  app.use('/get', getRouter);

  app.use('/', (req, res) => res.send("Hello!"));
}

export default setupRoutes;
