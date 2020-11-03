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
                    <div>
                        <Icon type={'check-circle'}></Icon>
                        <span>添加好友</span>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default rightPop