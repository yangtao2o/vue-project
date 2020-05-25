<template>
  <div>
    <h2>实战 1：具有数据校验功能的表单组件 —— Form</h2>
    <div>
      <i-form :model="formValidate" :rules="ruleValidate">
        <i-form-item label="用户名" prop="name">
          <i-input v-model="formValidate.name"></i-input>
        </i-form-item>
        <i-form-item label="邮箱" prop="mail">
          <i-input v-model="formValidate.mail"></i-input>
        </i-form-item>
      </i-form>
    </div>
  </div>
</template>

<script>
import iForm from "@/components/form/form.vue";
import iFormItem from "@/components/form/form-item.vue";
import iInput from "@/components/input/input.vue";
export default {
  components: {
    iForm,
    iFormItem,
    iInput,
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
};
</script>
