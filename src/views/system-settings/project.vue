<template>
  <div>
    <div>
      <div style="height: 52px" class="head">
        <div>
          <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
        <div>
          <el-button type="primary">新增项目</el-button>
        </div>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
      <div class="pagination">
        <el-pagination
          v-if="total > 0"
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }], // 表格数据
      total: 0, // 总记录数
      pageSize: 10, // 每页显示记录数
      currentPage: 1 // 当前页码
    }
  },
  mounted() {
    // 加载默认第一页数据
    // this.loadData(1)
  },
  methods: {
    loadData(page) {
      // 模拟异步加载数据
      setTimeout(() => {
        const start = (page - 1) * this.pageSize
        const end = start + this.pageSize
        const data = []
        for (let i = start; i < end; i++) {
          data.push({
            name: `用户${i + 1}`,
            age: Math.floor(Math.random() * 50) + 20,
            gender: Math.random() > 0.5 ? '男' : '女'
          })
        }
        // this.tableData = data
        this.total = 100 // 总记录数
        this.currentPage = page // 当前页码
      }, 500)
    },
    handleCurrentChange(page) {
      this.loadData(page)
    }
  }
}
</script>

<style scoped>
.input-with-select {
  background-color: #fff;
  width: 200px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
