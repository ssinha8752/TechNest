import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

class SearchBar extends React.Component{

    
      
    render(){
        const onSearch = value => console.log(value);
        return <div style={{margin:"10px 0px 0px"}}>
            <Space direction="vertical">
    <Search placeholder="Search" onSearch={onSearch} enterButton size='medium'/>
  </Space>
        </div>
    }
}

export default SearchBar

