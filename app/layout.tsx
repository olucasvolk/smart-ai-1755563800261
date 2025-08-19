import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <header className='bg-blue-500 text-white p-4'>
        <div className='container mx-auto'>
          <h1 className='text-2xl font-bold'>Meu Portfólio</h1>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;