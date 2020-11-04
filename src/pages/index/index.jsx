import React, { Component } from 'react';
import './index.scss'
import { NavBar, Icon, Flex } from 'antd-mobile';
import RightPop from '../../component/rightPop';
class index extends Component {
    constructor(props) {
        super(props)
        this.dataList = [
            { name: '晴空', content: '哦，你是个好人', time: '昨天', img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1835174787,1419415699&fm=11&gp=0.jpg' }
        ]
    }
    onClick() {
        this.props.history.push('/chat')
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent="消息(66)"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                ></NavBar>
                {
                    this.dataList.map((item, index) => {
                        return (
                            <Flex key={index} className="userView" onClick={() => this.onClick()}>
                                <div style={{ flex: 2 }} >
                                    <img className="userImg" src={item.img} alt="" />
                                </div>
                                <Flex style={{ flex: 8 }} className="userContent">
                                    <div style={{ flex: 6 }} className="content">
                                        <div>{item.name}</div>
                                        <div>{item.content}</div>
                                    </div>
                                    <div style={{ flex: 2 }} className="time">{item.time}</div>
                                </Flex>
                            </Flex>
                        )
                    })
                }
                <RightPop />
            </div>
        )
    }
}
export default index