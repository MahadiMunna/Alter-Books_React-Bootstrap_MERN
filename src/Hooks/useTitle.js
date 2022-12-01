import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Alter books`
    },[title])
};

export default useTitle;