const { response } = require("express");

const articleContent = document.getElementById('postInputBox')
const submitButton = document.getElementById('postBtn')


submitButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.value)
})
