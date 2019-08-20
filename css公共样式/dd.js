import Axios from 'axios'
import MessageBoard from '@/views/MessageBoard'
import GetStart from '@/components/home/GetStart'

export default {
  components: {
    MessageBoard,
    GetStart
  },
  data () {
    return {
      result: {},
      walking: null,
      timer: null,
      show: {
        message: false
      },
      header: {
        mainSlogan: 'asssssssssssssss',
        subSlogan: 'dsssssssssssssssssssss',
        bgImgURL: '../assets/images/hacking.jpg'
      }
    }
  },
  created () {
    Axios.get('http://127.0.0.1:7001/')
      .then(
        Response => {
          this.result = Response.data
      }).catch(
        err => {
          this.$router.push('/404')
          console.error(err)
      })
  },
  methods: {
    geturl (val) {
      return val
    },

    

    /* 点击"联系我们"按钮事件 */
    
  }

}