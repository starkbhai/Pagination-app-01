import React, { useEffect, useState } from 'react'

const Home = () => {

    const [array,sArray]=useState();
    const [err,sErr]=useState();
    const [currPgeVal,sCurrPageVal]=useState();

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/comments")
      //  fetch("https://jsonplaceholder.typicode.com/posts")
       .then((res)=>res.json())
       .then((response)=>{sArray(response)})
       .catch((err)=>{
        sErr(err.message)
       })
    },[]);

    const[maxNum,sMaxNum]=useState(4);
    const[minNum,sMinNum]=useState(-2);
    
 
    
    const pageBtn=(pageVal)=>{
      
        sMaxNum(pageVal+3);
        sMinNum(pageVal-3);
        console.log(pageVal)
        console.log(minNum)
        console.log(maxNum)
     }

       // page show number define and update here for dynamic 
            const length = array && array.length;
            const fArray = array &&  array.slice(((minNum+3)*6)-6,(maxNum-3)*6);
            const totalPages = Math.ceil(length/6);


     console.log(fArray)
    //  console.log(array)



   const printData = fArray && fArray.map((v)=>{
         return (
            <div key={v.id} className=' leading-6 border border-yellow-500 w-[400px] pl-5 pr-5 pt-3'>
                    <h2 className='font-extrabold text-white bg-red-800 text-xl text-center'>{v.id}</h2>
                    <h1 className='font-mono font-semibold text-blue-500'>{v.name.slice(0,10)}</h1>
                    
                    <h3 className='font-san font-normarl '>{v.email}</h3>
                    <p className='text-justify mt-2 font-serif  font-medium '>{v.body.slice(0,110)}</p>
                    
            </div>
            
            
         )
   })
   


   const pageArray = [];
   for(var i=1; i<=totalPages; i++){
    pageArray.push(i);
   }
    
    
     const dots=()=>{
          return (
            <h2 className='border border-yellow-500 border-2xl py-2 px-4 border-2 mx-2' >. . .</h2>
          )
     };



   
    const paginationLine = pageArray && pageArray.map((v)=>{
     
         if( v>=minNum  && v<=maxNum){
            return (
                
                <button onClick={()=>{ pageBtn(v) 
                  sCurrPageVal(v)
                   }} className='border border-black px-2 py-2 focus:bg-red-600 focus:text-white'>  {v}</button>
             )
        }
       
    }) 


    const stend=(vae)=>{
      sCurrPageVal(vae);
        
        sMaxNum(vae+3);
        sMinNum(vae-3);
    }

  return (  
    <>
  
    <div className='grid grid-cols-3 gap-5 ml-5 mr-5 mt-5'>
      {err || printData}
  </div>
  <p className='text-center font-semibold'>{`total itemsl ${length} and total genrated pages${totalPages}`} </p>
    {/* <h1>{currPgeVal}</h1> */}
   <div className='flex mt-16 cursor-pointer justify-center align-center w-full  '>
        <button onClick={()=>{stend(1)}} className='bg-sky-600 py-1 px-8 text-white font-semibold mr-4' >Pre</button>
        { currPgeVal>4 ? dots() : null} {paginationLine} { currPgeVal<totalPages-3 ? dots() : null}
        <button onClick={()=>{stend(totalPages)}} className='bg-red-600 py-1 px-6 text-white font-semibold ml-4'>Next</button>
   </div>

    </>

  )
}

export default Home
