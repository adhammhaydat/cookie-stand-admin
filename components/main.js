import { useState } from "react";
import Header from "./header";
import Report_table from "./ReportTable.js";
import CreateForm from "./CreateForm.js";
import Footer from "./footer.js";
import { useRouter } from 'next/router'
import useResource from '../hooks/useResource'
import { useAuth } from "../contexts/auth";
export default function Main() {
  const {user, login , logout} = useAuth()
  const { resources, loading, createResource, deleteResource } = useResource();
  const [cookies, setCookies] = useState([]);
  const router = useRouter()
  
  let handlCreate = (stand) => {
    setCookies([...cookies, stand]);
  };
  
  // console.log(user)
  return (
    <div>
    <Header logout={logout}/>
      <div className="flex flex-col items-center justify-center bg-green-100 my-28">
      <CreateForm handlCreate={handlCreate}  />
        <section className="w-full">
          
        
         {cookies.length>0?<Report_table cookies={cookies} />:<h1>No Cookies Stand Available</h1>}
          {user&& <h1>hello</h1>}
        </section>
        <Footer cookies={cookies} />
      </div>
      
    </div>
  );
}
