import express from 'express'
//imported function
import RoomBooked from '../Controller/roomBooked.js'
//using express router
const router = express.Router()
//passing data to router
router.get('/',RoomBooked.roomsData)


export default router
