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
  &.slide-enter {
    width: 10em;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 15em;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 10em;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 3.5em;
  width: 15em;
  padding: 0 1.25em;
  box-shadow: 0 0 .5em rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 1.25em;
  margin-bottom: 1em;
  line-height: 1.25em;
  font-size: .875em;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: .8125em;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 1.25em;
  padding: 0 .3125em;
  margin-right: .625em;
  margin-bottom: .9375em;
  font-size: .75em;
  border: .0625em solid #ddd;
  color: #787878;
  border-radius: .1875em;
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