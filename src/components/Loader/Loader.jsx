import React from "react";
import PropTypes from 'prop-types';
import { ThreeDots } from "react-loader-spinner";

export const Loader = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className="loader-wrapper">
          <ThreeDots
            height={80}
            width={80}
            radius={9}
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
          />
        </div>
      )}
    </>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};