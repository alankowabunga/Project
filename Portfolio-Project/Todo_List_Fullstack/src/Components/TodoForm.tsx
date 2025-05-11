// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { useState } from "react";

// 1. 接收 TodoWrapper元件傳過來的 props，其儲存了 addTodo function 。
export const TodoForm = ({addTodos}) => { 

    // 使用者輸入值
    const [text, setText] = useState("");
    
    // ADD BUTTON
    function handleSubmit(e) {

        e.preventDefault(); //避免頁面刷新
        console.log("text is:",text)
        
        // 2. 呼叫 addTodo function 傳入 text 回去給 TodoWrapper 元件。
        addTodos(text)
        setText("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                placeholder="What is the task today?"
                className="todo-input"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button type="submit" className="todo-btn">
                ADD
            </button>
        </form>
    );
};
