# Change Log

## 0.2.0 (Tue Nov 19 2019)

-   修复`react`与`react-dom`版本不一致导致的问题
-   测试库迁移到`@testing-library/react"`

## 0.1.22 (Wed Sep 04 2019)

-   清除控制台打印, 优化代码警告

## 0.1.21 (Wed Jul 10 2019)

-   修改默认样式, 默认不显示控制按钮, 鼠标移入才显示
-   增加`showControl`属性， 来一直显示控制按钮

## 0.1.2 (Sun May 12 2019)

-   修复无法清空值的问题

## 0.1.1 (Sun May 12 2019)

-   更新依赖

## 0.1.0 (Sun May 05 2019)

-   优化受控`value`性能
-   增加回退, 输入的值不是合法数值，则回退到上一次正确的输入

## 0.0.9 (Sun May 05 2019)

-   更新`xy-manual-tools`, 修复编译 demo

## 0.0.8 (Mon Apr 29 2019)

-   从`storybook`换成`xy-manual-tools`来管理 demo

## 0.0.7 (Fri Apr 26 2019)

-   更新依赖

## 0.0.6 (Wed Apr 24 2019)

-   修复受控时, 从外部设置值无效的 BUG

## 0.0.5 (Wed Apr 24 2019)

-   转发 ref

## 0.0.4 (Wed Apr 24 2019)

-   修复`value`为`null`时的处理, 避免输入框内显示 null 字符串

## 0.0.3 (Fri Apr 19 2019)

-   修复`step`配合`max`或`min`时, 再接近的时候自增， 自减不可用
-   增加单元测试

## 0.0.2 (Fri Apr 19 2019)

-   实现`formatter`属性格式化为字符串和`parser`属性还原格式化字符串
-   实现`precision`属性保留精度
-   实现`max`,`min`属性控制最大,最小
-   实现`step`属性控制步长

## 0.0.1 (Thu Apr 18 2019)

-   初始化项目
