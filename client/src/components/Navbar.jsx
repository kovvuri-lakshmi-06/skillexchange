import { School } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const Navbar=() =>{
  const user=true;

  return (
    <div className='h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
     {/*desktop */}
     <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">  
    <div  className="flex items-center gap-2">
    <School size={"30"}/>
    <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
    </div>
    { /*user icon and dark mode icon*/}
    <div>
     {
      user ? (<DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              My Learning
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
           
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator />
          
          
         
          <DropdownMenuItem>
           Dashboard
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>):(<div className="flex items-center gap-2">  
        <Button variant="outline" >
                Login
              </Button>
              <Button>Signup</Button>
      </div> )
     }
    </div>
     </div>
    </div>
  )
}

export default Navbar