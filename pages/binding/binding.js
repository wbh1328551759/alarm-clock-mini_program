// pages/binding/binding.js
Page({

  data: {
    account:"",
    password:"",
    isBinding: true
  },
  watchAccount(event){
    console.log(event.detail.value)
  },
  watchPassword(){

  },
  goToRegister(){
    this.setData({ isBinding: false })
  },
  goToBinding(){
    this.setData({ isBinding: true })
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },


  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})