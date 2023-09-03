import React from 'react';
import './index.less';

const ContentPanel: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="contentPanel"> {children}</div>;
};

export default ContentPanel;
