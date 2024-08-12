import React from "react";

const ToDo = () => {

  return (
    <>
      <div className="">
        {digits.map((digit, index) => (
          <div className="digito" key={index}>
            {digit}
          </div>
        ))}
      </div>
    </>
  );
};
export default ToDo;
