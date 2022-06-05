<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="user-info">
            <p class="name">Kevin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2019-10-20</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 537px; margin-top: 20px">
        <el-table :data="tableData" style="width: 100%">
          <!-- v-for="(val,key) in tableLabel" 这里的val不能改成item，原因不清楚 -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <Echart style="height: 280px" :chartData="echartData.order"></Echart
        >
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <Echart style="height: 260px"></Echart>
        </el-card>
        <el-card shadow="hover">
          <Echart style="height: 260px"></Echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/EChart.vue'
export default {
  components: {
    Echart,
  },
  data() {
    return {
      userImg: require('../../assets/images/user-default.png'),
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
      ],
      tableData: [],
      tableLabel: {
        name: '课程名',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买',
      },

      // 定义echarts数据
      echartData: {
        // order 和 user 是有坐标轴的数据
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    }
  },
  methods: {
    getTableData() {
      this.$http.get('/home/getData').then((res) => {
        res = res.data
        this.tableData = res.data.tableData
        console.log(res.data)
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 第一步取出键名(也就是series当中的name部分)
        let keyArr = Object.keys(order.data[0])
        console.log(keyArr)
        keyArr.forEach((key) => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key,
            data: order.data.map((item) => item[key]),
            type: 'line',
          })
        })
      })
    },
  },
  created() {
    this.getTableData()
  },
}
</script>

<style scoped>
.home .num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home .num .el-card {
  width: 32%;
  margin-bottom: 20px;
}

.home .num .el-card .icon {
  font-size: 30px;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fff;
}

.home .num .el-card .detail {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home .num .el-card .detail .num {
  font-size: 30px;
}

.home .num .el-card .detail .txt {
  font-size: 14px;
  text-align: center;
  color: #999;
}

.home .graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.home .graph .el-card {
  width: 48%;
}
.home .user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.home .user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
}
.home .user .user-info .name {
  font-size: 32px;
  margin-bottom: 10px;
}
.home .user .user-info .access {
  color: #999;
}

.home .login-info p {
  line-height: 28px;
  font-size: 14px;
  color: #999;
}
.home .login-info p span {
  color: #666;
  margin-left: 60px;
}
</style>