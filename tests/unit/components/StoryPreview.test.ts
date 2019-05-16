import axios from 'axios';
import { shallowMount } from '@vue/test-utils';
import StoryPreview from '@/components/StoryPreview.vue';

describe('StoryPreview', () => {
    const story = {
        title: 'test title',
        user: 'test user',
        time: new Date().getTime() / 1000,
    };

    it('will render info for a story preview', () => {
        const wrapper = shallowMount(StoryPreview, {
            propsData: { story },
        });
        const expectedDateString = new Date(story.time * 1000).toLocaleString();
        expect(wrapper.text()).toContain(story.title);
        expect(wrapper.text()).toContain(story.user);
        expect(wrapper.text()).toContain(expectedDateString);
    });
});
