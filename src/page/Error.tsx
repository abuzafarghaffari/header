import { useRouteError } from "react-router-dom";

const Error =()=>{
const error= useRouteError();
console.log(error.status)

    return (<>
    <h1>{error.data.message}</h1>
    </>)
}

export default Error;