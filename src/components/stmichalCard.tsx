import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Card,

  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function StMichalCard() {
  return (
    <Card className="w-full   max-w-lg  bg-ethBlack-100  rounded-none  border-0 shadow-none ">
      <CardHeader>
        
        <CardTitle className=" place-items-center">
             <Image
                  src="/michatEt.png" // place your image inside the /public/images folder
                  alt="Holy Celebration"
                  width={300}
                  height={400}
                
              
                />
               <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
    Service Schedule
    </h1>
            </CardTitle>
    
      
      </CardHeader>
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Sunday at 9:00 AM<br />
          Wednesday at 12:00 PM
          </p>
    </h3>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full bg-ethYellow-300 hover:bg-ethYellow-400 m-4">Request Service</Button>
      
      </CardFooter>
    </Card>
  )
}
