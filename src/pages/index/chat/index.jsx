import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
class chat extends Component {
    render() {
        return (
            <NavBar
            mode="dark"
            leftContent="晴空"
            rightContent={[
                <Icon key="1" type="ellipsis" />,
            ]}
        ></NavBar>
        )
    }
}
export default chat