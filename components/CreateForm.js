
export default function CreateForm(props) {
    function submitHandler(e) {
        e.preventDefault();
        let stand={
          location:e.target.location.value,
          miniCustomers :e.target.min.value,
          maxCustomers:e.target.max.value,
          avgCookies:e.target.avg.value
        }
        props.handlCreate(stand)
        
      }
    return(
      <div className=" flex flex-col items-center bg-green-300 p-3">
      <div>
        <h2 className="text-black p-6 text-2xl  text-center">
          Cookie Stand Admin
        </h2>
      </div>
      <div className="flex  flex-wrap ">
        <form
          className=" flex flex-col flex-wrap"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="">
            <label>Location</label>
            <input type="text" className="w-11/12 m-2" name="location" />
          </div>
          <div className=" flex  place-items-center flex-wrap">
            <div className="flex flex-col  items-center">
              <label>Minimum Costumers Per Hours</label>
              <input className=" m-2" type="text" name="min" />
            </div>
            <div className="flex flex-col items-center ">
              <label>Maximum Costumers Per Hours</label>
              <input className=" m-2  " type="text" name="max" />
            </div>
            <div className="flex flex-col items-center ">
              <label>Average Cookies Per Hours</label>
              <input className=" m-2  " type="text" name="avg" />
            </div>
            <div className="">
              <input
                type="submit"
                value="Create"
                className="w-40 h-16 bg-green-500 m-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}