import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import ColorDotItem from '../ColorDotItem';
import Button from '../Button';

const FolderItem = ({
  name, 
  active,
  color,
  activeFolder,
  deleteFolder,
  index
}) => (
  <Link to={`/folders/${name}`}>
    <div 
      onClick={() => activeFolder(index)}
      className={classnames('folders-item', {
        'folders-item--active': active
      })}>
      <div className="folder-name">
        <ColorDotItem color={color} type='folder' />
        {name}
      </div>
      {active && (
        <Button onClick={() => deleteFolder(index)} className="button--delete" text="X"/>
      )}
    </div>
  </Link>
)

export default FolderItem;