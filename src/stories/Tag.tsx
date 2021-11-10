import React from 'react';
import './tag.css';
import './styles/color.scss';

export interface TagProps {
  label: string;
  themeColor?:string;
}

//Input themeColor, which defines tag background color and also text color 
export const Tag: React.FC<TagProps> = ({ label, themeColor='c-tag-default', ...props }) => {  
    return (
    <div className={`tag-container ${themeColor}`}>
      <span className={`tag-text`}>{label}</span>
    </div>
  );
};