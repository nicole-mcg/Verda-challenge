<template>
    <div class="cat-page">
        <back-button/>
        <div class="app-button" @click="loadCatImage">
            Load new cat
        </div>
        <div v-if="loading" class="loader"/>
        <div v-else-if="loadError" class="error">
            <div>
                {{ loadError }}
            </div>
            <div class="app-button" @click="loadStory">
                Retry
            </div>
        </div>
        <div v-else>
            <card>
                <img :src="catImageUrl" class="cat-page-image"/>
            </card>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import BackButton from '@/components/BackButton.vue';
import Card from '@/components/Card.vue';

@Component({
    components: {
        BackButton,
        Card,
    },
})
export default class StoryPage extends Vue {
    @Prop() private storyId!: number;
    @Provide() private catImageUrl: string | null;
    @Provide() private loading: boolean;
    @Provide() private loadError: boolean;

    constructor() {
        super();
        this.catImageUrl = null;
        this.loading = false;
        this.loadError = false;
    }

    public mounted() {
        this.loadCatImage();
    }

    public loadCatImage() {
        this.loadError = false;
        this.loading = true;
        axios.get(`https://aws.random.cat/meow`).then((result) => {
            this.catImageUrl = result.data.file;
            this.loading = false;
        }).catch((err: any) => {
            console.error(err);
            this.loadError = true;
            this.loading = false;
        });
    }
}
</script>

<style lang="less">
.cat-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 16px);
    padding-top: 16px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-image {
        border-radius: 16px;
        max-width: 75vw;
        max-height: 75vh;
    }
}
</style>
