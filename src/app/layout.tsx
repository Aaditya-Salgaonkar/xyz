import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="container">{children}</div>
    </ClerkProvider>
  );
};

export default Layout;