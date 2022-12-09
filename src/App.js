import { useEffect, useState } from 'react'
import plus from './assets/Plus Math.svg'
import trashImg from './assets/Vector.png'
import Modal from './Components/Modal/Modal';
import {v4 as uuidv4} from 'uuid'
import selectImg from './assets/selected.png'
import returnImg from './assets/return.png'


const data=[
  { 
    id:uuidv4(),
    toDo:'Write Essay'
  }, 
  { id:uuidv4(),
    toDo:'One Hour CSS Course Online'
  },
  { id:uuidv4(),
    toDo:'Buy One Way Tickets to San Fransico'
  },
  { id:uuidv4(),
    toDo:'Go to Gym'

  },
  { id:uuidv4(),
    toDo:'Buy Groceries'
    }

]
function App() {
  const [isModalOpen, setModalopen] = useState(false);
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState('');
  const [type, setType] = useState('all');
  const [trash, setTrashed] =useState();

 useEffect(()=>{
  setTodos(todos)
 },[todos]) 
  
const handleTriggerModal =()=>{
if (isModalOpen){
  setModalopen(false);
}else setModalopen(true)
}

const onChangeInput=(e)=>{
    setInput(e.target.value)}

const addToDo = () =>{
      const id = uuidv4();
      setTodos((prev)=>
      [...prev,
      {
        id:id,
        toDo:input,
        done: false
      }]);
      setInput('');
    }

const handleItemChecked=(id)=>{
      const changedItems = todos.map((item)=>{
        if (item.id===id){
          return {...item,isDone:!item.isDone}}
          else return item
  
      })
      setTodos(changedItems)
    }
  
    

const handleChangeStatus = (typeFromButton) => {
        setType(typeFromButton);
    };

  
    const filteredItems =
                          type === "todo"
                            ? todos.filter((item) => !item.isDone)
                            : type === "trash"
                            ? trash
                            : type === "done"
                            ? todos.filter((item) => item.isDone)
                            : todos;


  const handleItemTrash =(id)=>{

      setTrashed(todos.filter((item)=>item.id==id))
      setTodos(todos.filter((item)=>item.id!==id))
    }

  const handleDelete =(id)=>{
    setTodos (todos.filter ((item)=>item.id!==id))
    setTrashed(trash.filter((item)=>item.id!==id))
  }

const handleReturn =(id)=>{
      setTrashed(trash.filter((item)=>item.id!==id));
      const returnItem=trash.filter((item)=>item.id===id)
      
      setTodos((prev)=>
      [...prev,
      ...returnItem]);
    
    }

  

  return (
    <div className="App">
      <div className='main d-flex justify-content-between align-items-end'>
      <div>
      <header>
        <h2 className='pb-2'>Simple To Do List</h2>
        <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
      </header>
        <div className="btns d-flex align-items-end pt-5">
        <button className="filter-btn" onClick={()=>handleChangeStatus('todo')} >To Do</button>
        <button className="filter-btn" onClick={()=>handleChangeStatus('done')}>Done</button>
        <button className="filter-btn" onClick={()=>handleChangeStatus('trash')}>Trash</button>
        </div>
        
        </div>

        <div style={{position:'relative'}}>
          <button onClick={handleTriggerModal} className="add-btn"> <img src={plus}/></button>
          {isModalOpen && <Modal input={input} onChangeInput={onChangeInput} addToDo={addToDo}/>}
        </div>
        </div>


        <div className="pt-5 pb-3">
          <h4 className='pb-2'>To Do</h4>
          <hr className='hr hr-blurry'></hr>
        </div>

        {filteredItems.map((item)=> 
        
    <div key={item.id} className="d-flex pb-2 check-btn" style={{gap:'10px'}} >
    
    <div class="dropdown">
  <button class="dropbtn"><img src={selectImg}/></button>
  <div class="dropdown-content">
    <a href="#" onClick={()=>handleItemTrash(item.id)}> <img src={trashImg}/>   Move To Trash</a>
    <a href="#" onClick={()=>handleDelete(item.id)} > <img src={trashImg}/>  Delete Forever</a>
    <a href="#" onClick={()=>handleReturn(item.id)}><img src={returnImg}/>  Return To To Do</a>

  </div>
</div>
    
    <input type="checkbox" className='cb' id="idinput" onClick={()=>handleItemChecked(item.id)} style={{ textDecoration: item.isDone ? "line-through" : "",  }}/>
    <label  for="idinput" onClick={()=>handleItemChecked(item.id)} style={{textDecoration: item.isDone ? "line-through" : "", color:item.isDone?"#959595":"" }}> {item.toDo}</label>
    </div>)}

       
    <footer className='pt-5 '>
     <div className='pt-5 d-flex justify-content-between'>
     <p style={{fontSize:'14px', color:'#081E34'}}> Made with ❤️ at nFactorial in 2022. </p> 
     <p style={{fontSize:'14px', color:'#081E34', opacity:'0.5'}}> Credits: icons from <a style={{color:'#081E34', textDecoration:'none'}} href='https://icons8.com/'>Icons8</a>.</p> 


    </div> 
    
    </footer> 
    </div>
  );
}


export default App;
