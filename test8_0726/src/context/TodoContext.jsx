/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"

const TodoContext = createContext();

const initialTodos = [
    {id: 1, text: "리액트 공부", checked: true},
     {id: 2, text: "자바 공부", checked: false},
      {id: 3, text: "자바스크립트 공부", checked: true},
       {id: 4, text: "파이썬 공부", checked: false}
]



const Todo2 = () => {
    const [todos, setTodos] = useState(initialTodos);
    // const nextId = useRef(Date.now());
    const nextId = useRef(initialTodos.length>0? 
        Math.max(...initialTodos.map(todo=>todo.id))+1: 1)

    const handleInsert = useCallback((obj)=>{
        setTodos(prev => [
            ...prev, {...obj, id:nextId.current}
        ]
        )
    }, [])

    const handleDelete = useCallback((id)=>{
        setTodos(prev => prev.filter(todo => todo.id!== id))
    },[todos])

    const handleToggle= useCallback((id)=>{
        setTodos(prev => prev.map(todo => todo.id === id? {...todo, checked:!todo.checked} : todo))
    },[todos])

    const value = {     
        todos,
        handleInsert,
        handleDelete,
        handleToggle 
    }
}

const TodoProvider =({childeren}) => {
    
    return (
        <TodoStateContext.Provider value={todos}>
            {children}
        </TodoStateContext.Provider>
    )
}

export default TodoProvider;
