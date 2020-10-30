import React, { Component } from 'react';
import './index.css'
import {withRouter} from 'react-router-dom' 
import { TabBar } from 'antd-mobile';
class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Index',
            hidden: false,
        };
        this.renderRouter=this.renderRouter.bind(this)
    }
    renderRouter(key){
        console.log('/'+key)
        this.props.history.push('/'+key.toLowerCase())
    }
    render() {
        return (
            <div  style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item
                        title="微信"
                        key="Index"
                        selected={this.state.selectedTab === 'Index'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Index',
                            });
                            this.renderRouter('Index')
                        }}
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        badge={1}
                        data-seed="logId"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selected={this.state.selectedTab === 'MailList'}
                        title="通讯录"
                        key="MailList"
                        onPress={() => {
                            this.setState({
                                selectedTab: 'MailList',
                            });
                            this.renderRouter('MailList')
                        }}
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="发现"
                        key="Friend"
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Friend',
                            });
                            this.renderRouter('Friend')
                        }}
                        selected={this.state.selectedTab === 'Friend'}
                        dot
                    >
                      
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我"
                        key="my"
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                            this.renderRouter('My')
                        }}
                        selected={this.state.selectedTab === 'my'}
                    >
                        
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default withRouter(Bottom)