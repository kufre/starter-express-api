import * as express from 'express';
import smartechController from './smartech.controller'

const smartechRouter = express.Router();
smartechRouter.post('/',  smartechController.hook);
export default smartechRouter;
