### 更新记录

详见: [CHANGELOG.md](https://github.com/YDMua/yid-react-project/blob/master/CHANGELOG.md)

### 1.克隆项目

```
	git clone https://github.com/YDMua/yid-react-project.git
```

### 2.安装依赖

```
	npm i
```

### 3.运行项目

```
 npm start
```

### 自动生成模块文件

```
npm run temp Test

或者

npm run temp components/Test
```

> 如果只输入模块名，如： npm run temp Test，则默认在 src/containers/views 下面生成

> 注意： 只能在有上一级目录存在的前提下使用， 比如 components 下面没有 Home 的文件夹，npm run temp components/Home/Test 则会报错，不能生成模块
