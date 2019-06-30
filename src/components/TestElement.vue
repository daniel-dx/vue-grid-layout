<template>
  <div class="test-element">
    <span >{{text}}</span>
    <p v-for="item in rows" :key="item">{{item}}</p>
    <div>
      <button @click="add">Add Text</button>
      <button @click="del">Del Text</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.test-element {
  background-color: orange;
}
</style>
<script>
export default {
  name: "TestElement",
  props: {
    text: {
      type: String,
      default: "x"
    }
  },
  data: function() {
    return {
      rows: []
    };
  },
  mounted: function() {
    console.log("### " + this.text + " ready!");
  },
  methods: {
    add() {
      this.$data.rows.push('hi daniel ' + +new Date())
    },
    del() {
      this.$data.rows.pop();
    }
  }
};
</script>