import React from "react";
import PropTypes from 'prop-types';
import { Loader } from "../Loader/Loader";
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader visible={isLoading} />
      ) : (
        <LoadMoreBtn onClick={onClick} type="button">
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, 
  isLoading: PropTypes.bool.isRequired, 
};