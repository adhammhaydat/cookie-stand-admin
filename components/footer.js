
export default function Footer(props) {
    return (
        <footer className="bg-green-400  w-screen p0 h-15 flex items-start my-28">
        <h2 className="p-3 text-1xl"> {props.cookies.length} Locations World Wide</h2>
      </footer>
    )
}