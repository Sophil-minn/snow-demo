#! /usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');
const dedent = require('dedent');
// console.log('hideBin: ', hideBin(process.argv));

const arg = hideBin(process.argv);
const cli = yargs(arg);

const argv = process.argv.slice(2)
const pkg = require('../package.json');

const context = {
  onceTest: pkg.version,
  moreArgs: '2022 1120'
}

yargs(arg)
  .usage('Usage: $0  [command] <options>')
  .demandCommand(1, 'A command is required. Pass --help to see all available commands and options')
  .alias("h", "help")
  .alias("m", "version")
  .alias("e", "debug")
  .recommendCommands()
  .fail((err, msg) => {
    console.log(err, 'err');
    console.log(msg, 'msg');
  })
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
  .command('init [name]', 'Do init a project', (yargs) => {
    // 1、command格式 init  [name] option 
    // 2  'Do init a project' describe 参数
    // 3、builder函数
    // handler函数
    yargs.option(
      "name", {
        type: 'string', 
        describe: 'Name of Project',

      }
    )
  }, (argv) => {
    console.log(argv)
  })
  .command({
    command: 'List',
    aliases: ['ls', 'la', 'll'],
    describe: 'List Local packages',
    builder: (yargs) => {
  
    },
    handler: (argv) => {
      console.log(argv);
    }
   })
   .parse(argv, context);

// 1 调用yargs 构造函数 
// 2 并传入参数列表 
// 3 进行解析
// 4 调用argv

// 完成整个yargs初始化信息

// https://www.npmjs.com/package/yargsyarn