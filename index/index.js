const app = getApp()

const date = new Date();
const days = [];
const hours = [];
const minutes = [];

const year = date.getFullYear();
const month = date.getMonth() + 1;
const week = date.getDay();
const day = date.getDate();


for (let i = 0; i <= 7; i++) {
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  let val = day + i;
  let d = new Date(year, month - 1, val);
  let _month = d.getMonth() + 1;
  let _day = d.getDate();
  let _weekIndex = d.getDay();
  let temp = `${_month}月${_day}日 ${weeks[_weekIndex]}`
  if (i === 0) {
    temp += " (今天)";
  } else if (i === 1) {
    temp += " (明天)";
  } else if (i === 2) {
    temp += " (后天)";
  }
  days.push(temp);
}

for (let i = 0; i <= 23; i++) {
  let val = "" + i;
  hours.push(val.length === 1 ? "0" + val : val);
}

for (let i = 0; i <= 55;) {
  let val = "" + i
  minutes.push(val.length === 1 ? "0" + val : val);
  i += 5
}


Page({
  data: {
    title: "9 月 21 日起，暴风集团股票交易进入退市整理期",
    preContent: "暴风集团发布公告称，公司于 2020 年 8 月 28 日收到深交所《关于暴风集团股份有限公司终止上市的决定》，自",
    time: "9 月 21 日",
    posContent: "起，公司股票交易进入退市整理，在退市整理期 30 个交易日后公司将为摘牌...根据公告，公司股票在退市整理期交易期间，公司将不筹划、不进行重大资产重组事项。",
    eventTitle: "9 月 21 日起，暴风集团股票交易进入退市整理期",
    timerPickerShow: false,
    popupShow: false,

    days: days,
    hours: hours,
    minutes: minutes,
    timerIndexs: [0, 0, 0],
  },

  onLoad: function () {

  },

  subscribeReminder: function (e) {
    this.setData({
      eventTitle: this.data.title,
      popupShow: true,
    }, () => {
      this.showMyPopup()
    })
  },

  onEventTitleChange: function (e) {
    this.setData({
      eventTitle: e.detail
    })
  },

  onClearEventTitle: function (e) {
    this.setData({
      eventTitle: ""
    })
  },

  onShowTimerSelector: function (e) {
    this.setData({
      showTimerSelector: !this.data.showTimerSelector
    })
  },

  onTimerChange: function (e) {
    this.timerIndexs = e.detail.value;
  },

  onTimerPickEnd: function (e) {
    this.setData({
      timerIndexs: this.timerIndexs,
    })
  },

  showMyPopup: function (e) {
    const query = wx.createSelectorQuery().in(this);
    query.select('#my-popup').boundingClientRect((res) => {
      this.animate('#my-popup', [{
        translateY: 0,
      }, {
        translateY: -res.height,
      }], 200)
    }).exec()
  },

  hidePopup: function (e) {
    this.setData({
      popupShow: false,
    });
    const query = wx.createSelectorQuery().in(this);
    query.select('#my-popup').boundingClientRect((res) => {
      this.animate('#my-popup', [{
        translateY: -res.height,
      }, {
        translateY: 0,
      }], 200)
    }).exec()
  },

  showTimerPicker: function (e) {
    const query = wx.createSelectorQuery().in(this);
    query.select('#my-popup').boundingClientRect((res) => {
      this.animate('#my-popup', [{
        translateY: 0,
      }, {
        translateY: -res.height,
      }], 200)
    }).exec()
  },

  hideTimerPicker: function (e) {
    // const query = wx.createSelectorQuery().in(this);
    // query.select('#timer-picker').boundingClientRect((res) => {
    //   console.log(res);
    //   this.animate('#my-popup', [{
    //     translateY: 0,
    //   }, {
    //     translateY: 10,
    //   }], 200)
    // }).exec();
    this.setData({
      timerPickerShow: !this.data.timerPickerShow,
    })
  }
})