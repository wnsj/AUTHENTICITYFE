<!-- add and modify position -->
<template>
  <div class="modal-content">
    <div class="modal-header">
      <h4 id="myModalLabel" class="modal-title">{{title}}写字楼</h4>
    </div>
    <div class="modal-body pos_r">
      <div class="tab-pane fade in active martop" id="basic">
        <div class="dialogInutBox clearfix">
          <!-- <div class="col-md-6 form-group clearfix">
                        <label class="col-md-3 control-label text-right nopad end-aline"
                               style="padding:0;line-height:34px;">业态</label><span class="sign-left">:</span>
                        <div class="col-md-8">
                            <Commercial @comChange="comRe" ref="comRef"></Commercial>
                        </div>
          </div>-->
          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >最早可租</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.earliestRent" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >最短租期</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.minTenancy" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >所在楼层</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.floor" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >最小工位数</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.minStationNum" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >最大工位数</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.maxStationNum" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >户型介绍</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.horseLabel" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >交通出行</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.traffic" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >路途</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.way" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >装修描述</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.renovationLabel" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >楼盘介绍</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.buildIntroduce" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >使用率</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.usageRate" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >周边配套</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="text" class="form-control" v-model="roomParam.rimMating" />
            </div>
          </div>

          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >图片</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input
                type="file"
                id="roomPicture"
                @change="buildRealImgChange"
                accept="image/*"
                multiple="multiple"
              />
              <p class="redtips">*注意：宽620px*高380px</p>
              <div id="buildRealImgOutDiv">
                <div
                  v-for="(item,index) of buildRealImgList"
                  :key="index"
                  v-show="buildRealImgList.length!==0"
                >
                  <div @click="fileDel(index,3,item)">x</div>
                  <img :src="item" style="width: 100%" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >头图</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="file" id="roomImg" @change="headImgChange" accept="image/*" />
              <p class="redtips">*注意：宽378px*高228px</p>

              <div id="headImgOutDiv">
                <div
                  v-for="(item,index) of headImgList"
                  :key="index"
                  v-show="headImgList.length!==0"
                >
                  <div @click="fileDel(index,5,item)">x</div>
                  <img :src="item" style="width: 100%" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 form-group clearfix">
            <label
              class="col-md-3 control-label text-right nopad end-aline"
              style="padding:0;line-height:34px;"
            >视频</label>
            <span class="sign-left">:</span>
            <div class="col-md-8">
              <input type="file" id="roomVideo" @change="videoChange" />
              <div id="playAvOutDiv" v-if="playAvOutDivFlag">
                <!--                                <PlayAV ref="playRef"></PlayAV>-->
                <label
                  class="col-md-3 control-label text-right nopad end-aline"
                  style="padding:0;line-height:34px;"
                >{{this.videoName}}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="dialogBtnBox form-group clearfix">
          <div class="col-md-12">
            <button
              type="button"
              class="btn btn-warning pull-right m_r_10"
              style="margin-right:1.5%;"
              data-toggle="modal"
              v-on:click="closeCurrentPage()"
            >返回</button>
            <button
              type="button"
              :disabled="this.isDisable"
              class="btn btn-primary pull-right m_r_10"
              style="margin-right:1.5%;"
              data-toggle="modal"
              v-on:click="certainAction()"
            >确认</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
var that = null;
import Commercial from "../../../common/subCommercial/subCommercial";
import Property from "../../../common/subProperty/subProperty";
import Charas from "../../../common/Charas";

export default {
  components: {
    Commercial,
    Property,
    Charas,
  },
  data() {
    return {
      roomParam: {
        // 写字楼房源详情ID
        id: "",

        // 房源id
        roomId: "",

        // 最早租期
        earliestRent: "",

        // 最短租期
        minTenancy: "",

        // 所在楼层
        floor: "",

        // 最小工位数
        minStationNum: "",

        // 最大工位数
        maxStationNum: "",

        // 户型介绍
        horseLabel: "",

        // 交通出行
        traffic: "",

        // 路途
        way: "",

        // 装修描述
        renovationLabel: "",

        // 楼盘介绍
        buildIntroduce: "",

        // 使用率
        usageRate: "",

        // 周边配套
        rimMating: "",
      },
      picture: [],
      pictureFile: [],
      title: "",
      size: 0,
      playAvOutDivFlag: true,
      buildRealImgList: [],
      buildRealImgIdList: [],
      buildRealImgFileList: [],
      headImgList: [],
      headImgIdList: [],
      headImgFileList: [],
      isDisable: false,
      videoName: "",
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg",
      },
      reStore: {},
    };
  },
  methods: {
    // Initialization projcet’s content
    // comRe(data) {
    //     this.roomParam.suitable = []
    //     if (null != data) {
    //         this.roomParam.suitable = data
    //     }
    // },

    headImgChange() {
      var files = $("#roomImg")[0].files; //获取file对象
      if (null != files) {
        this.headImgList = [];
      }
      for (let i = 0; i < files.length; i++) {
        var file = files[i];
        this.fileAdd(file, i, 5);
      }
    },

    buildRealImgChange() {
      console.log("进入多图1111111");
      var files = $("#roomPicture")[0].files; //获取file对象
      console.log("进入多图1111111", files);
      for (let i = 0; i < files.length; i++) {
        var file = files[i];
        console.log("进入多图1111111", "循环循环");
        this.fileAdd(file, i, 3);
      }
    },

    videoChange() {
      var files = $("#roomVideo")[0].files;
      if (null != files) {
        this.videoName = "";
      }
    },

    fileAdd(file, i, pictureType) {
      let type = file.type; //文件的类型，判断是否是图片
      let size = file.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) === -1) {
        alert("请选择我们支持的图片格式！");
        return false;
      }
      if (size > 3145728) {
        alert("请选择3M以内的图片！");
        return false;
      }
      let that = this;
      // 总大小
      this.size = this.size + file.size;
      let reader = new FileReader();
      // 调用reader.readAsDataURL()方法，把图片转成base64
      reader.readAsDataURL(file);

      // 监听reader对象的onload事件，当图片加载完成时，把base64编码賦值给预览图片
      reader.onload = function () {
        var dataUrl = reader.result;

        file.src = this.result;
        if (pictureType === 3) {
          that.buildRealImgFileList.push(file);
          that.buildRealImgList.push(dataUrl);
        } else if (pictureType === 5) {
          that.headImgFileList.push(file);
          that.headImgList.push(dataUrl);
        }

        // if ($("#matchingRealImgInnDiv_" + i).length <= 0) $("#matchingRealImgOutDiv").append(
        //     "<div id='matchingRealImgInnDiv_" + i + "' >" +
        //     "<img id='matchingRealImg_" + i + "' src='#' style='width: 100%' />" +
        //     "</div>"
        // );
        // $("#matchingRealImg_" + i).attr("src", dataUrl);
      };
    },

    fileDel(index, type, item) {
      if (this.title == "修改") {
        if (!confirm("确定删除该图片？")) {
          return;
        }
      }
      var id = "";
      if (type === 3) {
        id = this.buildRealImgIdList[index];
        this.buildRealImgList.splice(index, 1);
        this.buildRealImgFileList.splice(index, 1);
      } else if (type === 5) {
        id = this.headImgIdList[index];
        this.headImgList.splice(index, 1);
        this.headImgFileList.splice(index, 1);
      }
      if (this.title == "新增") return;
      if (this.isBlank(item)) return;
      console.log("item", item);
      var index = item.lastIndexOf("=");
      console.log("index", index);
      var str = item.substring(index + 1, item.length);
      console.log("str", str);
      if (this.isBlank(str)) return;

      console.log("id", id);
      this.$ajax({
        method: "POST",
        url: this.url + "/buildingBean/deleteImgFile",
        headers: {
          "Content-Type": this.contentType,
          "Access-Token": this.accessToken,
        },
        data: { imgId: id },
        dataType: "json",
      })
        .then((response) => {})
        .catch((error) => {
          console.log("楼盘信息提交失败");
        });
    },

    formatFileSize: function (fileSize, idx) {
      var units = ["B", "KB", "MB", "GB"];
      idx = idx || 0;
      if (fileSize < 1024 || idx === units.length - 1) {
        return fileSize.toFixed(1) + units[idx];
      }
      return this.formatFileSize(fileSize / 1024, ++idx);
    },

    initData(addCou) {
      $("#roomDialog").modal({ backdrop: "static", keyboard: false });
      this.roomParam = {
        // 写字楼房源详情ID
        id: "",

        // 房源id
        roomId: "",

        // 最早租期
        earliestRent: "",

        // 最短租期
        minTenancy: "",

        // 所在楼层
        floor: "",

        // 最小工位数
        minStationNum: "",

        // 最大工位数
        maxStationNum: "",

        // 户型介绍
        horseLabel: "",

        // 交通出行
        traffic: "",

        // 路途
        way: "",

        // 装修描述
        renovationLabel: "",

        // 楼盘介绍
        buildIntroduce: "",

        // 使用率
        usageRate: "",

        // 周边配套
        rimMating: "",
        // createDate: ''
      };

      this.buildRealImgList = [],
        this.buildRealImgFileList = [],
        this.headImgList = [],
        this.headImgFileList = [],
        $("#roomPicture").val("");
      $("#roomImg").val("");

      this.getRoomDetails(addCou.id);
    },

    getRoomDetails(item) {
      var url = this.url + "/roomMainBean/getRoomDetails?roomMainId=" + item;
      this.$ajax({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": this.contentType,
          "Access-Token": this.accessToken,
        },
        // data: {
        //     roomId: item
        // },
        dataType: "json",
      })
        .then((response) => {
          var res = response.data;
          if (res.retCode === "0000") {
            if (res.retData.roomDetail) {
              this.roomParam = res.retData.roomDetail;
              this.title = "修改";
              if (res.retData.picture.length != 0) {
                var buildRea = [];
                for (var i = 0; i < res.retData.picture.length; i++) {
                  buildRea.push(
                    this.url +
                      "/fileController/getFile?path=D:/buildStoreDir" +
                      res.retData.picture[i].imgPath
                  );
                  this.buildRealImgIdList.push(res.retData.picture[i].imgId);
                }
                this.buildRealImgList = buildRea;
              }
              if (res.retData.head.length != 0) {
                var img = [];
                img.push(
                  this.url +
                    "/fileController/getFile?path=D:/buildStoreDir" +
                    res.retData.head[0].imgPath
                );
                this.headImgIdList.push(res.retData.head[0].imgId);
                this.headImgList = img;
              }
            } else {
              this.buildRealImgList = [],
        this.buildRealImgFileList = [],
        this.headImgList = [],
        this.headImgFileList = [],
                $("#roomPicture").val("");
              $("#roomImg").val("");

              this.roomParam.roomId = item;
              this.title = "新增";
            }
          } else {
            alert(res.retMsg);
          }
        })
        .catch((error) => {
          console.log("数据请求失败处理");
        });
    },

    certainAction() {
      if (
        this.roomParam.minStationNum != null &&
        this.roomParam.minStationNum !== "" &&
        parseInt(this.roomParam.minStationNum) !== 0
      ) {
        if (!/^([0-9]*$)$/.test(this.roomParam.minStationNum)) {
          alert("最小工位数只能是整数");
          return;
        }
      }

      if (
        this.roomParam.maxStationNum != null &&
        this.roomParam.maxStationNum !== "" &&
        parseInt(this.roomParam.maxStationNum) !== 0
      ) {
        if (!/^([0-9]*$)$/.test(this.roomParam.maxStationNum)) {
          alert("最大工位数只能是整数");
          return;
        }
      }

      if (
        this.roomParam.usageRate != null &&
        this.roomParam.usageRate !== "" &&
        parseInt(this.roomParam.usageRate) !== 0
      ) {
        if (!/^([0-9]*$)$/.test(this.roomParam.usageRate)) {
          alert("使用率只能是整数");
          return;
        }
      }

      this.loading = true;
      this.btnName = "提交中...";

      const fd = new FormData();

      for (let i = 0; i < this.buildRealImgFileList.length; i++) {
        fd.append("picture", this.buildRealImgFileList[i]);
      }

      // 头图
      for (let i = 0; i < this.headImgFileList.length; i++) {
        fd.append("headPicture", this.headImgFileList[0]);
      }

      // 视频
      var videoFile = $("#roomVideo")[0].files[0];

      if (videoFile != undefined) {
        fd.append("video", videoFile);
      }
      if (null != videoFile) {
        var Mb = videoFile.size / 1024 / 1024;
        console.log("文件大小" + Mb);
        if (Mb > 100) {
          alert("您的视频超出限制，请选择100Mb内视频");
          return;
        }
      }
      fd.append("param", JSON.stringify(this.roomParam));
      switch (this.title) {
        case "新增":
          var url = this.url + "/roomBean/addRoom";
          break;
        case "修改":
          var url = this.url + "/roomBean/updateRoom";
          break;
      }

      this.$ajax({
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Token": this.accessToken,
        },
        data: fd,
        dataType: "json",
      })
        .then((response) => {
          const res = response.data;
          if (res.retCode === "0000") {
            alert("提交成功！");
            this.$emit("certainAction");
          } else {
            alert(res.retMsg);
            this.$emit("certainAction");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    closeCurrentPage() {
      $("#roomDialog").modal("hide");
    },
    proRe(data) {
      this.roomParam.properInfo = [];
      if (null != data) {
        this.roomParam.properInfo = data;
      }
    },
    //预览图
    pictureChange() {
      var files = $("#picture")[0].files; //获取file对象

      if (null != files) {
        this.picture = [];
      }
      for (let i = 0; i < files.length; i++) {
        var file = files[i];
        this.fileAdd(file);
      }
    },
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>

<style>
</style>
