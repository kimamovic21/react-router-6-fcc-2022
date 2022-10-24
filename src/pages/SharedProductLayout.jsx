import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProductLayout = () => {
  return (
    <>
        <h2>Products</h2>
        <Outlet />
    </>
  );
};

export default SharedProductLayout;
