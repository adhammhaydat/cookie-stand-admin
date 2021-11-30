import Head from 'next/head'
import CookieStandAdmin from '../components/CookieStandAdmin'
import CustomHead from '../components/Head'

export default function Home() {
  
  return (
    <div className="flex flex-col bg-green-100  min-h-screen">
      
      <CustomHead/>
      <CookieStandAdmin/>
      
      
    </div>
  )
}
