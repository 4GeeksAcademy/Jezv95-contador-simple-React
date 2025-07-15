import React from "react";



const SecCounter = (props) => {
    const digits = props.sec.toString().padStart("6", "0").split('')

    return (
        <div className="container-fluid d-flex justify-content-center bg-dark">
            {digits.map((digit) => (
                <h1 className="border border-secondary rounded-2 p-3 mt-5 mx-2 text-light">{digit}</h1>
            ))}
        </div>
    );

}

export default SecCounter