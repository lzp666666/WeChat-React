import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import new_user from '../../assets/img/new_user.png'
import qzkh from '../../assets/img/qzkh.png'
import './index.scss'
class B extends Component {
    constructor(props) {
        super(props)
        this.dataList = [
            { img: new_user, title: '新的朋友' },
            { img: qzkh, title: '仅聊天的朋友' }
        ]
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent="通讯录"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" onClick={() => { this.clickVisible(true) }} />,
                    ]}
                ></NavBar>
                <div className="user_view">
                    {
                        this.dataList.map((item, index) =>
                            (
                                <Flex className="user_List" key={index}>
                                    <img alt="" src={item.img}></img>
                                    <div className="text">{item.title}</div>
                                </Flex>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
export default B