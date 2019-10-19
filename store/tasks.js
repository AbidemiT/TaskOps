export const state = () => ({
    tasks: [
            {title: "Make Nigeria Great Again", status: true},
            {title: "Be Great", status: false},
            {title: "I'm upto Success", status: true},
            {title: "traversing my mind", status: false},
        ]
})

export const getters = {
    completed(state)  {
        return state.tasks.filter(task => task.status === true);
    }
}

// export const getters = {
//   filterCategory(state) {
//     return state.categories
//   },
// }

export const mutations = {
    add(state, text) {
        state.tasks.push({
            title: text,
            status: false
        })
    },
    toggleStatus(state, task) {
        task.status = !task.status;
    }
}