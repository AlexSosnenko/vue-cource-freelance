<template>
  <!-- <span :class="['badge']">Название статуса</span> -->
  <span class="badge" :class="statusClass">{{ statusName }}</span>
</template>
<script>
import { computed } from 'vue'
export default {
  props: ['type'],
  setup(props) {
    const statusTypes = [
      { type: 'active', text: 'Активен', class: 'primary' },
      { type: 'done', text: 'Завершен', class: 'warning' },
      { type: 'cancelled', text: 'Отменен', class: 'danger' },
      { type: 'pending', text: 'Выполняется', class: 'warning' }
    ]
    return {
      statusName: computed(
        () => statusTypes.find((o) => o.type === props.type).text
      ),
      statusClass: computed(
        () => statusTypes.find((o) => o.type === props.type).class
      )
    }
  }
}
</script>