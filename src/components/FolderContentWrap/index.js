import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import FolderContent from '../FolderContent';
import FolderHeader from '../FolderHeader';
import NoTask from '../NoTask';
import './FolderContentWrap.scss';
import TaskList from '../TaskList';

const FolderContentWrap = ({
  nameFolder,
  foldersLength,
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
  folderList,
  idFolder
}) => (
  <div className="folder-content-wrap">
    <Switch>
      <Route path="/folders/:name" exact >
        <FolderContent 
          nameFolder={nameFolder} 
          idFolder={idFolder}
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
        />
      </Route>
      <Route path="/folders" exact>
        {folderList.map((item, index)=> {
          return(
            <div key={index} className="folder-item--all">
              <FolderHeader
                nameFolder={item.name}
                colorFolder={item.color}
                disabledNameFolder={disabledNameFolder}
                type="all"
              />
              <TaskList 
                taskList={taskList} 
                type="all" 
                folderIndex={index} 
                onChangeCheckbox={onChangeCheckbox}
                onHoverTask={onHoverTask}
                hoverTask={hoverTask}
                deleteTask={deleteTask}
                idFolder={idFolder}
              />
            </div>
          )
        })}
      </Route>
      <Route path="/" exact>
        <NoTask/>
      </Route>
    </Switch>
  </div>
)

export default FolderContentWrap;