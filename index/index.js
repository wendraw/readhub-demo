const app = getApp()

Page({
  data: {
    title: "9 月 21 日起，暴风集团股票交易进入退市整理期",
    preContent: "暴风集团发布公告称，公司于 2020 年 8 月 28 日收到深交所《关于暴风集团股份有限公司终止上市的决定》，自",
    time: "9 月 21 日",
    posContent: "起，公司股票交易进入退市整理，在退市整理期 30 个交易日后公司将为摘牌...根据公告，公司股票在退市整理期交易期间，公司将不筹划、不进行重大资产重组事项。",
    popupShow: true,
  },

  onLoad: function () {},

  subscribeReminder: function (e) {
    this.setData({
      popupShow: true,
    })
  },

  onClose: function (e) {
    this.setData({
      popupShow: false,
    })
  }
})