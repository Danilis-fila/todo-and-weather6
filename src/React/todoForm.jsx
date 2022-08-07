import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../Redux/Slices/todoSlice";
import './todoForm.css'
import TodoItem from "./todoItem";

export default function TodoForm() {

    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');
    const todos = useSelector((state) => state.todo.arrTodo)

    const addTodo = () => {
        if (todoText.length !== 0) {
            const todo = {
                id: Date.now(),
                text: todoText
            }
            dispatch(addTodoItem(todo)) //Добавление todo в Redux и localStorage
            setTodoText('')
        }
    }

    const todoComponents = useMemo(() =>
        todos?.map(item => (
            <TodoItem text={item.text} id={item.id} key={item.id} />
        )), [todos])

    return (
        <div className="conteiner">
            <div className="add-field">
                <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)}></input>
                <button onClick={() => addTodo()}>Добавить</button>
            </div>
            <div className="list-items">
                {
                    todos && todoComponents
                }
            </div>
        </div>
    );
}