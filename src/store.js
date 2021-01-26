import { createStore } from 'vuex'
import moment from 'moment'
export const store = createStore({
    state() {
        return { tasks: [] }
    },
    mutations: {
        setStatus(state, payload) {
            state.tasks.find(task => task.id === payload.id).status = payload.tp
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        addTask(state, payload) {
            let id = Date.now();
            let status = "active";
            let dt = moment(payload.date.value + ' 23:59', 'YYYY-MM-DD HH:mm', true);
            if (dt < new Date()) {
                status = "cancelled"
            }
            const obj = { id: id, title: payload.title.value, date: dt, description: payload.description.value, status: status }
            state.tasks.push(obj)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        init(state) {
            let arr = JSON.parse(localStorage.getItem('tasks'));
            if (arr) {
                state.tasks = arr
            }
        }

    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        tasksCnt(state) {
            return state.tasks.length
        },
        tasksCntActive(state) {
            let res = state.tasks.filter(function (v) {
                return v.status === 'active';
            });
            return res.length
        },
        taskById: state => id => {
            return state.tasks.find(task => task.id === id);
        }

    }
})