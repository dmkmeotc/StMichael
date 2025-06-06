

import {
  Card,

  CardContent,


} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"


export function SupportCard() {
  return (
    <Card className="w-full  overflow-hidden flex flex-col bg-transparent   rounded-none  border-0 shadow-none m-0 p-0">
      
      <CardContent>
       
   <div className=" grid grid-cols-1 sm:grid-cols-2 gap-1  max-sm:place-items-center  ">
    <div>
   <Avatar className='w-24 h-24 m-[2px]  sm:w-16 sm:h-16  lg:w-24 lg:h-24 place-self-center '>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>RN</AvatarFallback>
</Avatar>
    
</div>
<div >
 <h1 className="scroll-m-20 text-center text-2xl md:text-[1rem] lg:text-xl xl:text-2xl font-extrabold tracking-tight text-balance">
      Support <br/> the <br/>  Church
    </h1>
</div>
    <div>
   <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center">
       <p>  Programs  <br/> for all <br/> ages
          </p>
    </h3>
</div>

<div  className=' mb-4 mr-4 bg-amber-300  rounded-2xl '>
   <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center text-ethBlack-50  ">
       <p>  SUPPORT <br/> THE <br/> CHURCH  
          </p>
    </h3>

</div>

   </div>
      </CardContent>
      
    </Card>
  )
}
 