import axios from "axios";

//create todo
const createTodo = (data) => {
    const user = JSON.parse(localStorage.getItem('todo'));
    return axios.post('/todo/create', data, {
        headers: {
            'Authorization': `Bearer ${user?.token}`
        }
    });
}

const TodoServices = {createTodo};
export default TodoServices;