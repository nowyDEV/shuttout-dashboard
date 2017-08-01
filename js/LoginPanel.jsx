import React from 'react';

const LoginPanel = () =>
  <div className="Dashboard-header">
    <div className="Titles">
      <h1 className="Titles-main" id="view-name">
        Shuttout - BETA (Wszystkie dane witryny)
      </h1>
    </div>
    <div id="embed-api-auth-container" style={{ display: 'none' }} />
    <div id="view-selector-container" />
    <div id="view-name" />
    <div id="active-users-container" />
  </div>;

export default LoginPanel;
