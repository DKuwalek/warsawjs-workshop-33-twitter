// @ts-check
import { assert } from "chai";
import { mount } from "@vue/test-utils";
import TweetList from '@/components/tweet-list';
import  App  from '@/components/app';
// import nock from "nock";


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
    it('should fetch tweets via HTTP request', async () => {
        const wrapper = mount(App, {
            stubs: {
                Tweet : true
            }
        });
        console.log("wrapper.vm");
        // console.log(wrapper.vm);
        // podkreśla poniewaz wrapper jest prostego typu komponentu Vue
        assert.isFunction(wrapper.vm.fetchTweets);

        const ft = wrapper.vm.fetchTweets;

        // const response = await ft();

        // console.log(response); //

        // nock("http://localhost:3000")
        //     .get('/tweets')
        //     .reply(200, [
        //         { id: 'id', body: 'body' }
        //     ]);

        // const response = await ft();
        // console.log(response); // JSON
        // assert.lengthOf(response, 1);


    });
});