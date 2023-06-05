const path = require('path')
const fs = require('fs') //파일 읽고쓰기 라이브러리
const ghpages = require('gh-pages') //배포 라이브러리

const buildDir = path.resolve(__dirname, '../build') //build 디렉토리에 있는 파일들

console.log('------------------------')
console.log('Start deploying...')

ghpages.publish(buildDir, function (err) {
  if (err) {
    console.log('😭😭 Failed to deploy')
    return
  }

  fs.rmSync(buildDir, { recursive: true, force: true }) //build 디렉토리 삭제
  console.log('🚀🚀🚀 Successfully deployed')
})
