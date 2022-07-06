import {Menu} from 'antd';
import {HighlightOutlined, AppleOutlined, GithubOutlined} from '@ant-design/icons'

const items = [
  {key: '1', label: 'List', icon: <HighlightOutlined style={{fontSize: '18px'}}/>, children: [
    {key: 'Monday', label: 'Monday', icon: null}, 
    {key: 'Tuesday', label: 'Tuesday', icon: null}, 
    {key: 'Wednesday', label: 'Wednesday', icon: null}, 
    {key: 'Thursday', label: 'Thursday', icon: null}, 
    {key: 'Friday', label: 'Friday', icon: null}, 
    {key: 'Saturday', label: 'Saturday', icon: null}, 
    {key: 'Sunday', label: 'Sunday', icon: null}, 
  ]
},
  {key: '2', label: 'List', icon: <AppleOutlined style={{fontSize: '18px'}}/>},
  {key: '3', label: 'List', icon: <GithubOutlined style={{fontSize: '18px'}}/>}
];
const MenuTab = () => {
  
  return (
    <Menu
    style={{width: 250, height: 500}}
    mode='inline'
    items={items}
    />
  )
}

export default MenuTab