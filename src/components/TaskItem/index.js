import React from 'react';
import classnames from 'classnames';

import Button from '../Button';
import './TaskItem.scss';

const TaskItem = ({
  text,
  index,
  checked,
  onChangeCheckbox,
  onHoverTask,
  hoverTask,
  deleteTask
}) => (
  <div className="task"
    onMouseEnter={() => onHoverTask(index)} 
    onMouseLeave={() => onHoverTask(null)}
  >
    <div className="task-name">
      <label>
        <input type="checkbox" checked={checked} onChange={() => onChangeCheckbox(index)} className="original-checkbox" />
        <span className={classnames('custom-checkbox', {
          'custom-checkbox--checked': checked,
          'custom-checkbox--hover': hoverTask
        })}></span>
      </label>
      {text}
    </div>
    {hoverTask === index && (
      <Button  className="button--delete" onClick={() => deleteTask(index)} text="X"/>
    )}
  </div>
)

export default TaskItem;