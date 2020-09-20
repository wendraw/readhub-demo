// components/my-popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myVisible: {
      type: Boolean,
      value: false,
      observer: '_visibleChange',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    animation: null,
    animationData: null,
  },

  ready: function () {
    const animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0,
    });
    this.setData({
      animation,
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _visibleChange: function (newVal, oldVal) {
      if (oldVal === false && newVal === true) {
        this._onShow();
      }
    },

    _onShow: function () {
      const that = this;
      const query = wx.createSelectorQuery().in(this);
      query.select('#modal-box').boundingClientRect(function (res) {
        const {
          animation
        } = that.data;
        animation.translateY(-res.height).step();
        that.setData({
          visible: true,
          animationData: animation.export(),
        })
      }).exec();
    },

    _onCancel: function () {
      const {
        animation
      } = this.data;
      animation.translateY(0).step();
      this.setData({
        visible: false,
        animationData: animation.export(),
      })
      setTimeout(() => {
        this.triggerEvent('cancel');
      }, 200)
    },
  }
})