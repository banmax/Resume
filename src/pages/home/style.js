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