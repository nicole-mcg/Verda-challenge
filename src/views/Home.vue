<template>
    <div class="home">


        <div class="loader" v-if="loading"/>
        <div v-else-if="loadError" class="error">
            <div>
                Error loading stories
            </div>
            <div class="app-button" @click="loadStories">
                Retry
            </div>
        </div>
        <div v-else>
            <div class="home-title">
                Top 25 Stories from <a href="https://news.ycombinator.com/">Hacker News</a>
            </div>
            <div class="home-title-note">
                Or <router-link to="/cats">check out some cats</router-link> instead!
            </div>
            <div v-for="story in stories" :key="story.id">
                <story-preview :story="story"/>
            </div>
                
            <card title="Raw JSON">
                <pre class="home-json">
                    {{ jsonString }}
                </pre>
            </card>
        </div>
    </div>
</template>

<script lang="ts">

import axios from 'axios';

import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import StoryPreview, { IStory } from '@/components/StoryPreview.vue';
import Card from '@/components/Card.vue';

@Component({
    components: {
        StoryPreview,
        Card,
    },
})
export default class HomePage extends Vue {
    @Provide() private stories: IStory[];
    @Provide() private loading: boolean;
    @Provide() private loadError: boolean;

    constructor() {
        super();
        this.stories = [];
        this.loading = false;
        this.loadError = false;
    }

    public mounted() {
        this.loadStories();
    }

    public loadStories() {
        this.loadError = false;
        this.loading = true;
        axios.get('https://api.hnpwa.com/v0/news/1.json').then((result) => {
            this.stories = result.data;
            this.loading = false;

            if (this.stories.length > 25) {
                this.stories.length = 25;
            }
        }).catch((err: any) => {
            console.error(err);
            this.loadError = true;
            this.loading = false;
        });
    }

    get jsonString() {
        return JSON.stringify(this.stories, undefined, 4).trim();
    }
}

</script>

<style lang="less">

.home {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 16px);
    padding-top: 16px;
    
    &-title {
        text-align: center;
        font-size: 2em;
        margin-top: 16px;

        &-note {
            text-align: center;
        }
    }

    &-json {
        padding: 32px;
        overflow: auto;
    }
}

</style>

