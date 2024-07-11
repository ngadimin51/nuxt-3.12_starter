<script setup>
const props = defineProps({
  msg: { type: String },
  alertType: { type: String }
})
let classes = "text-center p-2 rounded text-sm cursor-pointer shadow "
</script>

<template>
  <div v-if="msg" :class="classes+' bg-'+alertType+'-100'">
    {{ msg }}
  </div>
</template>
