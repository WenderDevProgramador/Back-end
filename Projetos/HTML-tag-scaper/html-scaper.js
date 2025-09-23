const { match } = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const readline = require('node:readline')

const scapeHtmlSpecialCharacters = (text) => {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '&':
                return '&amp;'
            default:
                return match
        }

    })
}

const scapeHtmlFile = (inputFilePath, outputFilePath) => {

}

const askFilePath = (question) => {
    
}