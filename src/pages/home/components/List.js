import React, { PureComponent } from 'react';
import { ComponentsBox, ComponentsTitle, ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
      <ComponentsBox />
      <ComponentsTitle>
        <div>实战项目</div>
      </ComponentsTitle>
        {
          list.map((item, index) => {
            return (
              <div key={index}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                    <a className="src" href={item.get('src')}>{item.get('src')}</a>
                  </ListInfo>
                </ListItem>
              </div>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>查看更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);
