import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import FoldersList from '../../containers/FoldersBlock';
import TasksBlock from '../../containers/TasksBlock';
import './Home.scss';

const Home = () => {

  const history = useHistory();

  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [openAddBlockTask, setOpenAddBlockTask] = useState(false);

  const [disabledNameFolder, setDisabledNameFolder] = useState(true);

  const [colorList, setColorList] = useState([
    {
      name: 'gray',
      active: true,
    },
    {
      name: 'green',
      active: false,
    },
    {
      name: 'blue',
      active: false,
    },
    {
      name: 'light-pink',
      active: false,
    },
    {
      name: 'light-green',
      active: false,
    },
    {
      name: 'purple',
      active: false,
    },
    {
      name: 'black',
      active: false,
    },
    {
      name: 'pink',
      active: false,
    }
  ]);

  const [colorDotActive, setColorDotActive] = useState('gray');

  const [valueFolder, setValueFolder] = useState('');
  const [valueTask, setValueTask] = useState('');

  const [folderList, setFolderList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const [nameActiveFolder, setNameActiveFolder] = useState({index: 0, id:null, name: ''});

  const [colorActiveFolder, setColorActiveFolder] = useState('');

  const [hoverTask, setHoverTask] = useState(null);

  const openBlock = (e) => {
    if(e.target.title === 'add-folder' || e.target.title === 'cancel-folder') {
      setOpen(!open)
    } else {
      setOpenAddBlockTask(!openAddBlockTask);
    }
  };

  const colorActive = (e) => {
    setColorList(colorList.map(item => {
      if(item.name === e.target.title) {
        item.active = true
      }
      if(item.active && item.name !== e.target.title) {
        item.active = !item.active
      }
      return item
    }))

    setColorDotActive(colorList.find(item => item.active).name)
  };

  const handleChange = (e) => {
    setValueFolder(e.target.value);
  }

  const handleChangeTaskName = (e) => {
    setValueTask(e.target.value);
  }
  
  const addFolder = (colorDotActive, valueFolder) => {
    let id = Math.floor(Math.random() * (1000000 - 1 + 1) ) + 1;
    if(valueFolder) {
      setFolderList(
        folderList.map(item => item.active = false)
      )

      setFolderList(
        folderList.concat({
          id: id,
          name: valueFolder,
          color: colorDotActive,
          active: true
        })
      )
    };
    setValueFolder('');
    setOpen(!open);
    setNameActiveFolder({...nameActiveFolder,index: folderList.length ,id: id,name: valueFolder})
    setColorActiveFolder(colorDotActive);
    history.push(`/folders/${valueFolder}`)
  }

  const addTask = (idFolder, indexFolder, nameFolder, valueTask) => {
    if(valueTask) {
      setTaskList(
        taskList.concat({
          nameFolder: nameFolder,
          indexFolder: indexFolder,
          idFolder: idFolder,
          text: valueTask,
          checked: false
        })
      )
      setValueTask('');
      setOpenAddBlockTask(!openAddBlockTask);
    }
  }
  
  const activeFolder = (i, type) => {
    setFolderList(
      folderList.map((item, index) => {
        if(index === i) {
          item.active = true;
          setNameActiveFolder({...nameActiveFolder,index:index, id:item.id, name:item.name});
          setColorActiveFolder(item.color);
        }
        if(item.active && index !== i) {
          item.active = !item.active
        }
        if(index === i && type === 'delete') {
          history.push(`/folders/${item.name}`)
        }
        return item
      })
    )
  }

  const deleteFolder = (i) => {
    folderList.splice(i, 1)
    setFolderList(
      folderList
    );
    setTaskList(taskList.filter(item => item.indexFolder !== i))
    setTimeout(() => {
      if(folderList.length > 0) {
        return activeFolder(0, 'delete')
      } else {
        history.push(`/`)
      }
    }, 5);
  }
  
  const deleteTask = (i) => {
    taskList.splice(i, 1)
    setTaskList(
      taskList
    )
  }

  const onEditNameFolder = () => {
    setDisabledNameFolder(!disabledNameFolder);
    setTimeout(() => {
      inputRef.current.focus();
    }, 500);
  } 

  const editNameFolder = (e) => {
    setNameActiveFolder({...nameActiveFolder, name: e.target.value});
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter' && valueFolder && event.target.title === 'folder') {
      return addFolder(colorDotActive, valueFolder)
    } else if(event.key === 'Enter' && event.target.title === 'edit-folder') {
      return (
        setDisabledNameFolder(!disabledNameFolder),
        editNameFolder(event),
        setFolderList(
          folderList.map((item, index) => {
            if(index === nameActiveFolder.index) {
              item.name = nameActiveFolder.name
            }
            return item
          })
        )
      )
    } else if(event.key === 'Enter' && event.target.title === 'task') {
      return addTask(nameActiveFolder.id, nameActiveFolder.index, nameActiveFolder.name, valueTask)
    }
  }

  const blurEditNameFolder = () => {
    setFolderList(
      folderList.map((item, index) => {
        if(index === nameActiveFolder.index) {
          item.name = nameActiveFolder.name
        }
        return item
      })
    )
    setDisabledNameFolder(!disabledNameFolder)
  }

  const onChangeCheckbox = (i) => {
    setTaskList(taskList.map((item,index) => {
      if(index === i) {
        item.checked = !item.checked
      }
      return item
    }) )
  }

  const onHoverTask = (index) => {
    setHoverTask(index)
  }

  const onAllFolders = () => {
    history.push('/folders')
  }

  useEffect(() => {
    if(history.location.pathname !== '/' && !folderList) {
      history.push('/')
    }
  })
  
  return (
    <div className="home">
      <div className="content">
        <FoldersList 
          openBlock={openBlock} 
          open={open} 
          addFolder={addFolder} 
          colorDotActive={colorDotActive} 
          colorActive={colorActive} 
          colorList={colorList} 
          changeValueFolder={handleChange} 
          valueFolder={valueFolder} 
          folderList={folderList}
          activeFolder={activeFolder}
          deleteFolder={deleteFolder}
          handleKeyPress={handleKeyPress}
          onAllFolders={onAllFolders}
        />
        <TasksBlock 
          nameFolder={nameActiveFolder.name}
          idFolder={nameActiveFolder.id}
          folderList={folderList}
          foldersLength={folderList.length}
          colorFolder={colorActiveFolder}
          changeFolderValueFolder={editNameFolder} 
          changeValueTask={handleChangeTaskName}
          valueTask={valueTask}
          blurEditNameFolder={blurEditNameFolder}
          onEditNameFolder={onEditNameFolder}
          inputRef={inputRef}
          disabledNameFolder={disabledNameFolder}
          handleKeyPress={handleKeyPress}
          openAddBlockTask={openAddBlockTask}
          openBlock={openBlock}
          addTask={addTask}
          taskList={taskList}
          onChangeCheckbox={onChangeCheckbox}
          indexActiveFolder={nameActiveFolder.index}
          onHoverTask={onHoverTask}
          hoverTask={hoverTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}


export default Home;