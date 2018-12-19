<template>
    <div class="navInfo">
        <com-header></com-header> 
        <div class="indexContainer clearfix">
           <com-nav-info></com-nav-info>
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
import ComHeader from "../../common/ComHeader"
import ComNavInfo from "../../common/ComNavInfo"
import ComFooter from "../../common/ComFooter"


export default {
    name:"NavInfo",
    components:{
       ComHeader,
       ComFooter,
       ComNavInfo
    }
}
</script>

<style lang="less" scoped>
.indexContainer{
    margin-top: 55px;
    width: 100%;
    background-color: #ccc;
}
</style>
