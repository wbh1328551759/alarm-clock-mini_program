// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSecond: 1500,
    time: "",
    timer: null,
    timerStatus: "stop",
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },
  onShow: function () {
    this.startTimer()
  },
  startTimer(){
    this.setData({timerStatus: "start"})
    this.changeTime()
    this.data.timer = setInterval(() => {
      defaultSecond: this.data.defaultSecond -= 1
      this.changeTime()
      if(this.data.defaultSecond === 0){
        this.setData({againButtonVisible: true})
        this.setData({finishConfirmVisible: true})
        return this.clearTimer() 
      }
    },1000)
  },
  clearTimer(){
    this.setData({timerStatus: "stop"})
    clearInterval(this.data.timer)
  },
  changeTime(){
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond%60)
    if((s+"").length === 1){
      s = "0" + s
    }
    if((m + "").length === 1){
      m = "0" + m
    }
    this.setData({time: `${m}:${s}`})
  },
  showConfirm(){
    this.setData({confirmVisible: true})
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({confirmVisible: false})
    this.startTimer()
  },
  confirmAbandon(event){
    let content = event.detil
    wx.navigateBack({
      to: -1,
    })
  },
  againTimer(){
    this.data.defaultSecond = 1500
    this.setData({againButtonVisible: false})
    this.startTimer()
  },
  confirmFinish(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({finishConfirmVisible: false})
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})