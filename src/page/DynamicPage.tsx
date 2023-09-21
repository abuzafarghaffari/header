import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicPage =()=>{

    const parm = useParams();
    

    return (
        <>
        <h2>Dynamic Page</h2>
<h1>{parm.idType}</h1>
        </>
    )
}

export default DynamicPage;