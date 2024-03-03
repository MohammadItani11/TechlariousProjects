import React from "react";

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingButton = ({ type, className, children, bgColor = '#3CC761', textColor= 'white', onClick, loading }) => {
  return (
    <button onClick={onClick} className={`${className} bg-[${bgColor}] px-5 py-2 text-[${textColor}] rounded-[10px]`} type={type}>
      {loading? <FontAwesomeIcon className={`text-[${textColor}] `} icon={faSpinner}></FontAwesomeIcon> : (children ?? 'Button')}
    </button>
  );
};

export default LoadingButton;
