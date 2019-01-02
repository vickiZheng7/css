<script>
  export default {
    data() {
      return {
        isOverview: false,
        overviewSrc: '',
        selectPaste: false,
        clickMyself: false,
      }
    },
    computed: {
      acceptType() {
        let MIME_TYPE = this.imageType.split(',').map(e => 'image/' + e.toLowerCase())
        return MIME_TYPE.join(',')
      },
      pasteColor() {
        return this.selectPaste ? this.colorStyle : '#d1d4db'
      }
    },
    props: {
      isMulti: {type: Boolean, default: false},
      value: {type: Array, required: true},
      width: {type: String, default: '150px'},
      height: {type: String, default: '150px'},
      overviewWidth: {type: String, default: '300px'},
      overviewHeight: {type: String, default: '300px'},
      colorStyle: {type: String, default: '#8b2f81'},
      imageType: {type: String, default: '*'},
      sizeLimit: {type: Number, default: 1}, //单位为M
      uploadHint: [String],
      uploadBtnLabel: {type: String, default: 'Upload Image'},
      supportPaste: {type: Boolean, default: false}, //暂时只支持谷歌浏览器
      singleImageIndex: {type: Number, default: 0}
    },
    methods: {
      handleDelete(image, index) {
        if (index !== undefined && this.value[index] === image) {
          let newData = [].concat(this.value)
          newData.splice(index, 1)
          this.$emit('input', newData)
        }
        this.$emit('delete', image)
      },
      handleDblclick(image) {
        this.overviewSrc = image
        if (!this.isOverview) {this.isOverview = true}
        this.$emit('overview', image)
      },
      handleClick(event) {
        let currentTarget = event.currentTarget
        //显示文件选择窗口
        let formEle = $(currentTarget).siblings('form.imageUpload-form').get(0)
        $(formEle).find('input[type="file"]').get(0).click()
      },
      handleUpload(event) {
        let imageInput = event.target
        let imageFile = imageInput.files[0]
        //清空input中的file文件
        $(imageInput).closest('form.imageUpload-form').get(0).reset()
        if (!imageFile) {return false}
 
        //图片类型判断
        if (!imageFile.type) {return false}
        if (this.imageType === '*' && !imageFile.type.includes('image')) {
          alert(`Please check the type of file is image.`)
          return false
        } else if (this.imageType !== '*' && !this.acceptType.includes(imageFile.type)) {
          alert(`Please check the type of file is image, and the type of image is ${this.imageType}.`)
          return false
        }
 
        //图片大小判断
        if (!imageFile.size) {return false}
        if (imageFile.size / 1024 / 1024 > this.sizeLimit) {
          alert(`The size of image file can't exceed ${this.sizeLimit}M.`)
          return false
        }
 
        //图片预览
        this.readImage(imageFile)
        this.$emit('upload', imageFile)
        return true
      },
      handlePaste() {
        if (this.isMulti || !this.supportPaste) {return}
        this.selectPaste = !this.selectPaste
        this.clickMyself = true
      },
      readImage(imageFile) {
        let _this = this
        let imageReader = new FileReader()
        imageReader.onerror = function() {
          alert('Sorry, there is something error when overview image.')
        }
        imageReader.onloadend = function(event) {
          let newData = [].concat(_this.value)
          if (_this.isMulti) {newData.push(event.target.result)}
          else { newData[_this.singleImageIndex] = event.target.result }
          _this.$emit('input', newData)
        }
        imageReader.readAsDataURL(imageFile)
      },
      initSupportPaste() {
        if (this.isMulti || !this.supportPaste) {return}
 
        let _this = this
        $('body').on('click', function() {
          if(_this.selectPaste && !_this.clickMyself) {
            _this.selectPaste = false
          } else {
            _this.clickMyself = false
          }
        })
        $(document).on('paste', function(event) {
          //没有选中显示
          if (!_this.selectPaste) {return}
          //IE除外的浏览器，chrome使用的是event.originalEvent
          if (event.clipboardData || event.originalEvent) {
            let clipboardData = event.clipboardData || event.originalEvent.clipboardData
            if (!clipboardData.items) {return}
            let items = clipboardData.items, blob = null
            for (let index = 0; index < items.length; index++) {
              if (items[index].type.indexOf("image") !== -1) {
                blob = items[index].getAsFile()
                break
              }
            }
            if (blob) { _this.readImage(blob) }
          }
        })
      }
    },
    mounted() {
      //只支持谷歌浏览器, 如果是其他浏览器，可自行操作
      this.initSupportPaste()
    }
  }
</script>
