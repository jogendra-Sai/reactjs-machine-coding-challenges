import React from "react";
import { withLoader } from "./withLoader";

const DogImages = (props) => {
  return props.data.message.map((dog, index) => (
    <img className="image" src={dog} alt="Dog" key={dog} />
  ));
};

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/20"
);
