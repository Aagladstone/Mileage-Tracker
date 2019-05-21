<<<<<<< HEAD
import React, { Component } from "react";
=======
import React from "react";
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab

export const FormErrors = ({ formErrors }) =>
  <div style={{ color: 'red' }} className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>