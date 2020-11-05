import React, { Component } from 'react';
import '../assets/css/rightPop.scss'
import { Modal, Icon } from 'antd-mobile';


class rightPop extends Component {
    constructor(props) {
        super(props)
        this.menuList = {
            index: [
                { name: '发起群聊', icon: 'check-circle' },
                { name: '添加好友', icon: 'check-circle' },
                { name: '扫一扫', icon: 'check-circle' },
                { name: '收付款', icon: 'check-circle' }
            ]
        }
    }
    render() {
        let { keyPop, visible } = this.props
        return (
            <Modal
                maskClosable
                visible={visible}
                onClose={()=>{
                    // this.props.visible=false
                    //如果改变父组件传过来的值？visible
                }}
                animationType="slide-down"
                transparent
            >
                {
                    this.menuList[keyPop] && this.menuList[keyPop].map((item, index) => {
                        return (
                            <div style={{ height: '100%' }} key={index}>
                                <div className="text-vertical">
                                    <Icon type={item.icon}></Icon>
                                    <div>{item.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </Modal>
        )
    }
}
export default rightPop