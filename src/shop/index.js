import React, { useEffect } from "react";
const Shop = () => {
  useEffect(() => {
    console.log("Registere");
  }, []);
  const btnClick = () => {
    console.log("加入购物车按钮");
  };
  return (
    <>
      <h1>购物页面</h1>
      <button
        onClick={() => {
          btnClick();
        }}
      >
        加入购物车按钮
      </button>
    </>
  );
};
export default Shop;
