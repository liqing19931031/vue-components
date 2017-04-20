<template>
    <transition name='modal'>
        <div class="modal-transition modal-mask notification" v-if="this.$store.state.modal" @click='hideModal'>
            <div class="modal-confirm" @click='prevent'>
                <div class="modal-content">
                    <!--头部-->
                    <slot name="header">
                        <div class="modal-header" :class='`bg-${this.header}`' :style='{color: this.header ? "#fff" : "#333"}'>
                            <div class="title"><i class="glyphicon"></i>{{this.title}}</div>
                        </div>
                    </slot>
                    <!--内容区域-->
                    <div class="modal-body">
                        <slot name="body">
                            默认内容 可通过slot分发自定义
                        </slot>
                    </div>
                    <!--尾部,操作按钮-->
                    <div class="modal-footer">
                        <slot name="button">
                            <button class="btn btn-info btn-sm" @click='hideModal'>确 定</button>
                            <button class="btn btn-gray btn-sm" @click='hideModal'>取 消</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: ['title', 'header'],
    data () {
        return {

        }
    },
    mounted () {
    },
    methods: {
        ...mapMutations([
            'hideModal'
        ]),
        prevent (e) {
          e.stopPropagation() // 阻止冒泡
        }
    }
}
</script>

<style lang='less'>
.modal-mask{ 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55,55,55,.6);
    z-index: 100;
    display: flex;
    align-items: center;
    color: #333;
    justify-content: center;
    .modal-confirm{
        background-color: white;
        border-radius: 5px;
        min-width: 500px;
        min-height: 250px;
        .modal-header{
            padding: 20px;
            font-size: 20px;
        }
        .modal-body{
            padding: 20px;
            box-sizing: border-box;
            min-height: 125px;
        }
        .modal-footer{
            text-align: center;
            padding-bottom: 30px;
            button + button{
                margin-left: 30px;
            }
        }
    }
}
.modal-enter-active {
    transition: all .3s ease;
}
.modal-leave-active{
    transition: all .3s ease;
}
.modal-enter,
.modal-leave-active {
    opacity: 0;
    transform: scale(1.5);
}
</style>
