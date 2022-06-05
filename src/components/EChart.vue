<template>
  <!-- div 作为一个echarts的容器 -->
  <div style="height: 100%" ref="echart">echart11</div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        }
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      echart: null,
      // 有坐标轴的配置
      axisOption: {
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          data: [],
        },

        yAxis: [
          {
            type: 'value',
          },
        ],
        // series 表示要渲染成什么样的图标。如：折线图，柱状图，扇形图等
        series: [],
      },
      // 没有坐标轴的配置
      normalOption: {
        series: [],
      },
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.initChart()
      },
    },
  },
  methods: {
    initChart() {
      this.initChartData()
      // 判断data中的echart是否存在
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        // 初始化echarts
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    // 处理传入进来的数据
    initChartData() {
      // 如果是坐标轴图表如何做
      if (this.isAxisChart) {
        console.log('aa', this.chartData.series)
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        // 如果不是坐标轴图表如何做
        this.normalOption.series = this.chartData.series
      }
    },
  },
}
</script>

<style>
</style>