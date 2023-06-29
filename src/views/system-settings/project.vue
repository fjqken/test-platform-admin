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
        :data="tableData.slice((pageInfo.currentPage-1)*pageInfo.pageSize,pageInfo.currentPage*pageInfo.pageSize)"
        stripe
        style="width: 100%"
        :height="tableH"
      >
        <el-table-column
          prop="project_name"
          label="项目名称"
          width="180"
        />
        <el-table-column
          prop="create_time"
          label="创建日期"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
      <el-pagination
        :current-page="pageInfo.currentPage"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.pageTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { project_list } from '@/api/project'

export default {
  name: 'Project',
  data() {
    return {
      tableH: 600,
      tableData: [
      ], // 表格数据
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        pageTotal: 20
      }
    }
  },
  computed: {},
  created() {
    project_list({
      create_user_id: 1,
      project_name: '汕尾 '
    }).then(response => {
      console.log(response.data)
      this.tableData = response.data
    })
    this.pageInfo.pageTotal = this.tableData.length
  },
  mounted() {
  },

  methods: {
    handleSizeChange(val) {
      this.pageInfo.pageSize = val
    },
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val
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
