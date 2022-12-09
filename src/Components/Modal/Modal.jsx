
export default function Modal ({input, onChangeInput, addToDo}){


    return(
        <div  className="Modal ">
        <div style={{background:'#E4E6E7', width:'280px', borderRadius: '12px'}} className="d-flex flex-column px-4 justify-content-start">
            <p className="pt-3">Add New To Do</p>
            <div className="inputToDo" style={{background:'#FFFFFF', borderRadius: '12px'}}>
               <input value={input} onChange={onChangeInput} placeholder='   Your text' className="input-text" />
            </div>
            <div className="pt-3 pb-3 d-flex align-self-start" >
                <button className="add-btn"onClick={addToDo}>
                    Add
                </button>
            </div>
            
        </div>
        </div>
    )
}

