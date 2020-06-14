<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    methods:{
      test(val){
        console.log(val)
      }
    }
  }
</script>
