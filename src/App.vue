<template>
  <div id="app">
    <share :items="items"></share>
  </div>
</template>

<script>
//  import share from 'src/lib/component/Share.vue'
export default {
  name: 'app',
  data () {
    return {
        items:{
            url:window.location.href,
            title:"这是Title",
            abstract:"这是摘要内容",
            image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509453770632&di=94e8998bb96a178a33356a7af93f252d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D1eb10354f1f2b211f0238d0da2e90f4d%2F9213b07eca806538025ec1349ddda144ad348264.jpg"
        }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
