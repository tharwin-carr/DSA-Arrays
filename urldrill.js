function urlify(str) {
    return str.trim().replace(/\s/g, '%20');
}

console.log(urlify('www.thinkful.com / this is a test'))