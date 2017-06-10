import React, { PropTypes } from 'react';

const SidebarGroupList = props => {

  return (
    <ul className='sidebar__group__list'>

      {
        props.items.map((item) => <li key={item.id}><a>{item.name}</a></li>)
      }

    </ul>
  );
};

SidebarGroupList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SidebarGroupList;
