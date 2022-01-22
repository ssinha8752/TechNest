import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, UserOutlined, SettingOutlined, DribbbleOutlined, AuditOutlined,VideoCameraAddOutlined, HomeOutlined } from '@ant-design/icons';
import { ABOUT_ME, ILLUMINATED_MIND, MIND_AND_MATTER, REVIEW, PODCAST } from './Data';
import 'antd/dist/antd.css';
import SearchBar from './SearchBar';

const { SubMenu } = Menu;

class Header extends React.Component {
  state = {
    current: 'Home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className='header'>
          <div className='header_menu'>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" >
        <Menu.Item key="Home" icon={<HomeOutlined />}></Menu.Item>
        <SubMenu key="AboutMe" icon={<UserOutlined />} title="About Me">
        <Menu.ItemGroup>
            {
              ABOUT_ME.map(((items) =>
                <Menu.Item key={items.key}>
                    {items.value}
                </Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="IlluminateMind" icon={<DribbbleOutlined />} title="Illuminate Mind">
          <Menu.ItemGroup>
            {
              ILLUMINATED_MIND.map(((items)=>
              <Menu.Item key={items.key}>{items.value}</Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="Review" icon={<AuditOutlined />} title="Review">
          <Menu.ItemGroup>
            {
              REVIEW.map(((items)=>
              <Menu.Item key={items.key}>{items.value}</Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="MindAndMatter" icon={<SettingOutlined />} title="Mind and Matter">
          <Menu.ItemGroup>
            {
              MIND_AND_MATTER.map(((items)=>
              <Menu.Item key={items.key}>{items.value}</Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="Podcasts" icon={<VideoCameraAddOutlined />} title="Podcasts">
          {
            PODCAST.map(((items)=>
            <Menu.ItemGroup title={items.title}>
              <Menu.Item key={items.key}>{items.value}</Menu.Item>
            </Menu.ItemGroup>
            ))
          }
        </SubMenu>
        <Menu.Item key="alipay" icon={<MailOutlined/>}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </Menu.Item>
        <Menu.Item>
        <div className='header_searchBar'>
              <SearchBar/>
        </div>
        </Menu.Item>
        </Menu>
        </div>
      </div>
      
    );
  }
}

export default Header