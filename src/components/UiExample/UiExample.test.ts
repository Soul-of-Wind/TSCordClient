import {mount} from '@vue/test-utils'
import {it, expect, describe} from 'vitest'
import UiExample from "@/components/UiExample/UiExample.vue";

describe('UiExample', () => {
    it('display message', () => {
        const wrapper = mount(UiExample, {
            props: {
                msg: 'Hello world'
            }
        })

        expect(wrapper.text()).toContain('Hello world')
    })
})
