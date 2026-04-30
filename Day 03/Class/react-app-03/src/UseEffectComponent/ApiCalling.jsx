import React,{Fragment, useEffect,useState} from "react";

const ApiCalling=()=>{
    let [apiData,setApiData]=useState([])
    useEffect(
        ()=>{
            (async()=>{
                let res=await fetch("https://api.github.com/users");
                console.log(res);
                let data= await res.json()
                console.log(data);
                setApiData([...data])
                
            })()
        },[]
    );
    return (
        <div style={({display:"flex",flexWrap:"wrap",gap:"20px"})}>
            {apiData.map(v=>(
                <Fragment key={v.id}>
                    <div>
                        <p><b>{v.id}</b>{v.login}</p>
                        <img src={'${v.avatar_url}'} height="200px" alt={'${v.login}'}></img>
                    </div>
                </Fragment>
            ))}

        </div>


        // <div>
        //     {apiData.map(v=>(<p><b>{v.id}</b>{v.login}</p>))}
        // </div>
    )
}

export default ApiCalling