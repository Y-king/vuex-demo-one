<template lang="html">
    <div class="content">
        <h2>财富排行榜二</h2>
        <ul>
            <li v-for="item in newlists">
                <span>{{item.name}}</span>
                <span>${{item.price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
      lists(){
        return this.$store.state.lists
      },
      //处理之后state内的数据
      // newlists(){
      //   return this.$store.getters.newlists
      // }
      ...mapGetters([
          "newlists"
      ])
    }
}
</script>

<style lang="css" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{ content:"."; display:block; clear:both; height:0; font-size:0; overflow:hidden;}
.clearfix{ zoom:1;}
ul{ list-style: none;}
h2{font-size: 20px; width: 100%; height: 40px; line-height: 40px;text-align: center; margin-top: 30px;}
ul li{width: 20%;height:30px; line-height: 30px; background:#eee; font-size: 14px; text-align: center; margin: 15px auto;}
ul li span{float: left; width: 50%;}
ul li span:first-of-type{ text-align: right; width: 45%; padding-right: 5%;}
ul li span:last-of-type{ text-align: left; color: #f00; font-weight: bold;}
button{ width: 150px; height: 30px; line-height: 30px; text-align: center; font-size: 14px; background:#e4305e; margin: 25px auto; border: none; display: block; color: #fff;  cursor: pointer; outline: none;}
</style>
