import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './active.css';

function CustomLink({ children, to, ...props }) {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });
   return (
   <div id='active'>
      <Link
         style={{ color: match ? "#fb5200" : "#fff" }}
         to={to}
         {...props}
      >
         {children}
      </Link>
      {/* {match && " (active)"} */}
   </div>
   );
}

export default CustomLink;