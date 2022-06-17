
 export  const startEth=()=>{
    if(typeof window !== 'undefined'){
      return   {ethereum}=window;
   }
   }

 export  const getFromStorage = (key) => {
    if(typeof window !== 'undefined'){
         window.localstorage.getItem(key)
    }
    }