import { Button } from "@/components/ui/button"

import {
  Card,
  CardHeader,

 
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
export function StMichalCard() {
  return (
    <Card className="w-full flex bg-transparent overflow-hidden  rounded-none  border-0 shadow-none m-0 p-0">
      <CardHeader>
          <Avatar className='w-44 h-54 m-[2px] place-self-center'>
   <AvatarImage src="/michatEt.png" /> 
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        
            {/*  <Image
                  src="/michatEt.png" // place your image inside the /public/images folder
                  alt="Holy Celebration"
                  width={75}
                  height={50}
                  className="place-self-center object-cover"          
              
                /> */}
               <h1 className="scroll-m-20 text-center text-2xl md:text-[1rem] lg:text-xl xl:text-2xl font-extrabold tracking-tight text-balance">
    Service Schedule
    </h1>

     <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center">
       <p>  Sunday at 9:00 AM<br />
          Wednesday at 12:00 PM
          </p>
    </h3>
    <Button className="w-full bg-ethYellow-300 hover:bg-ethYellow-400 m-4">Request Service</Button>
            
    
      
      </CardHeader>
    
    </Card>
  )
}