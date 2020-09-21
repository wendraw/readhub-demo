let config = require('config/config');

App({
  onLaunch: function () {
    try {
      let res = wx.getSystemInfoSync();
      config.pixelRate = res.windowWidth / 750;
      config.platform = res.platform;
      config.statusBarHeight = res.statusBarHeight;
      if (res.platform.toLowerCase() == 'devtools') {
        config.capsuleHeight = 44;
      }
      if (res.platform.toLowerCase() == 'android') {
        config.capsuleHeight = 48;
      }
      config.titleHeight = (config.capsuleHeight + config.statusBarHeight) / config.pixelRate;
      if (res.statusBarHeight >= 44) {
        config.isHighHead = true;
      }
      if (res.windowHeight > 750) config.isAllScreen = true;
      config.systemHeight = res.windowHeight;
    } catch (e) {
      console.log(e);
    }
  }
})