"use client"
import Fotter from "@/components/footer";
import Header from "@/components/header";
import Homebody from "@/components/homebody";





// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Side = () => {
  
   
    return ( 

    <div  className=" flex flex-col items-center justify-start  min-h- w-full  gap-0   ">
    
       <Header/>
       <Homebody/>
       <Fotter/>
    </div> );     
}
 
export default Side;