import React from 'react';

import Button from '../Button';
import AddBlock from '../AddBlock';
import TaskItem from '../TaskItem';
import './TaskList.scss';

const TaskList = ({
  openAddBlockTask,
  openBlock,
  changeValueTask,
  valueTask,
  addTask,
  taskList,
  nameFolder,
  handleKeyPress,
  onChangeCheckbox,
  indexActiveFolder,
  onHoverTask,
  hoverTask,
  deleteTask,
  type,
  folderIndex,
  idFolder
}) => (
  <div className="tasks">
    <>
      {taskList.map((item, index) => {
        if(item.idFolder === idFolder) {
          return <TaskItem 
            key={index}
            index={index}
            text={item.text}
            checked={item.checked}
            onChangeCheckbox={onChangeCheckbox}
            onHoverTask={onHoverTask}
            hoverTask={hoverTask}
            deleteTask={deleteTask} />
        }
        if((type === 'all') && (idFolder === item.idFolder)) {
          return <TaskItem 
            key={index}
            index={index}
            text={item.text}
            checked={item.checked}
            onChangeCheckbox={onChangeCheckbox}
            onHoverTask={onHoverTask}
            hoverTask={hoverTask}
            deleteTask={deleteTask} />
        }
      })}
      {type !== 'all' && 
        <>
          <Button original="true" onClick={openBlock} className="button--original" text="Новая задача"/>
          {openAddBlockTask &&
            <AddBlock type="task">
              <input placeholder="Текст задачи" autoFocus type="text" title="task" onChange={changeValueTask} value={valueTask} onKeyPress={handleKeyPress}  />
              <div className="buttons-block">
                <Button className="button--add" text="Добавить задачу" disabled={!valueTask} onClick={() => addTask(idFolder, indexActiveFolder, nameFolder,valueTask)} />
                <Button className="button--cancel" onClick={openBlock} text="Отмена" />
              </div>
            </AddBlock>
          }
        </>
      }
    </>
  </div>
)

export default TaskList;