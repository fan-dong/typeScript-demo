
# TypeScript

>TypeScript 学习demo

## 什么是TypeScript？

>TypeScript是一种由微软开发的自由和开源的编程语言，它是JavaScript的一个超集，扩展了JavaScript的语法。

## TypeScript的特性

```

1、字符串变量的反撇号 ``
2、参数类型声明
3、函数参数
4、generator函数
5、析构函数
6、箭头表达式、
7、循环
8、class、泛型
9、接口
10、 类型定义文件（*.d.ts）

```
## VScode 自动编译TypeScript的方式
 
### 首先进入nodejs里安装typescript

```
npm install -g typescript
```
### 创建tsconfig.json文件

```
tsc --init
```
### 打开tsconfig.json文件修改和删除相应配置（如果想快速修改配置，请复制下列配置）

```
{
  "compilerOptions": {
   "target": "es5",
   "noImplicitAny": false,
   "module": "amd",
   "removeComments": false,
   "sourceMap": false,
   "outDir": "src/js"//你要生成js的目录
  }
}
```
### 创建src目录，打开vscode新建文件，保存到src下扩展名为.html的文件，然后在编辑器里代码区输入此快捷方法，快速创建html布局代码

```
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script type="text/javascript" src="js/test.js"></script><!--自行添加js引入-->
</head>
<body>
     
     
</body>
</html>
`
```
