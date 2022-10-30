####  脚手架本地调试的两种方法：
1、通过在脚手架当前目录下输入npm i -g 脚手架名称，可以软链到本地的脚手架目录
2、在当前脚手架目录下，直接命令输入npm link
脚手架拥有分包的情况下进行本地调试（假设有test跟test-lib文件夹，test-lib作为分包）：
1、先在test-lib的package.json修改main属性指向正确的入口文件，为了test的index.js能正确require进来
2、在test的package.json添加dependencies，版本号要对应上test-lib的版本号（因为test-lib还没发布到npm上，所以不能用npm i -S snow-test-lib）

3、在test-lib目录下输入npm link创建一个软链接，使它在本地的node的node_modules下面存在这个包
4、在test目录下面输入npm link test-lib创建软链接

npm link 进行本地调试（创建软链接）， 效果与npm publish一样， 不需要频繁发布;
本地调试步骤
1、在lib内创建软链接，npm link
2、在使用的包内， 引用软链接 npm link xxx(lib)
3、由于lib未发布到npm上，需要手动指定dependencies
调试脚手架的方式
发布，在本地安装的方式
npm publish
npm i -g ying-test
本地调试
npm link