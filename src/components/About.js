import React  from 'react';

export default function About(props) {
    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
let mystyle = {
    color:props.mode === 'dark'?'white':'gray',
    backgroundColor:props.mode === 'dark'?'gray':'white',
    // border:'2px solid black'
}
   
  

    return (
        <>
            <h1>About us</h1>
            <div className='container my-3' style={mystyle}>
                <div className="accordion"  id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={mystyle}>
                        
                                    TextUtils gives you a way to analyze your text quickly and efficientl.
                                    Be it word count, character count or 
                                
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Free to Use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                            
                                    TextUtils is a free character count tool that providers instant character count and word count statistics for a given text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word / character limit.
                                
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Browser Compatiable
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                
                                    This word counter software works in any web Browsers suc as Chrome , firefox, Internet Explorer , safari , Opera. It suits to count character in facebook . blog, books,excel document, pdf document etc. 
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-2'>
                    {/* <button onClick={toggleColor} type='button' className='btn btn-primary'>
                        {btnText}
                    </button> */}
                </div>
            </div>
        </>
    );
}
