<template>
    <div>
    <h1>数据列表</h1>
    <ul style="list-style:none">
    <!-- :key=""  v-for循环对数据排序，key条件，不重复。添加key提升排序效率-->
        <li v-for="item in lists" :key="item.uid">
           编号： {{item.uid}} - 名称：{{item.name}}
        </li>
    </ul>
    <h2></h2>
    <h2></h2>
    
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lists:[
                    {uid:1,name:"tom"},
                    {uid:2,name:"jerry"},
                    {uid:3,name:"kity"}
                ]
            }
        }
    }
</script>
<style scoped>
    
</style>