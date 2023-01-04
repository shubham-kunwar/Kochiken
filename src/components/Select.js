import React, { useEffect, useState, useRef } from "react";



function Select(props) {

    React.useEffect(() => {
        const selectBackground = document.getElementById(props.id);
     

        selectBackground.addEventListener('change', (event) => {
          
            document.getElementById(props.forImage).src = `/config/layers/${props.id}/${event.target.value}.png`

        });
    }, []);









    const body=props.option
   
    return (
        <div>
            <select id={ props.id} className="chakra-select css-1r2mtbn">
                {body?.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}           
               
            </select>

        </div>
    );
}

export default Select;
