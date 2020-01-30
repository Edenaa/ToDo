import React from 'react';

import Folders from '../components/FoldersList';


const FoldersList = ({
  openBlock,
  open,
  addFolder,
  colorDotActive,
  colorActive,
  colorList,
  changeValueFolder,
  valueFolder,
  folderList,
  activeFolder,
  deleteFolder,
  handleKeyPress,
  onAllFolders
}) => {
  return(
    <Folders 
      openBlock={openBlock} 
      open={open} 
      addFolder={addFolder} 
      colorDotActive={colorDotActive} 
      colorActive={colorActive} 
      colorList={colorList} 
      changeValueFolder={changeValueFolder} 
      valueFolder={valueFolder} 
      folderList={folderList}
      activeFolder={activeFolder}
      deleteFolder={deleteFolder}
      handleKeyPress={handleKeyPress}
      onAllFolders={onAllFolders}
    />
  )
}

export default FoldersList;