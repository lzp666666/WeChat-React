import React, { Component } from 'react';
import '../assets/css/rightPop.scss'
import {Modal, Icon} from 'antd-mobile';


class rightPop extends Component {
    render() {
        return (
            <Modal
                visible={true}
                transparent
                maskClosable={true}
            >
                <div style={{ height: '100%' }}>
                    <div className="text-vertical">
                        <Icon type={'check-circle'}></Icon>
                        <div>发起群聊</div>
                    </div>
                </div>
                <div style={{ height: '100%' }}>
                    <div className="text-vertical">
                        <Icon type={'check-circle'}></Icon>
                        <div>添加好友</div>
                    </div>
                </div>
                <div style={{ height: '100%' }}>
                    <div className="text-vertical">
                        <Icon type={'check-circle'}></Icon>
                        <div>扫一扫</div>
                    </div>
                </div>
                <div style={{ height: '100%' }}>
                    <div className="text-vertical">
                        <Icon type={'check-circle'}></Icon>
                        <div>收付款</div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default rightPop