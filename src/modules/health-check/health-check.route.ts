import * as express from 'express';
import healthCheckController from './health-check.controller'

const healthCheckrouter = express.Router();
healthCheckrouter.get('/',  healthCheckController.status);
export default healthCheckrouter;
