# GruntForWeb
一个基于**grunt**的web前端自动化项目模板(和**yoman**类似,但不可定制), 包含常用功能(less编译, js,css压缩, 项目文件夹导出, 代码规范检查,等等)

## Gruntfile.js 结构 ##

- ***watch*** -- 监视html,js,css文件改变,执行对应任务  
- ***connect*** -- 本地web服务器搭建
- ***jshint*** -- js代码规范检查 
- ***less*** -- less文件编译
- ***cssmin*** -- css压缩
- ***uglify*** -- js压缩
- ***copy*** -- 导出项目时用到的***copy***任务(复制文件和文件夹)
- ***regexReplace*** -- 文件内容替换(php模板可能会用到)

----------

- ***grunt server*** -- 本地web服务器,***--allow-remote***表示远程可访问
- ***grunt export*** -- 导出任务(发布项目代码到export文件夹下)

## 文件夹结构 ##

- **app** 是项目源代码存放目录
	- **js** 是脚本存放目录,使用***bower install***安装的脚本存放在js/lib下
	- **images** 是图片存放目录
	- **less** 是less文件存放目录
	- **css** 是运行less任务后由less文件生成的css文件存放的目录
- **node_modules** 是grunt插件目录
- **export** 是运行***grunt export***后项目发布的代码

## 注意事项 ##
1. 本自动化环境需要依赖**nodejs**,没有请先安装好
2. 初次使用需要全局安装(***npm install - g***) **grunt-cli**、**bower**
3. 请手动修改**bower.json**, 自己决定哪些js库是项目所需要的, 然后运行***bower install***
4. 如果有需要可以修改**.jshintrc**来改变js代码规范约定
5. 需要使用其他grunt插件,请使用***npm install --save-dev*** 
