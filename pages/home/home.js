// pages/home/home.js
Page({
  data: {
    lists: [
      {id:1 ,text:"你好你好你好你好1", finished: true},
      {id:2 ,text:"你好你好你好你好2", finished: false},
      {id:3 ,text:"你好你好你好你好3", finished: false},
      {id:4 ,text:"你好你好你好你好4", finished: false},
      {id:5 ,text:"你好你好你好你好5", finished: false},
      {id:6 ,text:"你好你好你好你好5", finished: false},
      {id:7 ,text:"你好你好你好你好5", finished: false},
      {id:8 ,text:"你好你好你好你好5", finished: false},
    ],
    visible: false
  },
  confirmCreate(event){
    let content = event.detail;
    if(content){
      let todo = [{id: this.data.lists.length+1, text: content, finished: false}]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({lists: this.data.lists})
      this.hideConfirm()
    }  
  },
  hideConfirm(event){
    this.setData({visible: false})
  },
  showConfirm(){
    this.setData({ visible: true})
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists: this.data.lists})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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