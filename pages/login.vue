<script setup lang="ts">
import { ref } from 'vue'

const alert: Ref<string | null> = ref(null)
const alertType: Ref<string|null> = ref<"blue">

const removeAlert = () => {
  alert.value = null
  alertType.value = null
}
const handleSubmit = async (e:HTMLEventSubmit) => {
  e.preventDefault()
  const f = new FormData(e.target)
  const username = f.get('username')
  const password = f.get('password')
  if ( !username ) {
    alert.value = "Check input username"
    alertType.value = "red"
    return
  }
  if ( !password ) {
    alert.value = "Check input username"
    alertType.value = "red"
    return
  }
  alert.value = "check console.log"
  alertType.value = "orange"
  const req = await fetch('/api/login', {
    method: 'POST', headers:{
      'content-type': 'application/json'
    }, body: JSON.stringify({ username, password})
  })
  try {
    const res = await req.json()
    alert.value = res.msg
    alertType.value = req.status == 200 ? "blue" : 'orange'
  } catch (error) {
    console.log(error)
    alert.value = req.status+" "+req.statusText
    alertType.value = "red"
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-[300px]">
    <form @submit.prevent="handleSubmit" class="max-w-[300px] border rounded p-4 shadow">
      <h1 class="text-center font-bold py-6 bg-gray-800 text-white mb-1">LOGIN</h1>
      <AppAlert @click="removeAlert" :msg="alert" :alertType="alertType.value" />
      <div class="my-2 relative ">
        <label for="username" class="text-sm">Username</label>
        <div class="mt-1">
          <input type="text" name="username" class="block w-full rounded-md outline-none border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-" placeholder="Username" id="username" >
        </div>
      </div>
      <div class="my-2 relative ">
        <label for="password" class="text-sm">Password</label>
        <div class="mt-1">
          <input type="text" name="password" class="block w-full rounded-md outline-none border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-" placeholder="Password" id="password" >
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="inline-block bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded">submit</button>
      </div>
    </form>
  </div>
</template>
