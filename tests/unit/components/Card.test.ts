import axios from 'axios';
import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card', () => {

    it('will render given content', () => {
        const wrapper = shallowMount(Card, {
            slots: {
                default: '<button/>',
            },
        });

        expect(wrapper.findAll('button')).toHaveLength(1);
    });

    it('will render a title', () => {
        const title = 'test title';
        const wrapper = shallowMount(Card, {
            propsData: { title },
        });
        expect(wrapper.text()).toContain(title);
        expect(wrapper.findAll('.card-title')).toHaveLength(1);
    });

    it('won\'t render a title if none is given', () => {
        const wrapper = shallowMount(Card);
        expect(wrapper.findAll('.card-title')).toHaveLength(0);
    });
});
