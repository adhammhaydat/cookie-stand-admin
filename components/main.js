import { useState } from "react";
import Header from "./header";
import Report_table from "./ReportTable.js";
import CreateForm from "./CreateForm.js";
import Footer from "./footer.js";
import useResource from '../hooks/useResource'
import { useAuth } from "../contexts/auth";
export default function Main() {
  const {user, login , logout} = useAuth()
  const { resources, loading, createResource, deleteResource } = useResource();
  const [cookies, setCookies] = useState([]);
 
  
  let handlCreate = (stand) => {
    setCookies([...cookies, stand]);
  };
  
  // console.log(user)
  return (
    <div>
    <Header logout={logout}/>
      <div className="flex flex-col items-center justify-center bg-green-100 my-28">
      <CreateForm createResource={createResource} loading={loading} />
        <section className="w-full">

         {resources?<Report_table resources={resources} deleteResource={deleteResource} loading={loading} />:<h1>No Cookies Stand Available</h1>}
          
        </section>
        <Footer cookies={cookies} />
      </div>
      
    </div>
  );
}
