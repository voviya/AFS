import React from 'react';
import '../../assets/css/Navbar.css';
var Home=()=>
{
var styling={
fontSize:"30px",
textDecoration:"underline",
color:"blue",
textAlign:"center"
}
    return (
    <div><h1 style={styling}>This is Home page</h1>
        <h2 className='boxModel'> Navbar External Styling</h2>
        <p><b>To display 200 words use - lorem200</b></p>
          </div>
    )

}
export default Home;