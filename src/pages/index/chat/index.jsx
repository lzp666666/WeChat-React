import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
class chat extends Component {
    onLeftClick(){
        this.props.history.push('/index')
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={()=>this.onLeftClick()}
                    icon={<Icon type="left" />}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >晴空</NavBar>
            </div>
        )
    }
}
export default chat