import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class NavMenu extends React.Component {
    state = {
        collapsed: false,
    }
    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render() {
        return (
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to='/'>
                            <Icon type="appstore" />
                            <span>DashBoard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/calendar'>
                            <Icon type="calendar" />
                            <span>Calendar</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/forms'>
                            <Icon type="inbox" />
                            <span>forms</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="pie-chart" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default NavMenu;