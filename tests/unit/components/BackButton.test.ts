import { shallowMount } from '@vue/test-utils';
import BackButton from '@/components/BackButton.vue';

describe('BackButton', () => {

    it('will render info for a story preview', () => {
        const wrapper = shallowMount(BackButton);
        expect(wrapper.text()).toEqual('⮜ Back');

        const routerLink = wrapper.find({ name: 'RouterLink' });
        expect(routerLink.props()).toHaveProperty('to', '/');
    });

});
