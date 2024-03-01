// create room function
const createRoom = async(req,res)=>{
    //room data
    const room = {
        Number_of_seats_available: "244",
         Amenties_in_room:"AC, Wifi,TV,Fridge",
          Price_for_1_Hour:"Rs400"
    } 
    try {
        res.status(200).send(room)
    } catch (error) {
        console.log(error)
        res.send(500).send({
            error
        })
    }
}
export default {
    createRoom
}