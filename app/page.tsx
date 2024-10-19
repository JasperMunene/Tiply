import {  Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tiply",
  description: "Tipping done differently"
}

const page = () => {
  return (
    <div className='flex justify-center items-center'>
      <h2 className='text-3xl'>hello</h2>
      <Button>Hello</Button>
      
    </div>
  )
}

export default page
