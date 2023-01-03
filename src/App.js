import React, { useEffect, useState, useRef } from "react";

import Axios from 'axios';

import * as s from "./styles/globalStyles";

import Canvas from "./components/NewAvatar"
import "./styles/index.css"



function App() {
    // Setting up the initial states using react hook 'useState'
    const [sprite, setSprite] = useState("micah");
    const [seed, setSeed] = useState(1000);

    // Function to set the current sprite type
    function handleSprite(spritetype) {
        setSprite(spritetype);
    }

    //chnage color
   
    const [background, setBackground] = useState(`#704906`);
    // Function to generate random seeds for the API
    function handleGenerate() {
        let x = Math.floor(Math.random() * 1000);
        setSeed(x);
    }


    function downloadImage() {
        Axios({
            method: "get",
            url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`,
            responseType: "arraybuffer"
        })
            .then((response) => {
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(
                    new Blob([response.data],
                        { type: "application/octet-stream" })
                );
                link.download = `${seed}.svg`;
                document.body.appendChild(link);
                link.click();
                setTimeout(function () {
                    window.URL.revokeObjectURL(link);
                }, 200);
            })
            .catch((error) => { });
    }


    const selectBackground = document.getElementById("background");

 
   

React.useEffect(() => {
    const selectBackground = document.getElementById("background");
    selectBackground.addEventListener('change', (event) => {
            setBackground(event.target.value);
           
        });
    }, []);





    return (
        <s.Screen>
            <s.Container flex={1} ai={"center"} style={{ paddingTop: 30, backgroundColor: "var(--primary)" }} image={"/config/images/background.png"}>

                <s.StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
                
                <s.ResponsiveWrapper flex={1}  test>

                    <div>
                        <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm">
                            <div className="css-bxak8j">
                                <h2 className="chakra-heading css-8ur0oh">Customize Your Kochi</h2>
                                <hr aria-orientation="horizontal" className="chakra-divider css-reyeoi" />
                            </div>
                            <p className="chakra-text css-nf86c6" style={{ marginBottom: "20px" }}>Join The Kochi Pack Today!</p>
                            <p className="chakra-text css-nf86c6">Generate your own custom profile picture and wear it on all your socials!</p>
                            <div>
                                <div className="mainBox"><p className="chakra-text c">Background</p></div>
                                <div md="5" className="css-0" >
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select id="background" className="chakra-select css-1r2mtbn">
                                            <option value="#704906">Bronze</option>
                                            <option value="#13644b">Dark Green</option>
                                            <option value="#471052">Dark Purple</option>
                                            <option value="#FFAD57">Deep Carrot</option>
                                            <option value="#0E0E10">Eerie Black</option>
                                            <option value="#01590E">Green</option>
                                            <option value="#25F5FC">Light Blue</option>
                                            <option value="#C8F7D4">Light Green</option>
                                            <option value="#AC1DB8">Mauvelous</option>
                                            <option value="#5729CE">Maximum Blue Purple</option>
                                            <option value="#003FFF">Ocean Blue</option>
                                            <option value="#CCD811">Ocre</option>
                                            <option value="#980002">Red</option>
                                            <option value="#00FFBF">Turquoise</option>
                                            <option value="#38AEED">Yankees Blue</option>
                                            <option value="#FFFF00">Yellow</option>
                                            <option value="#FFD2DB">Red White</option>
                                            <option value="#FF3358">White Red</option>
                                        </select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                                <Canvas background={background} />
                            </div>

                            <div>
                                <div className="css-0"><p className="chakra-text c">Body</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select className="chakra-select css-1r2mtbn">
                                            <option value="body-black">Black</option>
                                            <option value="body-black-white-gradient">Black &amp; White Gradient</option>
                                            <option value="body-brown">Brown</option><option value="body-grey">Grey</option>
                                            <option value="body-lightgrey-grey-black">Light Grey &amp; Black</option>
                                            <option value="body-purple">Purple</option>
                                            <option value="body-white">White</option>
                                        </select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="css-0"><p className="chakra-text c">Mouth</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select className="chakra-select css-1r2mtbn">
                                            <option value="mouth-black-1">Black Mouth Closed Smile</option>
                                            <option value="mouth-black-2">Black Mouth Open &amp; Fangs</option>
                                            <option value="mouth-black-3">Black Mouth Open Smile</option>
                                            <option value="mouth-black-4">Black Mouth Open &amp; Tounge</option>
                                            <option value="mouth-brown-1">Brown Mouth Closed Smile</option>
                                            <option value="mouth-brown-2">Brown Mouth Open &amp; Fangs</option>
                                            <option value="mouth-brown-3">Brown Mouth Open Smile</option>
                                            <option value="mouth-brown-4">Brown Mouth Open &amp; Tounge</option>
                                            <option value="mouth-grey-1">Grey Mouth Closed Smile</option>
                                            <option value="mouth-grey-2">Grey Mouth Open &amp; Fangs</option>
                                            <option value="mouth-grey-3">Grey Mouth Open Smlie</option>
                                            <option value="mouth-grey-4">Grey Mouth Open &amp; Tounge</option>
                                            <option value="mouth-lightgrey-1">Light Grey Mouth Closed Smile</option>
                                            <option value="mouth-lightgrey-2">Light Grey Mouth Open &amp; Fangs</option>
                                            <option value="mouth-lightgrey-3">Light Grey Mouth Open Smile</option>
                                            <option value="mouth-lightgrey-4">Light Grey Mouth Open &amp; Tounge</option>
                                            <option value="mouth-purple-1">Purple Mouth Closed Smile</option>
                                            <option value="mouth-purple-2">Purple Mouth Open &amp; Fangs</option>
                                            <option value="mouth-purple-3">Purple Mouth Open Smlie</option>
                                            <option value="mouth-purple-4">Purple Mouth Open &amp; Tongue</option>
                                            <option value="mouth-white-1">White Mouth Closed Smile</option>
                                            <option value="mouth-white-2">White Mouth Open &amp; Fangs</option>
                                            <option value="mouth-white-3">White Mouth Open Smile</option>
                                            <option value="mouth-white-4">White Mouth Open &amp; Tounge</option>
                                        </select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                   
                       
                    <s.Container flex={1} jc={"center"} ai={"center"}>
                        <s.StyledImg alt={"example"} src={"/config/images/download.png"} />
                      
                        <s.StyledImg alt={"example"} src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`} />
                    </s.Container>

                   
                    <div>
                        <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm">
                            
                            <div>
                                <div className="css-0"><p className="chakra-text c">Eyes</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select class="chakra-select css-1r2mtbn"><option value="Black-EyeBall-1">Black 1</option><option value="Blue-EyeBall-1">Blue 1</option><option value="Green-EyeBall-1">Green 1</option><option value="Purple-EyeBall-1">Purple 1</option><option value="Red-EyeBall-1">Red 1</option></select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="css-0"><p className="chakra-text c">Outfit</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select class="chakra-select css-1r2mtbn"><option value="kimono-white">White Kimono</option><option value="knot-scarf-black">Black Knot Scarf</option><option value="knot-scarf-blue">Blue Knot Scarf</option><option value="knot-scarf-green">Green Knot Scarf</option><option value="knot-scarf-grey">Grey Knot Scarf</option><option value="knot-scarf-purple">Purple Knot Scarf</option><option value="knot-scarf-red">Red Knot Scarf</option><option value="chinese-traditional-black">Black Chinese Vest</option><option value="chinese-traditional-blue">Blue Chinese Vest</option><option value="chinese-traditional-green">Green Chinese Vest</option><option value="chinese-traditional-grey">Grey Chinese Vest</option><option value="chinese-traditional-red">Red Chinese Vest</option><option value="chinese-traditional-white">White Chinese Vest</option><option value="formal-black-shirt-grey-tie">Black Shirt &amp; Grey Tie</option><option value="formal-black-shirt-purple-tie">Black Shirt &amp; Purple Tie</option><option value="formal-black-shirt-white-tie">Black Shirt &amp; White Tie</option><option value="formal-black-shirt-yellow-tie">Black Shirt &amp; Yellow Tie</option><option value="formal-blue-shirt-black-tie">Blue Shirt &amp; Black Tie</option><option value="formal-grey-shirt-black-tie">Grey Shirt &amp; Black Tie</option><option value="formal-purple-shirt-black-tie">Purple Shirt &amp; Black Tie</option><option value="formal-red-shirt-black-tie">Red Shirt &amp; Black Tie</option><option value="formal-white-shirt-black-tie">White Shirt &amp; Black Tie</option><option value="formal-yellow-shirt-black-tie">Yellow Shirt &amp; Black Tie</option><option value="jacket-brown-beige-top">Brown Jacket &amp; Beige Top</option><option value="jacket-brown-black-top">Brown Jacket &amp; Black Top</option><option value="jacket-brown-blue-top">Brown Jacket &amp; Blue Top</option><option value="jacket-brown-green-top">Brown Jacket &amp; Green Top</option><option value="jacket-brown-grey-top">Brown Jacket &amp; Grey Top</option><option value="jacket-brown-purple-top">Brown Jacket &amp; Purple Top</option><option value="jacket-brown-red-top">Brown Jacket &amp; Red Top</option><option value="jacket-brown-white-top">Brown Jacket &amp; White Top</option><option value="jacket-highneck-blue">High-Neck Jacket &amp; Blue</option><option value="jacket-highneck-green">High-Neck Jacket &amp; Green</option><option value="jacket-highneck-maroon">High-Neck Jacket &amp; Maroon</option><option value="jacket-highneck-red">High-Neck Jacket &amp; Red</option><option value="jacket-highneck-yellow">High-Neck Jacket &amp; Yellow</option><option value="kimono2-black">Black Striped Kimono</option><option value="kimono2-blue">Blue Striped Kimono</option><option value="kimono2-green">Green Striped Kimono</option><option value="kimono2-grey">Grey Striped Kimono</option><option value="kimono2-red">Red Striped Kimono</option><option value="kimono-black">Black Kimono</option><option value="kimono-blue">Blue Kimono</option><option value="kimono-green">Green Kimono</option><option value="kimono-grey">Grey Kimono</option><option value="kimono-purple">Purple Kimono</option><option value="kimono-red">Red Kimono</option><option value="outfit-christmas1">Christmas 1</option><option value="outfit-christmas2">Christmas 2</option><option value="outfit-christmas3">Christmas 3</option></select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="css-0"><p className="chakra-text c">Circle</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <select class="chakra-select css-1r2mtbn"><option value="circle-black">Black</option><option value="circle-blue">Blue</option><option value="circle-green">Green</option><option value="circle-lime">Lime</option><option value="circle-ocean">Ocean</option><option value="circle-orange">Orange</option><option value="circle-pink">Pink</option><option value="circle-purple">Purple</option><option value="circle-red">Red</option><option value="circle-violet">Violet</option><option value="circle-yellow">Yellow</option><option value="circle-christmas1">Christmas 1</option><option value="circle-christmas2">Christmas 2</option><option value="circle-christmas3">Christmas 3</option><option value="circle-christmas4">Christmas 4</option></select>
                                        <div className="chakra-select__icon-wrapper css-ua91oy">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
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
