//total booked function
const totalTimes = async(req,res)=>{
    // total booked data
    const totalTimesRoomData ={
           "customer Name":"Vijay",
           "Room Name":"11a",
           "Date":"28/06/2023",
           "Start Time":"10am",
           "End Time":"7pm",
           "Booking Id":"Abcd",
           "Booking date":"22/06/2023",
           "Booking status":"No"
    }
    try {
        res.status(200).send(totalTimesRoomData)
    } catch (error) {
        console.log(error)
        res.send(500).send({
            error
        })
    }
}
export default {
    totalTimes
}