import React from 'react';
import classnames from 'classnames';

import FolderHeader from '../FolderHeader';
import TaskList from '../TaskList';
import './FolderContent.scss';

const FolderContent = ({
  nameFolder,
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
  <>
    <FolderHeader
      nameFolder={nameFolder}
      colorFolder={colorFolder}
      changeFolderValueFolder={changeFolderValueFolder}
      blurEditNameFolder={blurEditNameFolder}
      onEditNameFolder={onEditNameFolder}
      inputRef={inputRef}
      disabledNameFolder={disabledNameFolder}
    />
    <TaskList 
      openAddBlockTask={openAddBlockTask}
      openBlock={openBlock}
      changeValueTask={changeValueTask}
      valueTask={valueTask}
      addTask={addTask}
      taskList={taskList}
      nameFolder={nameFolder}
      handleKeyPress={handleKeyPress}
      onChangeCheckbox={onChangeCheckbox}
      onHoverTask={onHoverTask}
      hoverTask={hoverTask}
      deleteTask={deleteTask}
      indexActiveFolder={indexActiveFolder}
      idFolder={idFolder}
    />
  </>
)

export default FolderContent;