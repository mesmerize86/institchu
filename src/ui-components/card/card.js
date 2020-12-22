import React from 'react';
import CardStyle from "./card-style";

const Card = (props) => {
  return (
    <CardStyle className={props.className}>
      {props.children}
    </CardStyle>
  );
};

export default Card;