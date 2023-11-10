import React, { useEffect } from 'react';
import "../../assets/css/page_404_style.css"

const Page404=()=> {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
   
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <a href="/">Homepage</a>
        </div>
    </div>
  )
}
 
export default Page404;