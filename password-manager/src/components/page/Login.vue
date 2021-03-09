<!--  -->
<template>
  <div class="login-container">
    <div class="login-header">
        <div class="header-left">
          <div class="cn-title">
            个人密码管理
          </div>
          <div class="en-title">
            personal password manager
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='less' scoped>
.login-container {
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(../../assets/img/bg_1.jpg);
  background-position: center center;
  background-size: 110% 100%;
}
.login-header { 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  .header-left{
    margin-left: 100px;
    .cn-title{
        line-height: 40px;
        font-size: 28px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.795);
    }
 }
}

</style>