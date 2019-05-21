import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 60em;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 1em;
  padding-top: 1.875em;
  width: 39em;
  .banner-img {
    width: 39em;
    height: 16em;
  }
`;

export const HomeRight = styled.div`
  width: 15em;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 1.25em 0 .75em 0;
  margin-left: -0.625em;
  border-bottom: .0625em solid #dcdcdc;
`;

export const TopicItem = styled.div`
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
