<template>
  <div>
    登录
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    methods: {
      //获取用户信息
      getInfo(){
        this.$store.dispatch('userInfoMoudle/getUserInfo',{}).then( res =>{
            if(res.data.code ==200){}
        })
      }
    },
    created(){
      this.getInfo();
    }
  }
</script>

<style lang="scss" scoped>

</style>