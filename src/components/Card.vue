<template>
    <div class="card">
        <div v-if="title" class="card-title">
            {{ title }}
        </div>
        <div class="card-content">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StoryPreview extends Vue {
    @Prop() private title?: string;
}

</script>


<style lang="less" scoped>

.card {
    margin: 16px auto;
    border-radius: 8px;
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.25);
    cursor: default;
    max-width: 80vw;

    &-title {
        padding: 16px;
        border-radius: 8px 8px 0 0;
        font-size: 2em;
        background-color: #BBBBBB;
        text-align: center;
    }
    &-content {
        display: flex;
        flex-direction: row;
    }
}

@media only screen and (max-width: 600px) {
    .card {
        border-radius: 0;
        margin-right: 0;
        margin-left: 0;
        min-width: 100%;
    }
}

</style>