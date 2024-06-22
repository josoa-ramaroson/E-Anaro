import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../langing-page/components/navigation-bar';

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
