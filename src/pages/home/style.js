import styled from 'styled-components';

export const HomeWrapper = styled.div `
  overflow: hidden;
  width: 60em;
  margin: 0 auto;
`;

export const HomeRight = styled.div `
  float: right;
  margin-right: 1em;
  padding-top: 1.875em;
  width: 39em;
  .banner-img {
    width: 39em;
    height: 16em;
  }
`;

export const HomeLeft = styled.div `
  width: 17.5em;
  float: left;
`;

export const ComponentsBox = styled.div `
  float: right;
  width: 80%;
  border-top: .2em solid #29282e;
`;

export const ComponentsTitle = styled.div `
  display: block;
  margin-left: 1em;
  width: 20%;
  height: 2.5em;
  padding: 0;
  color: #fff;
  line-height: 2.5em;
  background-color: #29282e;
  transform: skewX(-45deg);
  div {
    width: 100%;
    height: 2em;
    font-size: 1.25em;
    text-align: center;
    line-height: 2em;
    transform: skewX(45deg);
  }
`;

export const TopicWrapper = styled.div `
  overflow: hidden;
  padding: 0 0 .75em 0;
  margin-left: -0.625em;
`;

export const TopicItem = styled.div `
  float: left;
  height: 2em;
  line-height: 2em;
  margin-left: 2em;
  margin-top: 2em;
  margin-bottom: 1em;
  padding-right: .625em;
  background: #f7f7f7;
  font-size: .875em;
  color: #000;
  border: .0625em solid #dcdcdc;
  border-radius: .25em;
  .topic-pic {
    display: block;
    float: left;
    width: 2em;
    height: 2em;
    padding-right: .625em;
  }
`;

export const TestWrapper = styled.div `
  width: 100%;
  margin-bottom: 1.5em;
  p {
    text-indent: 2em;
    line-height: 1.5em;
    font-size: .9em;
    margin-top: 1em;
  }
`;

export const RewardWrapper = styled.div `
  width: 100%;
  height: 14em;
  margin-bottom: 1.5em;
  p {
    text-indent: 2em;
    line-height: 1.5em;
    font-size: .9em;
    margin-top: 1em;
  }
  .reward-left {
    float: left;
  }
  .reward-right {
    float: right;
  }
`;

export const ListItem = styled.div `
  overflow: hidden;
  padding: 1.25em 0;
  border-bottom: .0625em solid #dcdcdc;
  .pic {
    display: block;
    width: 7.8125em;
    height: 6.25em;
    float: right;
    border-radius: .625em;
  }
`;

export const ListInfo = styled.div `
  width: 31em;
  float: left;
  .title {
    line-height: 1.75em;
    font-size: 1em;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 1.5em;
    font-size: .75em;
    color: #999;
  }
  .src {
    line-height: 1.5em;
    font-size: .85em;
    text-decoration:none;
    color: #000;
  }
  a:hover {
    text-decoration:underline;
    color: #C20C0C;
  }
`;

export const RecommendWrapper = styled.div `
  margin: 1.875em 0 0 0;
  width: 17.5em;
  height: 25em;
  background-color: #29282e;
  h1 {
    text-align: center;
    margin-top: .25em;
    font-size: 2em;
    font-weight: bold;
    color: #fff;
  }
  p {
    text-align: center;
    font-size: .75em;
    margin-top: 1em;
    color: #fff;
  }
`;

export const RecommendItem = styled.div `
  width: 100%;
  height: 17.5em;
  background: url(${(props) => props.imgUrl});
  background-size: 100% 100%;
`;

export const WriterWrapper = styled.div `
  width: 100%;
  height: 59em;
  // line-height: 17.5em;
  background-color: #29282e;
`;

export const WriterName = styled.div `
  height: 3em;
  line-height: 3em;
  padding-left: 2em;
  color: #fff;
  border-bottom: 0.5px solid #999;
  background-color: #0078bd;
  i {
    font-size: 1.5em;
    margin-right: .5em;
  }
  .icon-right {
    float: right;
    padding-right: .5em;
  }
`;

export const WriterItem = styled.div `
  height: 4em;
  line-height: 4em;
  padding-left: 2em;
  color: #fff;
  border-bottom: 0.5px solid #999;
  i {
    font-size: 1.5em;
    margin-right: .5em;
  }
  .icon-right {
    float: right;
    padding-right: .5em;
  }
  span {
    font-size: .85em;
  }
  .email {
    font-size: .7em;
  }
`;

export const WriterBottom = styled.div `
  margin-top: 15em;
  height: 4em;
  line-height: 4em;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
`;

export const LoadMore = styled.div `
  width: 100%;
  height: 2.5em;
  line-height: 2.5em;
  margin: 1.875em 0;
  background-color: #ec6149;
  text-align: center;
  border-radius: 1.25em;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div `
  position: fixed;
  right: 6.25em;
  bottom: 6.25em;
  width: 3.75em;
  height: 3.75em;
  line-height: 3.75em;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 1.875em
  cursor: pointer;
`;