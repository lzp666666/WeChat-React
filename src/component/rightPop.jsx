import React, { Component } from 'react';
import '../assets/css/rightPop.scss'
import { Icon, Popover } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <Icon type="search" size={src} />;
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
    onSelect = (opt) => {
        console.log(opt.props.value);
        this.props.clickVisible(false)
   };
    render() {
        let { keyPop, visible } = this.props
        return (
            <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={visible}
            overlay={
                this.menuList[keyPop].map((item,index)=>
                (<Item key="4" key={index} icon={myImg(item.icon)} value={index} data-seed="logId">{item.name}</Item>)
                )}
            onSelect={this.onSelect}
            align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
            }}

        >
            <div style={{
                height: '100%',
                padding: '0 15px',
                marginTop:'-70px',
                marginRight: '5px',
                display: 'flex',
                alignItems: 'center',
            }}
            >
            </div>
        </Popover>
        )
    }
}
export default rightPop