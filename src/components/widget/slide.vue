<template lang="html">
  <div class="slides" :style='{width: this.width + "px", height: this.height + "px"}'>
    <div class="slide">
        <img :src="item" alt="" v-for='(item, index) in this.imgList' :class='index === currentPage ? "on" : ""'>
        <div class="turnRect" @click='changeImg(currentPage - 1, true)'>
          <div class="glyphicon-turnleft glyphicon">

          </div>
        </div>
        <div class="turnRect" @click='changeImg(currentPage + 1, true)' style="right: 0">
          <div class="glyphicon-turnright glyphicon">

          </div>
        </div>
    </div>
    <div class="dots" :style=" {marginLeft: -(22 * this.imgList.length + 6)/2 + 'px' }">
      <div class="dot" v-for='(item, index) in this.imgList' :class='index === currentPage ? "on" : ""' @click='changeImg(index, true)'>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgList: { // 图片列表
      type: Array,
      default: []
    },
    width: { // 轮播宽
      type: Number,
      default: 600
    },
    height: { // 轮播高
      type: Number,
      default: 400
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentPage: 0
    }
  },
  methods: {
    startSlide () { // 方法容器 用来承载定时器方法
    },
    changeImg (index, manual) {
      (manual && this.autoplay) && (() => {
        clearInterval(this.startSlide)
        setTimeout(() => { // 检测是手动操作时 启动定时器
          this.startSlide = setInterval(() => {
            this.changeImg(this.currentPage + 1)
          }, 5000)
        })
      })()
      index = index < 0 ? this.imgList.length - 1 : index
      index = index > this.imgList.length - 1 ? 0 : index
      this.$set(this, 'currentPage', index)
    }
  },
  mounted () {
    this.startSlide = this.autoplay ? setInterval(() => {
      this.changeImg(this.currentPage + 1)
    }, 5000) : () => {}
  }
}
</script>

<style lang="less" scoped>
.slides{
  width: 500px;
  height: 400px;
  overflow: hidden;
  position: relative;
  &:hover{
    .slide{
      .turnRect{
        display: block;
      }
    }
  }
  .slide{
      width: 100%;
      height: 100%;
      float: left;
      position: relative;
      .turnRect{
        display: none;
        color: #333;
        cursor: pointer;
        position: absolute;
        width: 40px;
        height: 30px;
        top: 50%;
        margin-top: -15px;
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 30px;
        &:hover{
          background-color: rgba(0, 0, 0, 0.6);
        }
        .glyphicon{
          font-weight: bold;
          color: white;
        }
      }
      img{
        position: absolute;
        opacity: 0;
        transition: all ease 1.5s;
        width: 100%;
        height: 100%;
        &.on{
          opacity: 1;
        }
      }
  }
  .dots{
    background-color: hsla(0,0%,100%,.3);
    border-radius: 12px;
    position: absolute;
    z-index: 1;
    padding: 0px 8px;
    bottom: 20px;
    left: 50%;
    .dot{
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: white;
      display: inline-block;
      transition: all ease 0.4s;
      cursor: pointer;
      &.on{
        background-color: red;
      }
    }
    .dot + .dot{
      margin-left: 10px;
    }
  }
}
</style>
