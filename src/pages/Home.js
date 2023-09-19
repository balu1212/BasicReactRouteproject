import {Link} from "react-router-dom";
import './Page1.css';
import React from 'react';
function Home() 
{
    return(
        <div className="parent">
        <div className="ContainerPage2">
            <nav>
             <Link className="submit1" to="/Page1"><b>PAGE 1</b></Link>
             <Link  className="submit1" to="/Page2"><b>PAGE 2</b></Link>
            </nav>
        </div>
        </div>
    )
}
export default Home;