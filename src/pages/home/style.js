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

export const TopicWrapper = styled.div `
  overflow: hidden;
  padding: 1.25em 0 .75em 0;
  margin-left: -0.625em;
  border-bottom: .0625em solid #dcdcdc;
`;

export const TopicItem = styled.div `
  float: left;
  height: 2em;
  line-height: 2em;
  margin-left: 1.5em;
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
    font-size: 1.125em;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 1.5em;
    font-size: .75em;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div `
  margin: 1.875em 0;
  width: 17.5em;
`;

export const RecommendItem = styled.div `
  width: 17.5em;
  height: 3.125em;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div `
  width: 17.4em;
  border: 1px solid #dcdcdc;
  border-radius: .25em;
  height: 17.5em;
  line-height: 17.5em;
  text-align: center;
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
  cursor: pointer;
`;