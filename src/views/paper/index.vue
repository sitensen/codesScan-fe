<template>


  <!--添加操作-->
  <div style="margin-top: 30px;margin-left: 8px;margin-right: 8px">


    <!--    -->
<!--    <a-button style="margin-bottom: 20px" type="primary" @click="onclickShow">上传代码</a-button>-->


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

    <a-table :columns="columns" :data-source="tableData" style="margin-top: 10px">
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
         <a v-if="record.status==2" style="color: #1890ff" href="https://static.aminer.cn/js/reader/web/viewer.html?file=https://static.aminer.cn/upload/pdf/1259/1876/1457/5f92ba1691e011edb3573ba0_2.pdf">下载报告</a>
         <a v-if="record.status!==2" >下载报告</a>
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
        // {
        //   title: '语言',
        //   dataIndex: 'category',
        //   key: 'category',
        //   width: 80,
        // },
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
          name: '测试.js',
          category: "python",
          status: 1,
          date: "2021-10-11 10:02:01",
        },
        {
          key: '2',
          name: '测试.js',
          status: 2,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '3',
          name: '测试.js',
          status: 3,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '4',
          name: '测试.js',
          status: 3,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '5',
          name: '测试.js',
          status: 3,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '6',
          name: '测试.js',
          status: 3,
          category: "python",
          date: "2021-10-11 10:02:01",
        },
        {
          key: '7',
          name: '测试.js',
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

    // handleOk() {
    //
    //
    // },

    handleChange() {


    },

    handleCancel() {
      this.visible = false;
    },

    onclickShow() {
      this.visible = true;
    },



    handleOk() {

      const {
        reportType,
        codePath,
        codeType,
        name,
      }=this.form


      const that=this;

      if(!reportType || !codePath || !codeType || !name){
        this.$message.error({
          content: '请填写完整内容',
        });
      }else{

        saveReport(that.form).then(response => {
          that.$message.success({
            content: '添加成功！',
            key: '1',
          });
          that.getList();
        });

      }

    },



    getList() {
      this.listLoading = true;
      fetchList().then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
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
