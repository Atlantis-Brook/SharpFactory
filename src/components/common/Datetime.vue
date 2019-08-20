<!--
  组件：DateTime日期时间
  隶属：Common公用
-->
<template>
<div class="datetime">
  <div class="time">{{ time }}</div>
  <div class="date">{{ date }}</div>
  <div class="day">{{ day }}</div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'DateTiem',
  data () {
    return {
      time: '',
      date: '',
      day: '',
      timeInterval: null
    }
  },
  methods: {
    updateTime(){
      this.timeInterval = setInterval(() => this.time = moment().format('HH:mm:ss'), 1000)
    }
  },
  created () {
    const momentNow = moment()
    this.date = momentNow.format('YYYY-MM-DD')
    const dayNameMapping = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
    this.day = dayNameMapping[momentNow.format('e')]
    this.time = moment().format('HH:mm:ss')
    this.updateTime()
  },
  brforeDestroy () {
    this.timeInterval = null
  }
}
</script>

<style lang="stylus">
.datetime
  display grid
  grid-column-gap 12px
  align-items center
  justify-items left
  grid-template-areas "time date" "time day"
  .time
    grid-area time
    font-size 36px
    font-weight 700
  .date
    grid-area date
  .day
    grid-area day
</style>
