<template>
    <div class="list">
        <com-header :childMethod="getListData"></com-header> 
        <!-- 导航栏跳转页面 -->
        <div class="indexContainer clearfix">
            <div class="list-container container clearfix">
             <ul class="clearfix">
                 <router-link tag="li" :to="'/DetailsPage/' + item.id" v-for="(item,index) in listData" :key="index">
                    <router-link tag="a" :to="'/DetailsPage/' + item.id"  class="info-img">
                        <img :src="'https://www.115z.com/' + item.cover_img" alt="">
                    </router-link>
                    <div class="list-info">
                        <a href="#" ><i>{{item.data_class}}</i>{{item.title}}</a>
                        <div class="info-time">
		        			发布时间：{{item.publish_time}} <i></i>
                             投稿作者：{{item.nick}}	<i></i>		
                              围观人数：{{item.week_views}}	<i></i>	 点赞：{{item.month_views}}次
                        </div>
                        <div class="info-intro">{{item.info}}</div>
                        <div class="info-button">
                            <router-link tag="a" :to="'/DetailsPage/' + item.id" >立即查看</router-link>
                        </div>
                    </div>
                </router-link>
             </ul>
             <!-- 上下分页 -->
             <el-pagination
                 @current-change="handleCurrentChange"
                 :current-page="currentPage1"
                 :pager-count="11"
                 :page-size="pageSize"
                 layout="prev, pager, next"
                 :total=total>
             </el-pagination>
          </div>
        </div>
         <com-footer></com-footer>
    </div>
    
</template>

<script>
import ComHeader from "../common/ComHeader"
import ComFooter from "../common/ComFooter"
export default {
    name:"list",
    data(){
        return{
            listData:{},
            pageCount:0,
            pageSize:20,
            total:0,
            currentPage1:1
        }
    },
     components:{
       ComHeader,
       ComFooter,
    },
    mounted(){
        this.getListData()
    },
    watch:{
        // 监听传过来的id是否变化，发生变化重新发送请求
       '$route'(to, from){
           if(this.$route.params.id){
                 this.getListData()
           }
       }
    },
    methods:{
        getListData(){
                 let page = this.currentPage1
                 let limit = this.pageSize
                  let listUrl = 'https://www.115z.com/u_api/Type_list_page.html?type_id=' + this.$route.params.id 
                  + '&app_key=aa5df25a43369803d9ef26851fb7d717'
                  this.$axios.get(listUrl,{
                      params:{
                          limit:limit,
                          page:page
                      }
                  })
                  .then(res=>{
                    //   console.log(res)
                      this.listData = res.data.data.list;
                      this.total = res.data.data.count
                  })
                 .catch(err => {
                     this.$message.error('数据请求失败~请联系站长');
                 })
         },
            //当前页改变时
            handleCurrentChange(val) {
                this.currentPage1 = val;
                this.getListData();
            }
    }
}
</script>

<style lang="less" scoped>
.indexContainer{
    margin-top: 55px;
    width: 100%;
    background-color: #ccc;
}
.list-container{
    background-color: #fff;
    margin-top: 70px;
    margin-bottom: 15px;
    >ul{
        padding: 45px 45px;
        >li{
            height: 166px;
             margin-bottom: 44px;
            >.info-img{
                display: inline-block;
                width: 202px;
                height: 159px;
                float: left;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            >.list-info{
                width: 863px;
                height: 166px;
                float: right;
                >a{
                    display: inline-block;
                    font-size: 19px;
                    margin-top: -4px;
                    color: #333;
                    line-height: 30px;
                    display: block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    >i{
                        display: inline-block;
                        font-size: 14px;
                        font-style: normal;
                        border: 1px solid #ff8623;
                        margin-right: 12px;
                        padding: 0px 11px;
                        border-radius: 18px;
                        height: 25px;
                        line-height: 25px;
                        color: #ff8623;
                        position: relative;
                        top: -1.5px;
                    }
                }
                >.info-time{
                    height: 30px;
                    line-height: 30px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    font-size: 15px;
                    color: #a7a7a7;
                    margin: 10px 0;
                    >i{
                        display: inline-block;
                        padding: 5px;
                    }
               }
               >.info-intro{
                   line-height: 25px;
                    font-size: 15px;
                    height: 25px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    color: #545454;
               }
               >.info-button{
                       margin-top: 22px;
                        height: 41px;
                        line-height: 41px;
                        width: 100%;
                        >a{
                            display: inline-block;
                            width: 170px;
                            height: 43px;
                            text-align: center;
                            float: right;
                            border: 1px solid #e8e8e8;
                            color: #9a9a9a;
                            font-size: 15px;
                            border-radius: 3px;
                        }
               }
            }
            &:nth-last-child(1){
                margin-bottom: 0;
            }
        }
    }
    /deep/.el-pagination{
       padding: 0 130px;
       padding-bottom: 40px;
    }
    /deep/.el-pager li{
        width: 64px;
        height: 42px;
        line-height: 42px;
         border: 1px solid #e2e2e2;
    }
    /deep/.el-icon-arrow-right,
    /deep/.el-icon-arrow-left{
         font-size: 30px;
         margin-top: 5px;
    }
}
</style>

