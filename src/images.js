// for CSS image url resolving
const imageContext = require.context('.', true, /^\.\/.*\.(jpe?g|png|gif)$/i);
export { imageContext };
