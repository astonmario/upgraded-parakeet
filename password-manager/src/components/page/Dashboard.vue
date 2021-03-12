<!--  -->
<template>
  <div class="index-wrapper">
    <div class="count-group">
       <div class="count-item">
          密码总计
          <div class="big-color-number" style="color:#FFB400;">
               9
          </div>
       </div>
       <div class="count-item" >
          已过期的密码
          <div class="big-color-number" style="color:#DC143C;">
               9
          </div>
       </div>
       <div class="count-item">
          违反策略
          <div class="big-color-number">
               9
          </div>
       </div>
       <div class="count-item">
          冲突的密码
          <div class="big-color-number">
               9
          </div>
       </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.index-wrapper{
    .count-group{
        display: flex;
        .count-item{
            flex:1;
            border: 1px solid rgb(179, 169, 169);
            padding: 10px 15px;
            border-radius: 4px;
            .big-color-number{
               margin-top: 18px;
               font-size: 36px;
            }
        }
        .count-item +.count-item{
            margin-left: 25px;
        }
    }
}
</style>