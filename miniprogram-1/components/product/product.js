// components/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object
    },
    api:{
      type:String,
      value:'movie'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:'页面加载中'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandler(){
      wx.navigateTo({
        url: '/pages/item/item?id=' + this.properties.item.id + '&api=' + this.properties.api      })
    }
  }
})
