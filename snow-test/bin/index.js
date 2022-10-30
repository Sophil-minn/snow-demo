#!/usr/bin/env node

const lib = require('snow-test-lib');

const argv = require('process').argv;

console.log('today is  2022/10 28');

console.log(argv);
const command = argv[2];
// console.log(lib[command](), 'command');

if (lib[command]) {
  lib[command]()
} else {
  console.log('请输入命令');
}


// 实现参数解析 --version 和 init --name

if (command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '');
  // console.log(globalOption, 'globalOption');
  if (globalOption === "version" || globalOption === "V") {
    console.log(globalOption, "版本号： 1.1.0 - 10/28");
  }
}