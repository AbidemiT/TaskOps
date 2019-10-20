<template>
    <div class="tasks_page">
        <div class="new_task">
            <button @click="newTask">New Task</button>
        </div>
        <div class="tasks">
            <div class="task" v-for="(task,i) in tasks" :key="i">
                <h3 class="task_title">{{task.title}}</h3>
                <div class="task_status">
                    <span v-if="task.status" @click="toggle(task)" class="on"></span>
                    <span v-else class="off" @click="toggle(task)"></span>
                </div>
            </div>
        </div>

        <div class="heading"><h3>Completed Tasks</h3></div>
        <div class="tasks">
        <div class="task" v-for="(task,i) in complete" :key="i">
                <h3 class="task_title">{{task.title}}</h3>
                <div class="task_status">
                    <span v-if="task.status" @click="toggle(task)" class="on"></span>
                    <span v-else class="off" @click="toggle(task)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

    export default {
        computed: {
            ...mapState({
                tasks: state => state.tasks.tasks
            }),

            ...mapGetters({
                complete: 'tasks/completed'
            })
        },
        methods: {
            ...mapMutations({
                toggle: 'tasks/toggleStatus'
            }),
            newTask() {
                this.$router.push('/tasks/newTask');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
