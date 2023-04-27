import * as express from 'express';
import smartechController from './smartech.controller'

const smartechRouter = express.Router();
smartechRouter.post('/',  smartechController.SubmitForm);
export default smartechRouter;
