<template>
    <div>
       <el-checkbox v-model="checkAll" @change="handleCheckAllChange" style="margin:20px;">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities"  v-for="(item,index) in cities" :key="index">
            <el-checkbox :label="item.id" @change="checked => checkChildFuc(checked,index,item.id)">{{item.name}}</el-checkbox>
            <div style="padding-left:20px;margin:10px">
                <el-checkbox v-for="items in item.children" :key="items.id" :label="checkAll?item.id:items.id">
                    {{items.name}}
                </el-checkbox>
            </div>
        </el-checkbox-group>
    <div>{{checkedCities}}</div>
  </div>
</template>
<script>
  let arr = [{
    id:1,
    name:'1大类',
    children:null // 不一定存在值
   },{
    id:2,
    name:'2大类',
    children:null // 不一定存在值
   },{
    id:3,
    name:'3大类',
    children:[{ // 不一定存在值
     id:31,
     name: '31'
    },{
     id:32,
     name: '32'
    }]
   },{
    id:4,
    name: '4大类',
    children:[{ // 不一定存在值 如果有值保留值最多的
     id:41,
     name: '41'
    },{
     id:42,
     name: '42'
    }]
   }]
  export default {
    data() {
      return {
        checkAll: false,
        checkChild: [],
        checkedCities: [],
        cities: arr,
      };
    },
    methods: {
        handleCheckAllChange(val) {
            //this.checkedCities = val ? arr : [];
            this.checkedCities=[];
            if(val){
                arr.map((item,index) => {
                    this.checkedCities.push(item.id);
                })
            }
            else{
                this.checkedCities=[];
            }
        },
        checkChildFuc(val,index,selfId){
            if(arr[index].children == null){
                return;
            }
            if(val){
                arr[index].children.map((item,index) => {
                    let io = this.checkedCities.indexOf(item.id);
                    if(io > -1) {
                         this.checkedCities.splice(io, 1);
                    }
                    this.checkedCities.push(item.id)
                })
            }
            else{
               arr[index].children.map((item,index) => {
                    let io = this.checkedCities.indexOf(item.id);
                    if(io > -1){
                        this.checkedCities.splice(io, 1);
                    }
               }) 
            }
        }
    }
    
  };
</script>

<style lang="scss" scoped>

</style>