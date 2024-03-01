import express from 'express'
//imported function
import CustomerRoomBooked from '../Controller/customerBooked.js'
//using express router
const router = express.Router()
//passing data to router
router.get('/',CustomerRoomBooked.customersBooked)


export default router