import React, { PureComponent } from 'react';
import { ComponentsBox, ComponentsTitle, RewardWrapper } from '../style';

class Reward extends PureComponent {
  render() {
    return (
      <RewardWrapper>
        <ComponentsBox />
        <ComponentsTitle>
          <div>荣誉奖励</div>
        </ComponentsTitle>
        <p className="reward-left">2017年全国大学生计算机设计大赛</p>
        <p className="reward-right">二等奖*2 三等奖*7</p>
        <p className="reward-left">2018创青春大学生创业挑战赛</p>
        <p className="reward-right">银奖*1 铜奖*2</p>
        <p className="reward-left">2018互联网+创新创业大赛</p>
        <p className="reward-right">金奖*1 铜奖*1</p>
        <p className="reward-left">蓝桥杯全国软件信息技术专业人才大赛辽宁赛区C/C++组</p>
        <p className="reward-right">二等奖</p>
        <p className="reward-left">蓝桥杯全国软件信息技术专业人才大赛设计类logo设计组 </p>
        <p className="reward-right">二等奖</p>
        <p className="reward-left">百度2018优秀设计专员</p>
        <p className="reward-right">百度2018年度标兵 </p>
      </RewardWrapper>
    )
  }
}

export default Reward;