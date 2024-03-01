// book room function
const bookRoom = async(req,res)=>{
    //book room data
    const newRoom = [
        {
        id:"1",
        CustomerName:"Vinoth",
        Date:"22/10/2023",
         StartTime:"11pm",
         EndTime:"2pm",
         RoomID:"10c"
    }
    ]
    try {
        res.status(200).send(newRoom)
    } catch (error) {
        console.log(error)
        res.send(500).send({
            error
        })
    }
}
export default {
    bookRoom
}