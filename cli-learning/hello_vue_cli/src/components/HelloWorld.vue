<template>
    <div>
        <p class="msg"> {{ msg }} </p>
    </div>
</template>
<script>
// 向外暴露一个默认对象
export default {
    data () {
        return {
            msg: 'Hello Vue.js'
        }
    }   
}
</script>
<style>
    .msg {
        color: blue;
        font-size: 30px;
    }
</style>


