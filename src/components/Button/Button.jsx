import React, { useState } from "react";
import { Loader } from "../Loader/Loader";

export const Button = ({ onClick, isLoading }) => {
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      onClick();
    }, 500);
  };

  return (
    <>
      {!showLoader && onClick && (
        <button
          type="button"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
      <Loader visible={showLoader} />
    </>
  );
};
