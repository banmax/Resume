import React, { PureComponent } from 'react';
import { WriterWrapper, WriterName, WriterItem, WriterBottom } from '../style';

class Writer extends PureComponent {
  render() {
    return ( 
      <WriterWrapper>
        <WriterName>
          <i className='iconfont'>&#xe607;</i>
            姓名：
          <span>魏 明 亮</span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterName>
        <WriterItem>
          <i className='iconfont'>&#xe60d;</i>
            生日：
          <span>1997.12.03</span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe611;</i>
            学历：
          <span>本科学士学位 </span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe616;</i>
            籍贯：
          <span>辽宁锦州 </span> 
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe61f;</i>
            专业：
          <span>网络工程</span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe611;</i>
            QQ：
          <span>1251430149 </span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe604;</i>
            电话：
          <span>15754102760</span>
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterItem>
          <i className='iconfont'>&#xe6af;</i>
            邮箱：
            <span className='email'>weiml1203@163.com</span>   
          <i className='iconfont icon-right'>&#xe662;</i>
        </WriterItem>
        <WriterBottom>
          My Resume
        </WriterBottom>
      </WriterWrapper>
    )
  }
}

export default Writer;