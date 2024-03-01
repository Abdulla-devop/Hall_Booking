import express from 'express'
//imported function
import CreateRoom from '../Controller/cretaeRoom.js'
//using express router
const router = express.Router()
//passing data to router
router.get('/',CreateRoom.createRoom)


export default router