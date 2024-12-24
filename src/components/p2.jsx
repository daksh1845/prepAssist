import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function P2(){
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);

    return(
        <>

            <nav className="navbar">
                    <div className="navbar-links">
                        <Link to='/logIn'><a href="#login" className="logIn">Login</a></Link>
                        <Link to='/signUp'><a href="#signup" className="signUp">SignUp</a></Link>
                    </div>
            </nav>
            
            <div id="container2">
                <div className="page2-box">
                    <div style={{fontWeight:"600", fontSize:"1.5rem"}}>Step 1:</div>
                    
                    <div style={{margin:"25px 0 15px 0"}}>
                        <button onClick={()=>{setOne(true); setTwo(false);}}>
                            Upload files<FaAngleDoubleDown style={{alignSelf:"center", marginLeft:"5px"}}/>
                        </button>
                        <div>
                            <p style={{fontSize:"0.8rem",marginTop:"5px" ,display: one ? 'block' : 'none'}}>Please upload all your notes and PDFs to this page, ensuring they are compressed to a minimal file size for efficiency</p>
                        </div>
                    </div>
                    
                    <div>
                        <button onClick={()=>{setOne(false); setTwo(true);}}>
                            Search your query<FaAngleDoubleDown style={{alignSelf:"center", marginLeft:"5px"}}/>
                        </button>
                        <div>
                            <p style={{fontSize:"0.8rem",marginTop:"5px", display: two ? 'block' : 'none'}}>Quickly find important and summarized explanations from uploaded files</p>
                        </div>
                    </div>
                </div>

                <section className="page2-s1">
                    <FaCirclePlus/>
                    <p>Drag & drop file here</p>
                </section>


                <section className="page2-s2 button-class">
                    Upload
                </section>


                <section className="page2-s3">
                    <div>Box 1</div>
                    <div className="hide-box">Box 2</div>
                    <div className="hide-box">Box 3</div>
                    <div className="hide-box">Box 4</div>
                    <div className="hide-box">Box 5</div>  
                    <div className="hide-box">Box 6</div>  
                </section>

                
                <section className="page2-s4 button-class">
                    <Link to='/ansPage' style={{color:"#FFD56C", textDecoration:"none", width:"100%",height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>Proceed</Link>
                </section>
                
            </div>
        </>
    )
}

export default P2;