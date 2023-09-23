import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='flex flex-row justify-center itmes-center'>
      <div className='grid grid-cols-4 p-5 gap-4 auto-cols-max'>{children}</div>
    </div>
  );
};

export default Container;
