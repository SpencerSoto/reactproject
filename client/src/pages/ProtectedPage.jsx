import React from "react";

const ProtectedPage = () => {
  return (
    <div>
      <h1>This page is hyper protected!</h1>
      {this.user}
    </div>
  );
};

export default ProtectedPage;
