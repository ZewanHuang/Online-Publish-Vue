<template>
  <div>
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button circle icon="el-icon-plus" @click="addArt"></el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="作者id">
              <span>{{ props.row.writerid }}</span>
            </el-form-item>
            <el-form-item label="作者">
              <span>{{ props.row.writer }}</span>
            </el-form-item>
            <el-form-item label="文章名">
              <span>{{ props.row.article_name }}</span>
            </el-form-item>
            <el-form-item label="关键词">
              <span>{{ props.row.keyword }}</span>
            </el-form-item>
            <el-form-item label="摘要">
              <span >{{ props.row.abstract }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="作者"
        prop="writer"
        width="80px">
      </el-table-column>
      <el-table-column
        label="文章名"
        prop="article_name"
        width="300px">
      </el-table-column>
      <el-table-column
        label="关键词"
        prop="keyword"
        width="250px">
      </el-table-column>
      <el-table-column
        label="提交时间"
        prop="subtime"
        width="100px">
      </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openArt">查看文章</el-button>

        <!-- <el-form>
          <el-form-item>
              <el-select  placeholder="请选择活动区域" multiple v-model="citys">
                    <el-option v-for="item in cities" :label="item.label" :value="item.value" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
        </el-form> -->

          <el-dropdown @command="handleCommand">
              <el-button type="primary" size="mini" style="margin: 10px">
                分配<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="王大明">王大明</el-dropdown-item>
              <el-dropdown-item command="王二明">王二明</el-dropdown-item>
              <el-dropdown-item command="王三明">王三明</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin: 20px">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Published_art",
  data() {
    return {
      input: ''
    }
  },
  data() {
        return {
          tableData: [{
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          }, {
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          },{
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          },{
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          }, {
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          },{
            writerid:'19373000',
            writer: '易灿',
            subtime:'2021/6/10',
            article_name:'图谱建模基础下海量网络流量的数据挖掘',
            keyword:'图谱建模 流量识别 数据挖掘',
            abstract:'随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
          },]
        }
      },
      // data() {
      //   return {
      //     cities: [
      //         {value: 'Beijing',label: '北京'}, 
      //         {value: 'Shanghai',label: '上海'}, 
      //         {value: 'Nanjing',label: '南京'}, 
      //         {value: 'Chengdu',label: '成都'}, 
      //         {value: 'Shenzhen',label: '深圳'}, 
      //         {value: 'Guangzhou',label: '广州'}
      //     ],
      //   }
      //       },
  methods:{
    openArt(){
      alert("打开文章" );
    },
    addArt(){
      alert("打开添加文章表单" );
    },
      handleCommand(command) {
        this.$message('设置'+ command+'为审稿人');
      }
  }
}

</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  input{
  font-size: 12px;
  width: 650px;
  height: 15px;
  border: 1px solid black;
  border-radius: 20px;
  outline: none;
  padding: 10px;
  left: 0;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>