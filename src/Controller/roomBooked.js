// roombooked function
const roomsData = async(req,res)=>{
   // booked rooms data
    const bookedRoomsData ={
             "Room Name":"10c",
             "booked Status":"Yes",
             "customer name":"Rehan",
             "Date":"22/11/2023",
             "Start Time":"10pm",
             "End Time":"5pm"
    }
    try {
        res.status(200).send(bookedRoomsData)
    } catch (error) {
        console.log(error)
        res.send(500).send({
            error
        })
    }
}
export default {
    roomsData
}