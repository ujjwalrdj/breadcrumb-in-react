import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const BreadCrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  let breadcrumbPath = '';
  return (
    <>
      <div className="breadcrumbs">
        {pathnames.length > 0 && <Link to="/">Home</Link>}
        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLastLink = index === pathnames.length - 1;
          return isLastLink ? (
            <span key={breadcrumbPath}>/ {name}</span>
          ) : (
            <span>
              /
              <Link key={breadcrumbPath} to={breadcrumbPath}>
                {name}
              </Link>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumb;
