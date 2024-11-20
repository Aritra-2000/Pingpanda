"use client"

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Heading } from "./heading";
import { useRouter } from "next/navigation";

interface DashboardPageProps{
    title: string,
    children?: ReactNode,
    hideBackButton?:boolean
    cta?: ReactNode
}

export const DashboardPage = ({title, children, cta, hideBackButton} : DashboardPageProps) =>{

    const router = useRouter()

    const handleClick = () =>{
        if(title == "Dashboard"){
            return router.push("/")
        }

        return router.push("/dashboard");
    }

    return(
        <section className="flex-1 h-full w-full flex flex-col">
            <div className="w-full p-6 sm:p-8 flex justify-between border-b border-gray-200">
                <div className="w-full flex flex-col items-start sm:flex-row sm:items-center gap-6">
                    <div className="flex items-center gap-8">
                        {hideBackButton? null: (
                            <Button className="fit bg-white" variant={"outline"}  onClick={handleClick}>
                            <ArrowLeft className="size-4"/>
                            </Button>
                        )}
                        <Heading>{title}</Heading>
                    </div>

                   {cta ? <div className="w-full">{cta}</div> : null}
                </div>
            </div>
            <div className="flex flex-1 p-6 sm:p-8 flex-col overflow-y-auto">
                {children}
            </div>
        </section>
    )
}