import React from 'react';
import classnames from 'classnames';

import Button from '../Button';
import './FolderHeader.scss';

const FolderHeader = ({
  colorFolder,
  nameFolder,
  changeFolderValueFolder,
  blurEditNameFolder,
  handleKeyPress,
  inputRef,
  disabledNameFolder,
  onEditNameFolder,
  type
}) => (
  <div className={classnames("folder-header", {
    'folder-header--blue': colorFolder === 'blue',
    'folder-header--gray': colorFolder === 'gray',
    'folder-header--green': colorFolder === 'green',
    'folder-header--light-pink': colorFolder === 'light-pink',
    'folder-header--light-green': colorFolder === 'light-green',
    'folder-header--purple': colorFolder === 'purple',
    'folder-header--black': colorFolder === 'black',
    'folder-header--pink': colorFolder === 'pink'
  })}>
    <input value={nameFolder} 
      type="text"
      title="edit-folder"
      onChange={changeFolderValueFolder}
      onBlur={blurEditNameFolder}
      onKeyPress={handleKeyPress}
      ref={inputRef}
      disabled={disabledNameFolder}
      className={classnames("folder-header-name", {
        'folder-header-name--blue': colorFolder === 'blue',
        'folder-header-name--gray': colorFolder === 'gray',
        'folder-header-name--green': colorFolder === 'green',
        'folder-header-name--light-pink': colorFolder === 'light-pink',
        'folder-header-name--light-green': colorFolder === 'light-green',
        'folder-header-name--purple': colorFolder === 'purple',
        'folder-header-name--black': colorFolder === 'black',
        'folder-header-name--pink': colorFolder === 'pink'
      })}
    />
    {type !== 'all' && <Button className="button--edit" onClick={onEditNameFolder} />}
  </div>
)

export default FolderHeader;