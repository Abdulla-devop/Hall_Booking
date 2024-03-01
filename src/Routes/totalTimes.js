import express from 'express'
//imported function
import TotalData from '../Controller/totalTimes.js'
//using express router
const router = express.Router()
//passing data to router
router.get('/',TotalData.totalTimes)

export default router