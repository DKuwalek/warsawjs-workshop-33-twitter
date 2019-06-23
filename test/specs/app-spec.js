// @ts-check
import { assert } from "chai";
import { mount } from "@vue/test-utils";
import TweetList from '@/components/tweet-list';
import  App  from '@/components/app';


suite('App', () => {
    it('should add 2 and 2', () => {
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);
    });
    it('should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });
    it('XXX should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });
    
});