import { hourly_sales, date_sales } from "../data.js";
import { useState, useEffect } from "react"
import Loding from  '../components/Loding'
export default function Report_table({resources, deleteResource,loading}) {
  if (loading) return <Loding />
  const [total, setTotal] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  let sum = 0;
  hourly_sales.map((ele, key) => {
    sum += ele;
  });

  const [sumTotal, setSom] = useState([0]);
  
  useEffect(() => {
    if (resources.length > 0) {
      let oldTotals = total.map((element, idx) => {
        return (element = element + hourly_sales[idx]);
      });
      setTotal(oldTotals);
      
    }
  }, [resources]);

  useEffect(() => {
    if (resources.length > 0) {
      let oldTotals = sumTotal.map((element, idx) => {
        return (element = element + sum);
      });
      setSom(oldTotals);
    }
  }, [resources]);

  return (
    <div className="w-5/6 mx-auto mt-4 ">
      <table className="border border-collapse border-black ">
        <thead>
          <tr className="bg-green-500 border border-black">
            <th className="border border-collapse border-black ">Location</th>

            {date_sales.map((ele,idx) => {
              return (
                <th className="border border-black " key={idx}>
                  {ele}
                </th>
              );
            })}

            <th>Total</th>
          </tr>
        </thead>

        <tbody>

          {resources.map((items,idx) => {
              const flag = (
                <>

                  <td className="flex justify-between w-20 p-2 border border-black" key={idx}>
                    <div>{items.location}</div>
                    <span className="" onClick={(e)=>{deleteResource(items.id)}}><svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 cursor-pointer danger'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        />
                      </svg></span>
                  </td>
                  {hourly_sales.map((ele) => {
                    return (
                      <>
                        <td className="text-center border border-black" key={ele}>{ele}</td>
                      </>
                    );
                  })}
                  <td className="text-center border border-black w-14">{sum}</td>
                
              </>
              )
                if (idx%2==0){
                    return (<tr key={items} className="bg-green-400 border border-black">{flag}</tr>)
                }else{
                    return (<tr key={items} className="bg-green-300 border border-black">{flag}</tr>)
                }
              
    
          })}
        </tbody>

        <tfoot>
          <tr className="bg-green-500">
            <th>Total</th>
            {total.map((ele, id) => {
              return <th className="text-center border border-black" key={id}>{ele}</th>;
            })}
            <th>{sumTotal}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
