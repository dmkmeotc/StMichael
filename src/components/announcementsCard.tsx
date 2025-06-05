import { Button } from "@/components/ui/button"

import {
  Card,


  CardHeader,

} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"


export function Announcements() {
  return (
    <Card className="w-full max-w-sm bg-ethBlack-100 rounded-none  border-0 shadow-none m-0 p-0">
      <CardHeader>
        
     
            <Avatar className='w-24 h-24 m-1 place-self-center'>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
                <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
      Announcements
    </h1>
 <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Parish events <br/> news & updates
          </p>
    </h3>

     <Button className="w-full   bg-ethYellow-300 hover:bg-ethYellow-400 m-2 ">BECOME MEMBER</Button>
         
    
      
      </CardHeader>
     
      
    </Card>
  )
}
