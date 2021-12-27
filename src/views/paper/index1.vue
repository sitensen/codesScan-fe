<template>


  <!--添加操作-->
  <div style="margin-top: 30px;margin-left: 30px">


    <!--    -->
    <a-button style="margin-bottom: 20px" type="primary" @click="onclickShow">上传代码</a-button>

    <a-table :columns="columns" :data-source="tableData">
      <a slot="code" slot-scope="text,record,index ">{{ index + 1 }}</a>
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="status" slot-scope="text">
        <span v-if="text=='1'">
          <a-badge status="processing"/>
          <span>处理中</span>
         </span>
        <span v-if="text=='2'">
          <a-badge status="success"/>
          <span>处理成功</span>
         </span>
        <span v-if="text=='3'">
          <a-badge status="error"/>
          <span>处理失败</span>
         </span>
      </template>


      <span slot="action" slot-scope="text, record">
         <a v-if="record.status==2" style="color: #1890ff" href="https://bj-good-design-test.oss-cn-beijing.aliyuncs.com/unioncontent/file_1640483184564.pdf">查看报告</a>
         <a v-if="record.status!==2" >查看报告</a>
          <a-divider type="vertical"/>
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
             <a style="color: #1890ff">删除</a>
          </a-popconfirm>
      </span>
    </a-table>


    <a-modal
      title="上传代码"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >

      <!--代码上传-->
      <!--      <a-form-model-->
      <!--        ref="ruleForm"-->
      <!--        :model="form"-->
      <!--        :rules="rules"-->
      <!--        :label-col="labelCol"-->
      <!--        :wrapper-col="wrapperCol"-->
      <!--      >-->
      <!--        <a-form-model-item label="类型" prop="category">-->
      <!--          <a-select v-model="form.category" placeholder="" disabled>-->
      <!--            <a-select-option value="python">-->
      <!--              python-->
      <!--            </a-select-option>-->
      <!--            <a-select-option value="JAVA">-->
      <!--              JAVA-->
      <!--            </a-select-option>-->
      <!--          </a-select>-->
      <!--        </a-form-model-item>-->




      <a-upload-dragger
        name="file"
        :multiple="true"
        method="get"
        action="/file/upload"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox"/>
        </p>
        <p class="ant-upload-text">
          单击或拖动文件到此区域以上传
        </p>
        <p class="ant-upload-hint">
          请上传代码
        </p>
      </a-upload-dragger>
      <!--      </a-form-model>-->

    </a-modal>

  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      labelCol: {span: 6},
      wrapperCol: {span: 14},
      form: {
        category: 'python',
      },

      rules: {},


      columns: [
        {
          title: '编码',
          dataIndex: 'code',
          key: 'code',
          scopedSlots: {customRender: 'code'},
        },
        {
          title: '语言',
          dataIndex: 'category',
          key: 'category',
          width: 80,
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          scopedSlots: {customRender: 'status'},
        },
        {
          title: '文件名',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: {customRender: 'name'},
        },
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: "center",
          fixed: "right",
          width: 160,
          scopedSlots: {customRender: 'action'},
        }

      ],


      tableData: [
        {
          key: '1',
          name: 'John Brown',
          category: "python",
          status: 1,
          date: "2021-10-11 10:02:01",
        },
        {
          key: '2',
          name: 'Jim Green',
          status: 2,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '3',
          name: 'Joe Black',
          status: 3,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
      ],

    }
  },
  methods: {


    onClickShow() {


    },

    handleOk() {


    },

    handleChange() {


    },

    handleCancel() {
      this.visible = false;
    },

    onclickShow() {
      this.visible = true;
    },


    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
