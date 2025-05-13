import { Layout, Menu, MenuProps } from 'antd'
import { useState } from 'react'
const { Sider } = Layout
import { FaBasketShopping, FaChildReaching, FaClipboardList } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]
const Siderbar = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => {
        navigate(`/${key}`)
      }
    } as MenuItem
  }
  const items: MenuItem[] = [
    getItem('Hàng hóa', '', <FaBasketShopping />),
    getItem('Khách hàng', 'Khach-hang', <FaChildReaching />),
    getItem('Phiếu bán', 'Phieu-ban', <FaClipboardList />)
  ]

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
    </Sider>
  )
}
export default Siderbar
