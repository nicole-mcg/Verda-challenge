<template>
    <router-link to="/" class="app-button back-button">
        ⮜ Back
    </router-link>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StoryPreview extends Vue {
}

</script>


<style lang="less" scoped>

.back-button {
    position: absolute;
    top: 16px;
    left: 16px;
}

</style>