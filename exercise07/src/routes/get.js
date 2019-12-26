import * as getController from '../controllers/get';

function setupGetRoutes(router) {
  router.get("/", getController.getTask);
}

export default setupGetRoutes
