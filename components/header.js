import Link from "next/link";
export default function Header({logout}) {
  // const { data: currentUser } = useSWR("user", storage);
    return ( 
    <header className="absolute top-0 flex items-start justify-between w-full h-20 bg-green-500 p0">
          
    <div><h1 className="p-6 text-4xl font-bold tet-black ">Cookie Stand Admin</h1></div>
    <div className="p-6 space-x-6"><Link href="/Overview"><button  className="text-2xl btn btn-primary">Overview</button></Link><Link href="/"><button onClick={(e)=>{logout('','')}} className="text-2xl btn btn-primary">Logout</button></Link></div>
    
    
  </header>)
}