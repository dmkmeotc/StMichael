import Fotter from "@/components/footer";
import Header from "@/components/header";
import Homebody from "@/components/homebody";

const Side = () => {
    return ( 
    <div  className="flex  flex-col justify-start items-center w-full p-2  ">
       <Header/>
       <Homebody/>
       <Fotter/>
    </div> );
}
 
export default Side;