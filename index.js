//importing express
import express from 'express'
import IndexRouter from './src/Routes/index.js'
// port
const PORT = process.env.PORT || 8000
const app = express()
// middle wares
app.use(express.json())

//post data
let newRoom = {
    id:"1",
    CustomerName:"Vinoth",
    Date:"22/10/2023",
     StartTime:"11pm",
     EndTime:"2pm",
     RoomID:"10c"
}
// using indexrouter with app
app.use('/',IndexRouter)

//post data function
app.post("/book",(req,res) => {
    let value = req.body.StartTime !== newRoom.StartTime || req.body.EndTime  !== newRoom.EndTime || req.body.RoomID  !== newRoom.RoomID   
    if(value){
        value === true
        const bookRoom = {...req.body,
            id:(newRoom.length + 1).toString(),
            };
            newRoom = {...newRoom,bookRoom}
            
            res.send(newRoom);
    }else{
        res.send("Kindly select different timing")
    }
});

//port listening server
app.listen(PORT,()=>{
    console.log(`Server listening port ${PORT}`)
})