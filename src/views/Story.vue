<template>
    <div class="story-page">
        <back-button/>
        <div v-if="loading" class="loader"/>
        <div v-else-if="loadError" class="error">
            <div>
                {{ loadError }}
            </div>
            <div class="app-button" @click="loadStory">
                Retry
            </div>
        </div>
        <card v-else title="Info on Story">
            <div class="story-page-card-fields">
                <div class="story-page-card-field">
                    Field Names
                </div>
                <div v-for="field in fieldNames" :key="field" class="story-page-card-field">
                    {{ field }}
                </div>
            </div>
            <div class="story-page-card-values">
                <div class="story-page-card-value">
                    Values
                </div>
                <div v-for="field in fieldNames" :key="field" class="story-page-card-value">
                    {{ storyInfo[field] }}
                </div>
            </div>
        </card>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

import { IStory } from '@/components/StoryPreview.vue';
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
    @Provide() private storyInfo: IStory | null;
    @Provide() private loading: boolean;
    @Provide() private loadError: string | null;

    constructor() {
        super();
        this.storyInfo = null;
        this.loading = true;
        this.loadError = null;
    }

    public mounted() {
        this.loadStory();
    }

    public loadStory() {
        if (this.storyId === undefined) {
            this.loadError = 'No story selected, please pick one from the home page';
            return;
        }

        this.loadError = null;
        this.loading = true;
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.storyId}.json`).then((result) => {
            this.storyInfo = result.data;
            this.loading = false;
        }).catch((err: any) => {
            console.error(err);
            this.loadError = 'Error loading story';
            this.loading = false;
        });
    }

    get fieldNames() {
        return Object.keys(this.storyInfo || {});
    }
}
</script>

<style lang="less">
.story-page {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 16px);
    padding-top: 16px;

    &-card {

        &-fields, &-values {
            width: 33%;
        }


        &-field, &-value {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 1em;
            padding: 0 16px;
            
            height: 46px;
            font-size: 20px;
            overflow: auto;

            &:first-child {
                font-weight: bold;
                font-size: 1.25em;
                justify-content: center;
                background-color: #EEEEEE; 
                        
            }
        }

        &-values {
            border-radius: 0 0 8px 0;
            flex-grow: 5;
            
        }

        &-value {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        &-field {
            background-color: rgba(0, 0, 0, 0.05);            
            padding-right: 32px;
            justify-content: flex-end;

            background-color: #EEEEEE;

            &:not(:first-child) {
                font-weight: bold;
            }

            &:last-child {
                border-radius: 0 0 0 8px;
            }
        }
    }
}
</style>
