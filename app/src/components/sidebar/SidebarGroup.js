import React, { Component, PropTypes } from 'react';
import SidebarGroupList from './SidebarGroupList';

class SidebarGroup extends Component {

  render() {

    const sampleData = [
      { 'id': 1, 'name': 'All trikanna' },
      { 'id': 2, 'name': 'Herbalife' },
      { 'id': 3, 'name': 'Work' }
    ]

    return (
      <div className='sidebar__group'>
        <div className='sidebar__group__header'>{this.props.title}</div>
        <SidebarGroupList items={sampleData} />
      </div>
    );
  }
}

SidebarGroup.propTypes = {
  title: PropTypes.string.isRequired
};

export default SidebarGroup;
