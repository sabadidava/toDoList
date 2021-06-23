import React, { useState, useEffect } from "react";

export default function Tes() {
  const [number, setNumber] = useState(0);
  const [test, setTest] = useState(false);
  const showConsol = () => {
    console.log("number", number);
  };

  useEffect(() => {
    showConsol();
  }, [number]);  //masivshi chawerili gamoidzaxeba mashin roca sheicvleba misi   mnishvneloba 

  return (
    <div>
      <button onClick={() => setTest(!test)}>dferferwte</button>

      <button onClick={() => setNumber(number + 1)}>{number}</button>

      <div>{}</div>
    </div>
  );
}
