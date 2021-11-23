import React, { useEffect, useState, lazy, Suspense } from "react";

import { getSinglePup } from "../../api/config";

// will need to display one random pup img
// or grid of many pups
const Image = lazy(async () => await import("../ui/Image"));

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
      {/* <Image src={puppyPayload.imageUrl} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Image src={puppyPayload.imageUrl} />
      </Suspense>
    </>
  );
};
