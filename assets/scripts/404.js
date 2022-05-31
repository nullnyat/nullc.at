const options = {
    duration: 4.8,
};
let demo = new countUp.CountUp('count', 100, options);
if (!demo.error) {
    demo.start();
} else {
    console.error(demo.error);
}
