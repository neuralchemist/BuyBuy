import React from "react";
import { useEffect, useState, useRef } from "react";
// mui 5
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
// custom style
import { PromotionContainer } from "./style";
// custom hooks
import useGetAllPormotions from "./hooks/useGetAllPormotions";

function Promotions() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(true);
  const { data, isLoading, isError, isSuccess } = useGetAllPormotions();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Sorry something went wrong...</p>;
  }

  if (isSuccess && data.length === 0) {
    return <p>No promotions in database</p>;
  }

  useEffect(() => {
    console.log("mount promotions");

    setTimeout(() => {
      setChecked(false);
    }, 3000);

    const handleInterval = () => {
      // change index
      setIndex((prev) => (prev + 1) % data.length);
      // change checkout
      setChecked(true);
      // set timeout
      setTimeout(() => {
        setChecked(false);
      }, 3000);
    };
    const interval = setInterval(handleInterval, 4000);

    return () => {
      console.log("unmount promotions");
      clearInterval(interval);
    };
  }, []);

  return (
    <PromotionContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={checked ? "left" : "right"}
        in={checked}
        timeout={{
          enter: 700,
          exit: 300,
        }}
      >
        <Typography>{data[index]}</Typography>
      </Slide>
    </PromotionContainer>
  );
}

export default Promotions;
