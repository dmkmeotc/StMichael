import { Announcements } from "./announcementsCard";
import { StMichalCard } from "./stmichalCard";
import { SupportCard } from "./supportCard";

          
         

const Homebody = () => {
    return ( 
      <div
  className="grid grid-cols-2 m-0 p-0 bg-ethBlack-100 border-0 w-full h-fit"
  style={{ gridTemplateRows: 'auto auto' }}
>
  <div className="row-span-2"><StMichalCard /></div>
  <div><Announcements /></div>
  <div><SupportCard /></div>
</div>




    );
}
 
export default Homebody;