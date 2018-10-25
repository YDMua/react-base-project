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

### 疑惑，求协助

想在不暴露webpack配置的情况下，使用react-hot-loader实现局部刷新的效果，对config-overrides.js的配置不是很清楚，有兴趣尝试或者已经实现的小伙伴，希望可以分享下。
