/**
 * 待辦事項介面已被移除，你需要自己定義一個新的待辦事項介面。
 * 待辦事項介面應該包含 id、task 和 completed 三個屬性，分別為數字型別、字串型別和布林型別。
 */

/**
 * 新增待辦事項
 * @param todos - 現有的待辦事項陣列
 * @param task - 新的待辦事項的內容
 * 
 * 範例:
 * 輸入: ([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog')
 * 輸出: [{ id: 1, task: 'Buy milk', completed: false }, { id: 2, task: 'Walk the dog', completed: false }]
 */

interface TodosType {
    id: number,
    task: string,
    completed: boolean,
}

export function addTodo(todos: TodosType[], task: string): TodosType[] {
    // 在此實現函式
    const theLast = todos.length - 1;
    const theLastTodoId = todos[theLast].id;
    let newTodo: TodosType = {
        id: theLastTodoId + 1,
        task: task,
        completed: false
    }
    return [...todos, newTodo];
}
