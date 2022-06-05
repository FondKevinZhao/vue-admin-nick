import Mock from 'mockjs'

// mock中举库random学习：https://blog.csdn.net/xun__xing/article/details/107294970

export default {
  getHomeData: () => {
    return {
      code: 20000, // 正常接口返回成功是200或0，为了区分，所以写为20000
      data: { // 这里写home页的模拟数据
        videoData: [
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'es6',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Java',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
        ],
        tableData: [
          {
            name: "ES6", 
            todayBuy: 788.67, 
            monthBuy: 4140.2, 
            totalBuy: 780205.62
          },
          {
            name: "小程序", 
            todayBuy: 430, 
            monthBuy: 4830.62, 
            totalBuy: 574882.6
          },
          {
            name: "Vue", 
            todayBuy: 693, 
            monthBuy: 4512.4, 
            totalBuy: 280061.46
          },
          {
            name: "springboot", 
            todayBuy: 673.5, 
            monthBuy: 4517.46, 
            totalBuy: 407299
          },
          {
            name: "React", 
            todayBuy: 128, 
            monthBuy: 3062, 
            totalBuy: 168738.67
          },
          {
            name: "Redis", 
            todayBuy: 671.5, 
            monthBuy: 3096.62, 
            totalBuy: 846306
          },
        ],
        userData: [],
        orderData: {
          data: [
            {
              vue: 422.7,
              wechat: 7767.36,
              ES6: 233,
              Redis: 343.39,
              React: 5955.6,
              springboot: 2377
            },
            {
              vue: 3308,
              wechat: 3094.2,
              ES6: 4832.25,
              Redis: 3075,
              React: 6868.5,
              springboot: 2730
            },
            {
              vue: 2763,
              wechat: 7756.1,
              ES6: 4128.7,
              Redis: 1485384,
              React: 5149,
              springboot: 2877
            },
            {
              vue: 2507.65,
              wechat: 6938.6,
              ES6: 6958.3,
              Redis: 6605.63,
              React: 6691.3,
              springboot: 2977
            },
            {
              vue: 916.3,
              wechat: 7870.58,
              ES6: 362,
              Redis: 4966.4,
              React: 1267,
              springboot: 2577
            },
            {
              vue: 2175.8,
              wechat: 4044.61,
              ES6: 6974.5,
              Redis: 7702.8,
              React: 4498.28,
              springboot: 7377
            },
            {
              vue: 3140,
              wechat: 1881.3,
              ES6: 4616.6,
              Redis: 5557.8,
              React: 2060.3,
              springboot: 6377
            },
            {
              vue: 1293.2,
              wechat: 3272,
              ES6: 5248.16,
              Redis: 2679.6,
              React: 1196.7,
              springboot: 5377
            },
            {
              vue: 2029.13,
              wechat: 710,
              ES6: 2012.27,
              Redis: 804.4,
              React: 5053.3,
              springboot: 7370
            },
            {
              vue: 6679.7,
              wechat: 7999,
              ES6: 2812.3,
              Redis: 2935.7,
              React: 3917.4,
              springboot: 3377
            },
            {
              vue: 2840,
              wechat: 4086.58,
              ES6: 7162,
              Redis: 6285.1,
              React: 1109,
              springboot: 2577
            },
            {
              vue: 7122,
              wechat: 7723.7,
              ES6: 2226.5,
              Redis: 4387.5,
              React: 5705.4,
              springboot: 2390
            },
            {
              vue: 4543,
              wechat: 7395,
              ES6: 6827.3,
              Redis: 3216.2,
              React: 6038,
              springboot: 3377
            },
            {
              vue: 3950.6,
              wechat: 2085.1,
              ES6: 2978.91,
              Redis: 4616,
              React: 6706.72,
              springboot: 2477
            },
          ],
          date: ['20191001','20191002','20191003','20191004','20191005','20191006','20191007']
        }
      }
    }
  }
}