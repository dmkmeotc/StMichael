import { Announcements } from "./announcementsCard";
import { StMichalCard } from "./stmichalCard";
import { SupportCard } from "./supportCard";

          
         

const Homebody = () => {
    return ( 
       <div className="grid grid-cols-2 grid-rows-2  bg-ethBlack-100 border-0 w-full">

  <div className="row-span-2 "> <StMichalCard/></div>


  <div>  <Announcements/></div>


  <div >   < SupportCard/></div>
</div>




    );
}
 
export default Homebody;