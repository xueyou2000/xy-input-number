| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-input-number.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-input-number.svg?style=flat-square)

[![xy-input-number](https://nodei.co/npm/xy-input-number.png)](https://npmjs.org/package/xy-input-number)

# xy-input-number

数字输入框组件

## 安装

```bash
# yarn
yarn add xy-input-number utils-hooks classnames @fortawesome/fontawesome-svg-core fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import InputNumber from "xy-input-number";
ReactDOM.render(<InputNumber />, container);
```

## API

### 通用属性

| 属性               | 说明                                         | 类型                                                  | 默认值 |
| ------------------ | -------------------------------------------- | ----------------------------------------------------- | ------ |
| disabled           | 是否禁用                                     | boolean                                               | false  |
| precision          | 保留小数点精度                               | number                                                | 无     |
| max                | 最大值                                       | number                                                | 无     |
| min                | 最小值                                       | number                                                | 无     |
| step               | 步长                                         | number                                                | 无     |
| formatter          | 输入框展示值的格式化                         | (value: number/string) => string                      | 无     |
| parser             | 从 formatter 里转换回来, 配合 formatter 使用 | (value: string) => string                             | 无     |
| value              | 输入框值                                     | number                                                | 无     |
| defaultValue       | 输入框默认值                                 | number                                                | 无     |
| placeholder        | 占位符文本                                   | string                                                | 无     |
| autoFocus          | 自动焦点                                     | boolean                                               | 无     |
| showControl        | 是否一直显示控制按钮                         | boolean                                               | 无     |
| onFocus            | 输入框焦点事件                               | (e: React.FocusEvent<HTMLInputElement>) => void       | 无     |
| onBlur             | 输入框失去焦点事件                           | (e: React.FocusEvent<HTMLInputElement>) => void       | 无     |
| onKeyDown          | 键盘事件                                     | (e: React.KeyboardEvent<HTMLInputElement>) => void    | 无     |
| onChange           | 输入框 change 事件                           | (value: number) => void                               | 无     |
| onCompositionStart | 开始输入中文                                 | (e: React.CompositionEvent<HTMLInputElement>) => void | 无     |
| onCompositionEnd   | 输入中文完毕                                 | (e: React.CompositionEvent<HTMLInputElement>) => void | 无     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-input-number is released under the MIT license.
