import React, { useEffect, useState } from "react";
import { getSinglePup } from "../../api/config";

// will need to display one random pup img
// or grid of many pups

export const Content = () => {
  const [puppyPayload, setPuppyPayload] = useState({});
  useEffect(() => {
    getSinglePup({ cb: setPuppyPayload });
  }, []);
  return (
    <>
      <h2>A lovely {puppyPayload.breed}</h2>
      <div onClick={() => getSinglePup({ cb: setPuppyPayload })}>
        Show me another!
      </div>
      <img src={puppyPayload.imageUrl} alt="A lovely puppy!" />
    </>
  );
};
