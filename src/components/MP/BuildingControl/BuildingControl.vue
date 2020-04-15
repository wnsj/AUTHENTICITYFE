<template>
  <div class="wraper">
    <div class="col-md-12 col-lg-12 main-title">
      <h1 class="titleCss">楼盘管理</h1>
    </div>
    <div class="row newRow" style="margin-top: 1%">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
          <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">类型</p><span
          class="sign-left">:</span>
        </div>
        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
          <bt></bt>
        </div>
      </div>

      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
          <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">户型</p><span
          class="sign-left">:</span>
        </div>
        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
          <bht></bht>
        </div>
      </div>
			
			<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
			  <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style="padding: 0; line-height: 34px;">
			    <p class="end-aline col-md-11 col-lg-11" style="padding-right:5px; padding-left:20px;">时间</p><span
			    class="sign-left">:</span>
			  </div>
			  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
			    <datePicker></datePicker>
			  </div>
			</div>
    </div>

  </div>
</template>

<script>
  import datePicker from 'vue2-datepicker'
  import axios from 'axios'
	import bt from '../../common/BildType.vue'
	import bht from '../../common/BuildHorseType.vue'
  export default {
    components: {
      datePicker,
			bt,
			bht,
    },
    data() {
      return {
        searchForm: {
          startTime:'',
          endTime:''
        },
        buildTypeList: [],
        buildHorseTypeList:[]
      };
    },
    name: "BuildingControl",
    methods: {
      // 楼盘类型下拉
      buildingType() {
        let url = 'http://localhost:8080/buildingTypeBean/getAllBuildingType'
        axios.get(url).then((res) => {
            if (res.data.retCode === '0000') {
              this.buildTypeList = res.data.retData;
            } else {
              alert(res.retMsg)
            }
          }
        ).catch(function (error) {
          console.log(error);
        });
      },
      // 楼盘户型
      horseType() {
        let url = 'http://localhost:8080/buildingHorseTypeBean/getAllHorseType'
        axios.get(url).then((res) => {
            if (res.data.retCode === '0000') {
              this.buildHorseTypeList = res.data.retData;
            } else {
              alert(res.retMsg)
            }
          }
        ).catch(function (error) {
          console.log(error);
        });
      }
    },
    created: function () {
      this.horseType()
      this.buildingType()
    }
  }
</script>

<style>

</style>
