// const { TestWatcher } = require('@jest/core');
const fs = require('fs')
const path = require('path');
// const articles = require('../client/articles')
// const { hasUncaughtExceptionCaptureCallback } = require('process');
const html = fs.readFileSync(path.resolve(__dirname, '../client/articles.html'), 'utf8');

describe('articles.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    describe('head', () => {
        test('it has a title', () => {
            const head = document.querySelector('head')
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('Streethub - Articles')
        })
    })
    describe('header', () => {
        test('it has a body', () => {
            const body = document.querySelector('body')
            expect(body).toBeTruthy();
        })
    })
})

// describe('articles js functions', () => {
//     describe('Post modal functions', () => {
//         beforeEach(() => {
//             document.documentElement.innerHTML = '<button id="newPostButton" href="#newPost">New post</button>'
//             global.newPostButton = document.querySelector('#newPostButton')
//         })

//         test('openPostModal opens the modal where a post can be written', () => {
//             const modal = articles.openPostModal();
//             expect(modal.tagName).toBe('div');
//         })
//     })
// })