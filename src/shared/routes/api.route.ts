import { Router } from 'express';
import healthCheckRoute from '../../modules/health-check/health-check.route'
import smartechRoute from '../../modules/smartech/smartech.route'


const router: Router = Router();
router.use('/health-check', healthCheckRoute);
router.use('/smartech', smartechRoute);

export default router;
