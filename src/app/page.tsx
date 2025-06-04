import Fotter from "@/components/footer";
import Header from "@/components/header";
import Homebody from "@/components/homebod";

const Side = () => {
    return ( 
    <div  className="flex  flex-col justify-start items-center w-full ">
       <Header/>
       <Homebody/>
       <Fotter/>
    </div> );
}
 
export default Side;