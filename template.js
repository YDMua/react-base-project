/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs')

const dirName = process.argv[2]

if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('事例： npm run tep test')
  process.exit(0)
}

const dirArrs = dirName.split('/')
// 如果只有一个目录结构，则默认在src/containers/views下面生成

let directory = `containers/views/${dirName}`
let fileName = dirName
if (dirArrs.length > 1) {
  directory = dirName
  fileName = dirArrs[dirArrs.length - 1]
}

const titleCase = str => {
  const array = str.toLowerCase().split()
  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i][0].toUpperCase() + array[i].substring(1, array[i].length)
  }
  const string = array.join(' ')
  return string
}
const lowerCase = str => {
  const string = str.toLowerCase().split()
  return string
}
const indexTep = `import * as React from 'react'
import {IProps} from './type'
import './style.scss'; 
class ${titleCase(fileName)} extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 数据挂载之后 可以操作数据和dom 
  }

  componentWillUnmount() {
    // 数据挂载之前 可以操作数据 不可以操作dom
  }

  render() {
    return (
      <div className="${lowerCase(fileName)}-page">
        ${fileName}
      </div>
    )
  }
}
export default ${titleCase(fileName)}
`
// scss文件模版
const scssTep = ``;

const typeTep = `export interface IProps {}
export interface IState {}
`

fs.mkdirSync(`./src/${directory}`) // mkdir $1 创建文件夹
process.chdir(`./src/${directory}`) // cd $1 进入该目录

fs.writeFileSync('index.tsx', indexTep)
fs.writeFileSync('style.scss', scssTep)
fs.writeFileSync('type.d.ts', typeTep)

console.log(`模版${fileName}已创建`)

process.exit(0)