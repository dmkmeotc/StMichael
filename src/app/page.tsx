
import Fotter from "@/components/footer";
import Header from "@/components/header";
import Homebody from "@/components/homebody";




const Side = () => {
    return ( 

    <div  className=" flex flex-col items-center justify-start w-full  gap-0   ">
       <Header/>
       <Homebody/>
       <Fotter/>
    </div> );     
}
 
export default Side;