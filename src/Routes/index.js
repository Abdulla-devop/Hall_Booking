import express from 'express'
// all the function imported from each route
import CreateRoomRouter from './createRoom.js'
import BookRoomRouter from './bookRoom.js'
import RoomBookedRouter from './roomBooked.js'
import CustomerBookedRouter from './customerBooked.js'
import TotalTimesRouter from './totalTimes.js'
//using express router
const router = express.Router()
//routers for each data of the rooms
router.get('/',CreateRoomRouter)
router.use('/book',BookRoomRouter)
router.use('/bookedrooms',RoomBookedRouter)
router.use('/customerdata',CustomerBookedRouter)
router.use('/total',TotalTimesRouter)

export default router