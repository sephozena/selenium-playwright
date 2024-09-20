module.exports = { addTimestamp };
const addTimestamp = (username) => {
    const timestamp = new Date().getTime();
    return `${username}_${timestamp}`;
};
