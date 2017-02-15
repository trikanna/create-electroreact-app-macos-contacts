import React from 'react';
import SidebarGroup from './SidebarGroup';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__title'>All Contacts</div>

      <SidebarGroup title="On My Mac"></SidebarGroup>

    </div>
  );
};

export default Sidebar;
