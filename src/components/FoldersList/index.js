import React from 'react';
import { Link } from 'react-router-dom';

import FolderItem from '../FolderItem';
import Button from '../Button';
import AddBlock from '../AddBlock';
import ColorDots from '../ColorDots';
import './FolderList.scss';

const FolderList = ({
  folderList,
  openBlock,
  open,
  colorList,
  colorActive,
  colorDotActive,
  changeValueFolder,
  valueFolder,
  addFolder,
  activeFolder,
  deleteFolder,
  handleKeyPress,
  onAllFolders
}) => (
  <div className="folders">
    {folderList.length > 0 &&
      <Button text="Все задачи" onClick={onAllFolders} className="button--original" all="true" />
    }
    <div className="folders--wrap"> 
      {folderList && (
        folderList.map((item, index) => (
          <FolderItem 
            key={index}
            index={index}
            name={item.name}
            color={item.color}
            active={item.active}
            activeFolder={activeFolder}
            deleteFolder={deleteFolder}
          />
        ))
      )}
    </div>
    <Button original="true" onClick={openBlock} className="button--original" text="Добавить папку" title="add-folder" />
    {open && (
      <AddBlock type="folder">
        <Button className="button--cancel-folder" onClick={openBlock} text="X" title="cancel-folder" />
        <input placeholder="Название папки" autoFocus type="text" title="folder"  onChange={changeValueFolder} onKeyPress={handleKeyPress} value={valueFolder} />
        <ColorDots colorList={colorList} colorActive={colorActive} />
        {!valueFolder && <div className="error">Заполните название папки</div>}
        <Button className="button--add" onClick={() => addFolder(colorDotActive, valueFolder)} disabled={!valueFolder} text="Добавить" />
      </AddBlock>
    )}
  </div>
)

export default FolderList;