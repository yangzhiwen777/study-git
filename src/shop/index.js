import React, { useEffect } from "react";
const Shop = () => {
  useEffect(() => {
    console.log("Registere");
  }, []);
  useEffect(() => {
    console.log("Registere-seconed");
  }, []);
  return (
    <>
      <h1>购物页面</h1>
      <h1>购物页面</h1>
    </>
  );
};
export default Shop;
