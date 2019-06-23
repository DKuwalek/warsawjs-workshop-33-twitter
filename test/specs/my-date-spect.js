import { mount } from "@vue/test-utils";
import { assert } from "chai";
import { formatDatingo } from "@/helpers/my-date";

suite('myDate', () => {
    it('should return null when passed falsy value', () => {
        let r = formatDatingo("Zła wartość");
        console.log(r);
        assert.isNull(r);
    });

    it('should return proper date when pass UTC Date string', () => {
        const input = "Fri Sep 07 2018 10:53:52 GMT+0200 (Central European Summer Time)";
        const output = '2018';
        assert.match(input, output);
    });
});