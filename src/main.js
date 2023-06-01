export {};

Hub.use(({ env }) => {
    const { AFRAME } = env.window;

    AFRAME.registerComponent('hello-world', {
        init() {
            console.log(`Hello, World!`, this);
        },
    });
});
