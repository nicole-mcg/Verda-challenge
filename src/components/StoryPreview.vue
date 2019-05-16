<template>
    <card>
        <div class="story-preview">
            <router-link :to="storyLink" class="story-preview-title">
                {{ story.title }}
            </router-link>
            <div class="story-preview-info">
                {{ story.user }}
                <span class="story-preview-info-date">
                    {{ postDate }}
                </span>
            </div>
        </div>
    </card>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

export interface IStory {
    id: number;
    title: string;
    points?: number | null;
    user?: string | null;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url?: string;
    domain?: string;
}

@Component({
    components: {
        Card,
    },
})
export default class StoryPreview extends Vue {
    @Prop() private story!: IStory;

    // computed
    get storyLink() {
        if (!this.story || !this.story.id) {
            return '';
        }
        return `/story/${this.story.id}`;
    }

    // computed
    get postDate() {
        if (!this.story || ! this.story.time) {
            return '';
        }
        return new Date(this.story.time * 1000).toLocaleString();
    }
}

</script>

<style lang="less" scoped>

.story-preview {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0;
    text-align: left;


    &-title {
        padding: 16px 32px;
        font-size: 1.5em;
        flex-grow: 5;
        
        color: inherit;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            filter: brightness(125%);
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-width: 250px;
        padding: 16px;
        font-size: 1.25em;

        background-color: rgba(0, 0, 0, 0.05);
        cursor: default;

        &-date {
            font-size: 0.75em;
        }
    }
}

</style>