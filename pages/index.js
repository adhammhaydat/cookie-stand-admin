import Head from 'next/head'
import { useState } from 'react'
export default function Home() {
  const [cookies,setCookies] = useState([])

  function submitHandler(e) {
    e.preventDefault();
    let stand={
      location:e.target.location.value,
      miniCustomers :e.target.min.value,
      maxCustomers:e.target.max.value,
      avgCookies:e.target.avg.value
    }
    setCookies([...cookies,stand])
    console.log(cookies)
  }
  return (
    <div className="flex flex-col bg-green-100  min-h-screen  ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="">
      <header className=" bg-green-500  w-full p0 absolute top-0 h-20 flex items-start">
          <h1 className="text-black p-6 text-4xl font-bold ">Cookie Stand Admin</h1>
        </header>
      <div className="flex flex-col bg-green-100 items-center justify-center my-28">
       <div className=" flex flex-col items-center bg-green-300 p-3">
         <div> 
           <h2 className="text-black p-6 text-2xl  text-center">
           Cookie Stand Admin
           </h2>
          </div>
         <div className="flex  flex-wrap ">
           <form className=" flex flex-col flex-wrap" onSubmit={(e)=>{submitHandler(e)}}>
             <div className="">
               <label>Location</label>
               <input type="text" className="w-11/12 m-2" name='location'/></div>
             <div className=" flex  place-items-center flex-wrap">
               
               <div className="flex flex-col  items-center">
                 <label>Minimum Costumers Per Hours</label>
                 <input className=" m-2" type="text" name='min'/>
                 </div>
               <div className="flex flex-col items-center "><label>Maximum Costumers Per Hours</label><input className=" m-2  " type="text" name='max' /></div>
               <div className="flex flex-col items-center "><label>Average Cookies Per Hours</label><input className=" m-2  " type="text" name='avg'/></div>
               <div className=""><input type="submit" value="Create" className="w-40 h-16 bg-green-500 m-2"/> </div>

             
             </div>
           </form>
         </div>

       </div>
       <section className="mt-4">
        <p> Report Table Comming Soon ...</p>
        <div className="mt-4">
        {cookies && cookies.map((ele,idx) =>{
          return (<p key={idx}> {JSON.stringify(ele)}</p>);
          

        })}
        </div>
        
      </section>
       </div>
      </main>
      
      <footer className="bg-green-400  w-screen p0 h-15 flex items-start">
        <h2 className="p-3 text-1xl">&copy; 2020</h2>
      </footer>
    </div>
  )
}
