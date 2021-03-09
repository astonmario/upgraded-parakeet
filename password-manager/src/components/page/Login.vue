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
        <div class="header-right">
          用户登录
        </div>
    </div>
    <div class="login-body">
       <div class="login-box">
         <div class="logo-box">
          
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

  methods: {}
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
  .header-left {
    margin-left: 100px;
    .cn-title {
      line-height: 40px;
      font-size: 28px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.795);
    }
    .en-title {
      line-height: 40px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.795);
    }
  }
  .header-right {
    margin-right: 100px;
    line-height: 40px;
    font-size: 28px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.795);
  }
}
.login-body {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 240px;
  .login-box {
    width: 420px;
    height: 500px;
    padding: 28px 45px;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 10px;
    box-shadow: 0 2px 34px 0 rgb(51 51 51 / 30%);
    .logo-box{
      width: 100%;
      height: 220px;
      background-image: url(../../assets/img/key-logo.jpg);
      background-repeat:no-repeat;

    }
  }
}
</style>