import { Outlet, json, useLoaderData} from "react-router-dom";
import SingleElement from "./SingleElement";
import DropDown from "./DropDown";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


interface DATA{
  name:string;
  routh?:string;
  children?:{name:string,routh:string}[]
}

const Layout = () => {
  const lists = useLoaderData() as DATA[];

  return (
    <>
      <nav className="flex gap-3">
        

        {lists.map((el) => {
          return el.children ? (
            <DropDown key={uuidv4()} options={el.children} name={el.name} />
          ) : (
            <SingleElement key={uuidv4()} name ={el.name} routh={el.routh}/>
          );
        })}
       
      </nav>
      <main>
     
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

export async function loader() {
  try{
    
    const fetchLists = await axios.get("http://localhost:3004/links");
    return fetchLists.data;
  }catch(error){
throw json({message:"Cound not fetch"},{status:500})
  }
//console.log(fetchLists)
}
