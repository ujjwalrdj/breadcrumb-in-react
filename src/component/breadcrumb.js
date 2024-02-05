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
            <sapn key={breadcrumbPath}>/ {name}</sapn>
          ) : (
            <sapn>
              /
              <Link key={breadcrumbPath} to={breadcrumbPath}>
                {name}
              </Link>
            </sapn>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumb;
