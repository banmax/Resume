import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 2,
    title: '手绘',
    imgUrl:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '没读过这三本书，不要说你曾见过世间险恶',
    desc: '今天推荐三本书给大家，这三本书看完后都会让人坐下来静静思考人生的意义。 不管是在努力拼搏，还是迷茫焦虑，这些书都能够到你一些启发。 希望新的一年...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4712375-232ba78e3c797ae2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '没读过这三本书，不要说你曾见过世间险恶',
    desc: '今天推荐三本书给大家，这三本书看完后都会让人坐下来静静思考人生的意义。 不管是在努力拼搏，还是迷茫焦虑，这些书都能够到你一些启发。 希望新的一年...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4712375-232ba78e3c797ae2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '没读过这三本书，不要说你曾见过世间险恶',
    desc: '今天推荐三本书给大家，这三本书看完后都会让人坐下来静静思考人生的意义。 不管是在努力拼搏，还是迷茫焦虑，这些书都能够到你一些启发。 希望新的一年...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4712375-232ba78e3c797ae2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
    return state;
  }
}