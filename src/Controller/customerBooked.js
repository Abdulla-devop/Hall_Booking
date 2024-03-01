// booked rooms function
const customersBooked = async(req,res)=>{
    // booked room data
    const customerRoomsData ={
             "Customer Name":"Vijay",
             "Room Name":"12b",
             "Date":"12/03/2023",
             "Start Time":"10pm",
             "End Time":"5pm"
    }
    try {
        res.status(200).send(customerRoomsData)
    } catch (error) {
        console.log(error)
        res.send(500).send({
            error
        })
    }
}
export default {
    customersBooked
}