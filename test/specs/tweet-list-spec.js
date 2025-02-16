import { mount } from "@vue/test-utils";
import { assert } from "chai";

import TweetList from "@/components/tweet-list";
import Tweet from "@/components/tweet";

suite('TweetList', () => {
    it('TweetList should contain Tweet item', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                    {id: '123', body: '345'},
                    {id: '!@#', body: '$%^'}
                ]
            },
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(Tweet));
    });
});