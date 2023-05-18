<template>
  <div>
    <div class="head" style="width: 95%;margin-top: 50px;margin-left: 1%">
      <el-select v-model="value" placeholder="选项1" style="float: left;width: 10%;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input v-model="input3" placeholder="请输入内容" class="input-with-select" style="width: 90%" />
      <el-button style="color: #1f2d3d">确定</el-button>
    </div>
    <div class="editor-container" style="width: 95%;margin-left: 1%;margin-top: 2px">
      <json-editor ref="jsonEditor" v-model="json_value" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'

export default {
  name: 'InterfaceDebugging',
  components: { JsonEditor },
  data() {
    return {
      options: [{
        value: 'GET'
      }, {
        value: 'POST'
      }, {
        value: 'PUT'
      }, {
        value: 'DELETE'
      }
      ],
      value: 'GET',
      input3: '',
      select: '1111',
      json_value: {}
    }
  }
}
</script>

<style scoped>
.head{
  display: flex;
}
</style>
