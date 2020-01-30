import React from 'react';


import FolderContentWrap from '../components/FolderContentWrap';

const TasksBlock = ({
  nameFolder, 
  foldersLength,
  folderList,
  colorFolder,
  changeFolderValueFolder,
  blurEditNameFolder,
  onEditNameFolder,
  inputRef,
  disabledNameFolder,
  handleKeyPress,
  openAddBlockTask,
  openBlock,
  changeValueTask,
  valueTask,
  addTask,
  taskList,
  onChangeCheckbox,
  indexActiveFolder,
  onHoverTask,
  hoverTask,
  deleteTask,
  idFolder
}) => (
  <FolderContentWrap 
    nameFolder={nameFolder}
    foldersLength={foldersLength}
    colorFolder={colorFolder}
    changeFolderValueFolder={changeFolderValueFolder}
    blurEditNameFolder={blurEditNameFolder}
    onEditNameFolder={onEditNameFolder}
    inputRef={inputRef}
    disabledNameFolder={disabledNameFolder}
    handleKeyPress={handleKeyPress}
    openAddBlockTask={openAddBlockTask}
    openBlock={openBlock}
    changeValueTask={changeValueTask}
    valueTask={valueTask}
    addTask={addTask}
    taskList={taskList}
    onChangeCheckbox={onChangeCheckbox}
    indexActiveFolder={indexActiveFolder}
    onHoverTask={onHoverTask}
    hoverTask={hoverTask}
    deleteTask={deleteTask}
    folderList={folderList}
    idFolder={idFolder}
  />
)

export default TasksBlock;