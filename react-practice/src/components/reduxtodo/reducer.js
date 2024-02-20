import {ADD_TODO,DEL_TODO,UPDATE_TODO} from "./action";
const initialstate={
    todo:[]
}
const todoReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todo:[
                    ...state.todo,
                    {
                        id:state.todo.length+1,
                        text:action.payload.text,
                    }
                ]
            }
            case DEL_TODO:
            return{
                ...state,
                todo:state.todo.filter((item)=>item.id!==action.payload.id)
            }
            case UPDATE_TODO:
                return{
                    ...state,
                    todo:state.todo.map((item)=>
                        item.id === action.payload.id
                        ?{...item,text:action.payload.newText}:item
                    )
                }
               
                default:
                    return state;

            
    }
}
export default todoReducer;