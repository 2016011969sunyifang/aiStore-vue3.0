<template>
  <div>
    请输入姓名：
    <input type="text" v-model="name" />
  </div>
  <div>
    请输入age：
    <input type="text" v-model="age" />
  </div>
  当前输入为：<span>{name:{{ name }},age:{{ age }}}</span>
  <h1>{{ msg }}12344533334</h1>
  转换结果为：<span>{{ yamlStr }}</span>
</template>

<script>
// import YAML from "yaml";
import yaml from "js-yaml";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    let obj = { name: "zhoumaolin1" };
    let c = this.json2yaml(JSON.stringify(obj));
    console.log(c);
  },
  data() {
    return {
      count: 0,
      name: "",
      age: "",
      yamlStr: "",
    };
  },
  watch: {
    name: {
      immediate: true,
      handler() {
        console.log("123123");
        this.yamlStr = this.json2yaml(
          JSON.stringify({ name: this.name, age: this.age })
        );
      },
    },
    age: {
      immediate: true,
      handler() {
        console.log("123123");
        this.yamlStr = this.json2yaml(
          JSON.stringify({ name: this.name, age: this.age })
        );
      },
    },
  },
  methods: {
    json2yaml(jsonStr) {
      try {
        return {
          data: yaml.dump(JSON.parse(jsonStr)),
          error: false,
        };
      } catch (err) {
        return {
          data: "",
          error: true,
        };
      }
    },
  },
};
</script>
