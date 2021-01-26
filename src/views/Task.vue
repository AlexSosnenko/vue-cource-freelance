<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p>
      <strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}
    </p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button
        class="btn"
        @click="changeType('pending')"
        :disabled="task.status === 'pending'"
      >
        Взять в работу
      </button>
      <button
        class="btn primary"
        @click="changeType('done')"
        :disabled="task.status === 'done'"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        @click="changeType('cancelled')"
        :disabled="task.status === 'cancelled'"
      >
        Отменить
      </button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = route.params.taskId * 1
    function changeType(tp) {
      store.commit('setStatus', { id: id, tp: tp })
    }
    return {
      task: store.getters.taskById(id),
      id,
      changeType
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>
</style>