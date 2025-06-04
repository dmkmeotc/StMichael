import { Button } from "@/components/ui/button"

import {
  Card,

  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"


export function Announcements() {
  return (
    <Card className="w-full max-w-sm bg-ethBlack-100  rounded-none">
      <CardHeader>
        
        <CardTitle className=" place-items-center">
            <Avatar className='w-24 h-24 m-6 place-self-center'>
 {/*  <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
                <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
      Announcements
    </h1>

            </CardTitle>
    
      
      </CardHeader>
      <CardContent>
       
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
       <p>  Parish events <br/> news & updates
          </p>
    </h3>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full bg-ethYellow-300 hover:bg-ethYellow-400 m-4">BECOME MEMBER</Button>
      
      </CardFooter>
    </Card>
  )
}
