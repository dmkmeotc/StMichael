

import {
  Card,

  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"


export function SupportCard() {
  return (
    <Card className="w-full max-w-sm bg-ethBlack-100  rounded-none ">
      <CardHeader>
        
        <CardTitle className=" place-items-center">
          <div className='grid  grid-cols-2 '>
<div>
   <Avatar className='w-24 h-24 m-6 place-self-center '>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>RN</AvatarFallback>
</Avatar>
    
</div>
<div >
 <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
      Support <br/> the <br/>  Church
    </h1>
</div>
</div>

            </CardTitle>
    
      
      </CardHeader>
      <CardContent>
       
   <div className=" grid grid-cols-2 ">
    <div>
   <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Programs  <br/> for all <br/> ages
          </p>
    </h3>
</div>

<div  className='place-self-end mb-4 mr-4 bg-amber-300  p-7 rounded-2xl'>
   <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  SUPPORT <br/> THE <br/> CHURCH  
          </p>
    </h3>

</div>

   </div>
      </CardContent>
      
    </Card>
  )
}
