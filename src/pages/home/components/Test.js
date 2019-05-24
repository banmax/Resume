import React, { PureComponent } from 'react';
import { ComponentsBox, ComponentsTitle, TestWrapper } from '../style';

class Test extends PureComponent {
  render() {
    return (
      <TestWrapper>
        <ComponentsBox />
        <ComponentsTitle>
          <div>个人能力</div>
        </ComponentsTitle>
        <p>掌握Web前端开发基本技能，熟悉W3C标准、页面布局架构、前端语义化等，注重代码可维护性，轻微代码洁癖。</p>
        <p>对UI框架 Bootstrap、jQuery类库、HTML5、CSS3、响应式布局、es6语法等有着较熟练的实践。</p>
        <p>熟练掌握Ajax，熟练使用JSON进行数据传输。</p>
        <p>能够使用 Webpack / Gulp 进行前端工程的构建。</p>
        <p>了解一些后端语言，如：java、python。</p>
        <p>熟练掌握node.js的应用，</p>
        <p>熟练使用photoshop等切图工具,会常见的UI技巧。</p>
        <p>熟悉Vue、vue-router、vuex状态管理和基于 vue 的 界面框架iview的使用</p>
        <p>熟悉React、react-router、react-redux状态管理和基于react的UI框架（antd）的使用</p>
      </TestWrapper>
    )
  }
}

export default Test;