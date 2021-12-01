import Link from "next/link";
export default function Header(props) {
  // const { data: currentUser } = useSWR("user", storage);
    return ( 
    <header className="absolute top-0 flex items-start w-full h-20 bg-green-500 p0">
          
    <h1 className="p-6 text-4xl font-bold tet-black ">Cookie Stand Admin</h1>
    {/* <Link href="/Login"><button  className="btn btn-primary">Login</button></Link> */}
    <button onClick={props.logout} className="btn btn-primary">Logout</button>
  </header>)
}