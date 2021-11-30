import { useState } from "react";
import Header from "./header";
import Report_table from "./ReportTable.js";
import CreateForm from "./CreateForm.js";
import Footer from "./footer.js";

export default function Main() {
  const [cookies, setCookies] = useState([]);

  let handlCreate = (stand) => {
    setCookies([...cookies, stand]);
  };
  return (
    <div>
    <Header />
      <div className="flex flex-col bg-green-100 items-center justify-center my-28">
      <CreateForm handlCreate={handlCreate} />
        <section className="w-full">
          
        
         {cookies.length>0?<Report_table cookies={cookies} />:<h1>No Cookies Stand Available</h1>}
        
        </section>
        <Footer cookies={cookies} />
      </div>
      
    </div>
  );
}
