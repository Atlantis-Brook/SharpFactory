<!--
  页面：Join加入我们页面
  路由：/join
-->
<template>
<div id="join">
  <div class="module">
    <form class="form">
      <h2>SharpFactory 新成员申请表</h2>
      <section>
        <div>基本信息</div>
        <label><span>{{ word.name }}</span><input type="text" v-model="form.name"></label>
        <label><span>{{ word.gender }}</span><input type="text" v-model="form.gender"></label>
        <br>
        <label><span>{{ word.school }}</span><input type="text"  v-model="form.school"></label>
        <label><span>{{ word.grade }}</span><input type="text"  v-model="form.grade"></label>
      </section>
      <section>
        <div>联系方式</div>
        <label><span>{{ word.email }}</span><input type="text"  v-model="form.email"></label>
        <label><span>{{ word.tel }}</span><input type="text"  v-model="form.tel"></label>
      </section>
      <section>
        <div>成长规划</div>
        <label><span>{{ word.whyJoin }}</span><textarea rows="3"  v-model="form.whyJoin" /></label>
        <label><span>{{ word.whatKnown }}</span><textarea rows="3"  v-model="form.whatKnown" /></label>
        <label><span>{{ word.whatWillGet }}</span><textarea rows="3"  v-model="form.whatWillGet" /></label>
      </section>
      <div class="button">
        <span class="submit" @click="submit()">提交</span>
        <span class="reset" @click="reset()">重置</span>
      </div>
    </form>
    <div title="返回" class="close" @click="close()">
      <i class="iconfont icon-guanbi"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'JoinPage',
  data () {
    return {
      word: {
        name: '姓名',
        gender: '性别',
        school: '学校',
        grade: '专业年级',
        email: 'Email',
        tel: 'TEL',
        whyJoin: '为什么加入工作室',
        whatKnown: '有何相关基础',
        whatWillGet: '加入工作室后，希望能收获什么'
      },
      form: {
        name: '',
        gender: '',
        school: '',
        grade: '',
        email: '',
        tel: '',
        whyJoin: '',
        whatKnown: '',
        whatWillGet: ''
      }
    }
  },
  methods: {
    /**
     * 验证字段全部填写
     * 
     * return:
     *  有未填写字段：第一个未填写字段的键值
     *  无未填写字段：false
     */
    verification () {
      for (const key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          const value = this.form[key]
          if (value.trim() === '') return key
        }
      }
      return false
    },
    /**
     * 提交
     */
    submit () {
      const verif = this.verification()
      if (verif) {
        window.alert(`请填写 ${this.word[verif]}！`)
        return
      }
      // TODO 将填写数据提交到后台
    },
    /**
     * 重置
     */
    reset () {
      for (const key in this.form)
        if (this.form.hasOwnProperty(key)) this.form[key] = ''
    },
    /**
     * 返回
     */
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
#join
  position absolute
  top 0
  left 0
  width 100vw
  min-height 100vh
  background-color $main-bgcolor
  .module
    margin-top 50px
    padding 100px 0
    position relative
  .close
    position absolute
    top 30px
    right 30px
    cursor pointer
    color $main-color-2
    transition color .7s
    &:hover
      color $main-color-1
    i.iconfont
      font-size 30px
  form.form
    width 664px
    margin 0 auto
    h2
      font-size $sub-title-fsz
      text-align center
      margin-bottom 50px
    .button
      margin-top 70px
      display flex
      justify-content center
      .submit
        button()
        margin-right 100px
      .reset
        button($main-color-2, $main-color-1)
    section
      div
        font-weight 700
        margin-top 50px
      label
        display inline-flex
        flex-direction column
        flex-wrap wrap
        margin-right 60px
        span
          margin-top 20px
          font-size 13px
          color $placeholder-color
        input,
        textarea
          border-bottom 1px solid $placeholder-color
          padding 10px
          width 250px
          &:focus
            border-color $font-color
        textarea
          width 580px
          line-height 1.5em
</style>