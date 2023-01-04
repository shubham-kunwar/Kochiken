import React, { useEffect, useState, useRef } from "react";



import * as s from "./styles/globalStyles";


import "./styles/index.css"


import Select from "./components/Select"
import { backgroundOption, uniqueOption, hatOption, accessoriesOption, faceOption, bodyOption, handleGenerate, downloadImage} from "./data/avatarOption.js"

function App() {
 
   
    // Function to generate random seeds for the API








    return (
        <s.Screen>
            <s.Container flex={1} ai={"center"} style={{ paddingTop: 30, backgroundColor: "var(--primary)" }} image={"/config/images/background.png"}>

                <s.StyledLogo alt={"logo"} id="mymainimage" src={"/config/images/logo.png"} />

                <s.ResponsiveWrapper flex={1} test>

                    <div>
                        <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm">
                            <div className="">
                                <h2 className="chakra-heading ">Customize Your Kochi</h2>
                               
                            </div>
                            <p className="chakra-text " style={{ marginBottom: "20px" }}>Join The Kochi Pack Today!</p>
                            <p className="chakra-text ">Generate your own custom profile picture and wear it on all your socials!</p>
                            <div>
                                <div className="mainBox"><p className="chakra-text c">Background</p></div>
                                <div md="5" className="css-0" >
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="bgImage" option={backgroundOption} forImage="changebgImage" />
                                    </div>
                                </div>
                              
                            </div>

                            <div>
                                <div className="css-0"><p className="chakra-text c">Face</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="faces" option={faceOption} forImage="changefaceImage" />
                                      
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="css-0"><p className="chakra-text c">Body</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="body" option={bodyOption} forImage="changebodyImage" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <s.Container flex={1} jc={"center"} ai={"center"}>
                        <s.StyledImg className="generateImage" alt={"example1"} id="changebgImage" src={"/config/layers/bgImage/cemetary.png"} />
                        <s.StyledImg className="generateImage" alt={"example"} id="changefaceImage" src={"/config/layers/faces/snoop.png"} />
                        <s.StyledImg className="generateImage" alt={"example"} id="changebodyImage" src={"/config/layers/body/army.png"} />
                        <s.StyledImg className="generateImage" alt={"example"} id="changeuniqueaddonImage" src={"/config/layers/xtras/none.png"} />
                        <s.StyledImg className="generateImage" alt={"example"} id="changeaccessoriesImage" src={"/config/layers/accessories/none.png"} />
                        <s.StyledImg className="generateImage" alt={"example"} id="changehatImage" src={"/config/layers/hats/army.png"} />
                        
                    </s.Container>


                    <div>
                        <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm css-xvauwm1">

                            <div>
                                <div className="css-0"><p className="chakra-text c">Hat</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="hats" option={hatOption} forImage="changehatImage" />
                                       
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="css-0"><p className="chakra-text c">Accessories</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="accessories" option={accessoriesOption} forImage="changeaccessoriesImage" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="css-0"><p className="chakra-text c">Add On</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="xtras" option={uniqueOption} forImage="changeuniqueaddonImage" />

                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <s.StyledButton id="gen" onClick={() => {
                                    handleGenerate()
                                }}>Randomize
                                </s.StyledButton>
                                <s.StyledButton id="down" onClick={() => {
                                    downloadImage()
                                }}>Download
                                </s.StyledButton>
                            </div>
                        </div>
                    </div>

                </s.ResponsiveWrapper>


            </s.Container>

        </s.Screen>
    );
}

export default App;