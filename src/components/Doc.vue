<template>
    <div class="doc text-gray-light">
        <div class="oneline">
            <div v-for='(item, index) in this.TEXT' :class='"text-" + item' class="inlineblock">{{TEXTNAME[index]}}</div>
        </div>
        <div class="oneline">
            <div v-for='(value, key) in this.SIZE' :class='"text-font--" + key' class="inlineblick">{{value}}</div>
        </div>
        <div class="oneline">
            大按钮
            <div v-for='(item, index) in this.BUTTONS' :class='"btn btn-lg btn-" + item'>按钮</div>
        </div>
        <div class="oneline">
            正常按钮
            <div v-for='(item, index) in this.BUTTONS' :class='"btn btn-" + item'>按钮</div>
        </div>
        <div class="oneline">
            小按钮
            <div v-for='(item, index) in this.BUTTONS' :class='"btn btn-sm btn-" + item'>按钮</div>
        </div>
        <div class="oneline">
            迷你按钮
            <div v-for='(item, index) in this.BUTTONS' :class='"btn btn-xs btn-" + item'>按钮</div>
        </div>
        <div class="oneline">
            <h1>标题</h1>
            <h2>标题</h2>
            <h3>标题</h3>
            <h4>标题</h4>
            <h5>标题</h5>
            <h6>标题</h6>
        </div>
        <div class="oneline">
            <div class="border-color--base" style="height: 0px;width: 100%;">
                主边框色 #eee
            </div>
        </div>
        <div class="oneline">
             <div class="border-color--lighter" style="height: 0px;width: 100%;">
                强调边框色 #777
            </div>
        </div>
        <div class="oneline">
            <input type="checkbox">
        </div>
        <div class="oneline">
            <input type="radio" name='aa'>
        </div>
        <div class="oneline">
            <div class="input-group">
                <label for="">标题：</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="oneline">
            <div class="input-group">
                <label for="">姓名：</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="oneline">
            <div class="input-group">
                <label for="">年龄：</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="oneline">
            <div class="input-group">
                <label for="">选择：</label>
                <select name="" id="" class="form-control">
                    <option value="">张大炮</option>
                    <option value="">李大王</option>
                    <option value="">刘壮实</option>
                </select>
            </div>
        </div>
        <div class="icons clearfix">
            <div v-for='(item, index) in ICONS' class="icon">
                <i class='glyphicon' :class='`glyphicon-${item}`'></i>
                glyphicon-{{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        ICONS: [
            'check-true',
            'radio-true',
            'success',
            'warning',
            'close',
            'resume',
            'BBS',
            'order',
            'message',
            'download'
        ],
        TEXT: [
            // 'base',
            // 'gray-darker',
            'gray-dark',
            'gray',
            'gray-light',
            'gray-lighter',
            'theme',
            'success',
            'info',
            'warning',
            'danger'
        ],
        TEXTNAME: [
            '主内容字体',
            '一级标题',
            '内容标题',
            '无效文字',
            '主色调',
            '成功颜色',
            '默认色',
            '警报',
            '危险'
        ],
        SIZE: {
            large: '巨大18px',
            big: '大16px',
            base: '中14px',
            small: '小12px',
            mini: '最小10px'
        },
        BUTTONS: [
            'default',
            'theme',
            'success',
            'info',
            'warning',
            'danger'
       ]
    }
  }
}
</script>

<style lang='less'>
.border-line{
    border: 1px solid #000;
}
.icons{
    display: block;
    padding: 30px 0;
    .icon{
        width: 20%;
        float: left;
        text-align: center;
        margin-bottom: 40px;
        i{
            margin-bottom: 10px;
            font-size: 60px;
            color: #43cb83;
            display: block;
        }
    }
}
.doc{
    font-family: 'Microsoft yahei';
    padding: 40px 40px;
    .inlineblock{
        display: inline-block;
        flex-wrap: nowrap;
    }
    .oneline{
        display: flex; 
        justify-content: space-between;
    }
    .oneline + .oneline{
        margin-top: 30px;
    }
    /*.rect-line{
        margin: 20px 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .text{
            text-align: center;
        }
        .rect{
            width: 100px;
            height: 100px;
        }
    }*/
}
</style>
