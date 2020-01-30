import React from 'react';
import classnames from 'classnames';

import './AddBlock.scss';

const AddBlock = ({type, children}) => (
  <div className={classnames('add-block', {
    'add-block--folder': type === 'folder',
    'add-block--task': type === 'task'
  })}>
    {children}
  </div>
)

export default AddBlock;