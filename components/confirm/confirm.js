Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    value: ""
  },
  lifetimes: {
    attached() {
      if (this.properties.value) {
        this.properties.value = this.data._value
      }
    }
  },
  methods: {
    confirm(){
      this.triggerEvent('confirm', this.data.value)
    },
    cancel(){
      this.triggerEvent('cancel', "取消")
    },
    watchValue(event){
      this.data.value = event.detail.value
    }
  }
})
