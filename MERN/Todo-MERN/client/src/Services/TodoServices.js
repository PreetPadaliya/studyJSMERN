import axios from "axios";

const user = JSON.parse(localStorage.getItem('todo'));

//default auth header
axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;

//create todo
const createTodo = (data) => {
    return axios.post('/todo/create',data);
}

const TodoServices = {createTodo};
export default TodoServices;