import React, { memo } from "react";
import './todoItem.css'
import { useDispatch } from "react-redux";
import { removeTodoItem } from "../Redux/Slices/todoSlice";

export default memo(
    function TodoItem(props) {
        const dispatch = useDispatch();

        const removeTodo = id => {
            dispatch(removeTodoItem(id)) // Удаление todo из Redux и localStorage
        }

        return (
            <div className="todo-item">
                <div className="todo-title-item">{props.text}</div>
                <button className="todo-item-delete" onClick={() => removeTodo(props.id)}>X</button>
            </div>
        )
    }
)