import Partner from "../../../assets/Ride/Group 10 (1).png"
import Ride from "../../../assets/Ride/Group 16 (1).png"

const RideUs = () => {
    return (
        <>
            <div className="flex mx-auto justify-center">
                <div className="mr-2">
                    <img src={Partner} alt="Partner with us" />
                </div>
                <div>
                    <img src={Ride} alt="Ride with us" />
                </div>
            </div>
        </>
    )
}

export default RideUs