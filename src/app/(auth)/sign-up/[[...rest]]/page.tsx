"use client"

import { SignUp } from "@clerk/nextjs"

const Page = () =>{
    return( 
        <div className="mt-4 w-full flex-1 flex justify-center">
            <SignUp/>
        </div>
    )
}

export default Page;