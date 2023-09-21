import { Link, useLocation } from "react-router-dom"


const SingleElement:React.FC<{name:string,routh?:string}> = (props) => {
    const location = useLocation();
    console.log(location.pathname)

  return (
    <div className={`items-center rounded text-[30px] text-white px-2 bg-gray-400 hover:bg-gray-500 ${location.pathname=== props.routh && "active"}`}>

        <Link to={props.routh!}>{props.name}</Link>
    </div>
  )
}

export default SingleElement