import { hourly_sales, date_sales } from "../data.js";
import { useState, useEffect } from "react";
export default function Report_table(props) {
  const [total, setTotal] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  let sum = 0;
  hourly_sales.map((ele, key) => {
    sum += ele;
  });

  const [sumTotal, setSom] = useState([0]);
  
  useEffect(() => {
    if (props.cookies.length > 0) {
      let oldTotals = total.map((element, idx) => {
        return (element = element + hourly_sales[idx]);
      });
      setTotal(oldTotals);
      
    }
  }, [props.cookies]);

  useEffect(() => {
    if (props.cookies.length > 0) {
      let oldTotals = sumTotal.map((element, idx) => {
        return (element = element + sum);
      });
      setSom(oldTotals);
    }
  }, [props.cookies]);

  return (
    <div className="w-5/6 mx-auto mt-4 ">
      <table className="border border-collapse border-black ">
        <thead>
          <tr className="bg-green-500 border border-black">
            <th className="border border-collapse border-black ">Location</th>

            {date_sales.map((ele) => {
              return (
                <th className="border border-black " key={ele}>
                  {ele}
                </th>
              );
            })}

            <th>Total</th>
          </tr>
        </thead>

        <tbody>
            
          {props.cookies.map((items,idx) => {
              const flag = (
                <>
                
                  <td className="p-2 border border-black w-14" key={items}>
                    {items.location}
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
