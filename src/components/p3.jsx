import { AiFillRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function P3(){
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(true);

    return(
        <>
            <div id="container3">
                <nav className="navbar">
                    <div className="navbar-links">
                        <Link to='/logIn'><a href="#login" className="logIn">Login</a></Link>
                        <Link to='/signUp'><a href="#signup" className="signUp">SignUp</a></Link>
                    </div>
                </nav>
            
                <div id="page3-box">
                    <section id="page3-s1" className="page2-box">
                        <div style={{fontWeight:"600", fontSize:"1.5rem"}}>Step 2:</div>
                        
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
                    </section>


                    <section id="page3-s2">
                        <div className="s2-box">
                            output here...
                        </div>

                        <div className="div">
                            <input spellCheck="false" placeholder="Ask prepAssist"/>
                            <button>
                                <AiFillRightCircle style={{fontSize:"2.5rem", color:"#1ba057"}}/>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default P3;