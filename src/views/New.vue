<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!formValid" @click.prevent="creTask">
      Создать
    </button>
  </form>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref(null)
    const date = ref(null)
    const description = ref(null)
    function formValid() {
      return title.value && date.value && description.value
    }
    function creTask() {
      if (formValid) {
        store.commit('addTask', {
          title: title,
          date: date,
          description: description
        })
        router.push('/')
      }
    }
    return {
      title,
      date,
      description,
      formValid: computed(formValid),
      creTask
    }
  }
}
</script>