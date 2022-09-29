import React from 'react';
import SettingsNavbar from './navbar/settingsNavbar';
import Sidebar from './sidebar/sidebar';

const Settings = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <SettingsNavbar />
  </div>
);

export default Settings;
