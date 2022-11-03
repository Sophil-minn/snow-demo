#! /usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');
const dedent = require('dedent');
console.log('hideBin: ', hideBin(process.argv));

const arg = hideBin(process.argv);
const cli = yargs(arg);

yargs(arg)
  .usage('Usage: snow--test  [command] <options>')
  .demandCommand(1, 'A command is required. Pass --help to see all available commands and options')
  .alias("h", "help")
  .alias("m", "version")
  .alias("e", "debug")
  .wrap(cli.terminalWidth())
  .epilogue(dedent`  1111

    23324

    534253
      9080
  `)
  .options(
    {
      debug: {
        type: 'boolean',
        describe: "Boostrap debug mode",
        alias: 'd'
      }
    }
  )
  .option('registry', {
    type: 'string',
    describe: 'Define global registry',
    alias: 'r'
  })
  .group(['debug'], 'Dev options')
  .group(['registry'], 'Extra options')
  .strict()
  .argv;

// 1 调用yargs 构造函数 
// 2 并传入参数列表 
// 3 进行解析
// 4 调用argv

// 完成整个yargs初始化信息

// https://www.npmjs.com/package/yargs