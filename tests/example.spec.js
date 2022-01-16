import HelloWorld from "main/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("aaa", () => {
  test("should ", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "hello,vue3",
      },
    });
    expect(wrapper.text()).toBe("hello,vue3");
  });
});
