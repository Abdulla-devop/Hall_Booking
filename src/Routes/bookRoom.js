import express from 'express'
//imported function
import BookRoom from '../Controller/bookRoom.js'
//using express router
const router = express.Router()

//passing data to router
router.get('/',BookRoom.bookRoom)


export default router