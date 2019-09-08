// pages/item/item.js
import douban from '../../utils/douban.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'加载中',
    detail:{},
    photos:[]
  },
  clickImage(){
    console.log(this.data.photos)

    wx.previewImage({
      urls: this.data.photos,
      current:this.data.photos[0]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url='';
    if(options.api==='music'){
      url='/music/'
    }else if(options.api=='movie'){
      url = '/movie/subject/'
    }
    douban({
      url:url+options.id,
      loadingTop:true
    }).then(
      res=>{
        console.log('item_res',res.data)
        if (res.data.msg){
          console.log('detail ID有误');
          return;
        }
        if (options.api=='music'){
          this.setData({
            detail:{
              images:{
                large:res.data.image
              },
              title:res.data.title,
              year:'2019-9-2',
              rating:res.data.rating,
              directors: res.data.author,
              casts: res.data.author,
              name: res.data.title,
              id: res.data.id,
              summary: res.data.summary
            }
          });
          wx.setNavigationBarTitle({ title: res.data.title + ' « 音乐 « 豆瓣' }); //加载完了修改
        } else if (options.api == 'movie') {
          let photos = [];
          res.data.photos.map((item, index) => {
            photos.push(item.image)
          })

          this.setData({
            detail: res.data,
            title: res.data.title,
            photos: photos
          });

          wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' }); //加载完了修改

        }
      }
    )
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