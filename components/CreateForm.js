
export default function CreateForm(props) {
    function submitHandler(e) {
        e.preventDefault();
        let stand={
          location:e.target.location.value,
          minimum_customers_per_hour :e.target.min.value,
          maximum_customers_per_hour:e.target.max.value,
          average_cookies_per_sale:e.target.avg.value
        }
        props.handlCreate(stand)
        e.target.reset();
        
      }
    return(
      <div className="flex flex-col items-center p-3 bg-green-300 ">
      <div>
        <h2 className="p-6 text-2xl text-center text-black">
          Cookie Stand Admin
        </h2>
      </div>
      <div className="flex flex-wrap ">
        <form
          className="flex flex-col flex-wrap "
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="">
            <label>Location</label>
            <input type="text" className="w-11/12 m-2" name="location" />
          </div>
          <div className="flex flex-wrap place-items-center">
            <div className="flex flex-col items-center">
              <label>Minimum Costumers Per Hours</label>
              <input className="m-2 " type="text" name="min" />
            </div>
            <div className="flex flex-col items-center ">
              <label>Maximum Costumers Per Hours</label>
              <input className="m-2 " type="text" name="max" />
            </div>
            <div className="flex flex-col items-center ">
              <label>Average Cookies Per Hours</label>
              <input className="m-2 " type="text" name="avg" />
            </div>
            <div className="">
              <input
                type="submit"
                value="Create"
                className="w-40 h-16 m-2 bg-green-500"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}