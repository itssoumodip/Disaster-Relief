import React from 'react';

export function Button({ variant, className, children }) {
  return (
    <button className={`btn-${variant} ${className}`}>
      {children}
    </button>
  );
}