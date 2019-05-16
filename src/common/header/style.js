import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  // display: -webkit-flex; /* Safari */
  display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  height: 3.5em;
  border-bottom: 0.0625em solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`;
  // position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 6.25em;
  height: 3.5em;
  margin-left: 1em;
  background: url(${logoPic});
  background-size: 100% 100%;
`;

export const Nav = styled.div`
  // width: 60em;
  width: 70%;
  height: 100%
  padding-right: 6.25em;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 3.5em;
  padding: 0 0.9375em;
  font-size: 1.0625em;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    width: 10em;
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 15em;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 10em;
  }
  .iconfont {
    position: absolute;
    right: 0.3125em;
    bottom: 0.3125em;
    width: 1.875em;
    line-height: 1.85em;
    border-radius:0.9375em;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 10em;
  height: 2.75em;
  margin-top: 0.5625em;
  margin-left: 1.875em;
  padding: 0 1.875em 0 1.25em;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 1.375em;
  background: #eee;
  font-size: 0.875em;
  color: #666;
  &::placeholder {
    color:#999;
  }
  &.focused {
    width: 15em;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 3.5em;
`;

export const Button = styled.div`
  float: right;
  margin-top: 0.5625em;
  margin-right: 0.6em;
  padding: 0 0.5625em;
  line-height: 2.375em;
  border-radius: 1.1875em;
  border: 0.0625em solid #ec6109;
  font-size: 0.875em;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;