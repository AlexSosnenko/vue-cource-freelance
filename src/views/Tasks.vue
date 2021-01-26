<template>
  <h1 v-if="tasksCnt === 0" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ tasksCntActive }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.date).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task/' + task.id)">
        Посмотреть
      </button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      tasks: store.getters.tasks,
      tasksCnt: store.getters.tasksCnt,
      tasksCntActive: store.getters.tasksCntActive
    }
  },

  components: { AppStatus }
}
</script>
