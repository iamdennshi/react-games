import ContentLoader from "react-content-loader";

import React from "react";

export default function Loader() {
  return (
    <>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </>
  );
}

function CardLoader() {
  return (
    <div className="card">
      <ContentLoader
        speed={2}
        width={162}
        height={214}
        viewBox="0 0 162 212"
        backgroundColor="#f2f2f2"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="7" ry="7" width="61" height="31" />
        <rect x="0" y="133" rx="8" ry="8" width="162" height="17" />
        <rect x="130" y="180" rx="8" ry="8" width="32" height="32" />
        <rect x="0" y="180" rx="8" ry="8" width="74" height="31" />
        <rect x="0" y="156" rx="8" ry="8" width="87" height="18" />
        <rect x="0" y="49" rx="10" ry="10" width="162" height="70" />
      </ContentLoader>
    </div>
  );
}
