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
          <el-button type="primary" @click="dialogFormVisible = true">新增项目</el-button>
        </div>
      </div>
      <el-dialog title="新增项目" :visible.sync="dialogFormVisible">
        <el-form ref="add_form" :model="add_form" :rules="rules">
          <el-form-item label="项目名称" :label-width="formLabelWidth" prop="project_name">
            <el-input v-model="add_form.project_name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="项目地址" :label-width="formLabelWidth" prop="address">
            <el-input v-model="add_form.address" autocomplete="off" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('add_form')">确 定</el-button>
        </div>
      </el-dialog>
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
      dialogFormVisible: false,
      add_form: {
        project_name: '',
        address: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        project_name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      formLabelWidth: '120px',
      input3: null,
      tableH: 600,
      tableData: [], // 表格数据
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        pageTotal: 20
      }
    }
  },
  computed: {},
  created() {
    project_list({}).then(response => {
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
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
