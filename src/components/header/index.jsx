import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import LogoMarca from "../../assets/LogoMarca.svg";

import { MENU_LINKS } from './menu-links';
import "./style.css"

const { Header } = Layout

const items = MENU_LINKS.map((item) => ({
    item,
    label: <Link className='link' to={`${item.path}`}>{item.label}</Link>
}))

export const HeaderExp = () => {
    return (
        <Layout className='app-header'>
            <Header>
                <Link to='/'>
                    <img className="header-img" src={LogoMarca} /></Link>
                <Menu
                    theme='dark-blue'
                    mode='horizontal'
                    items={items}
                >
                </Menu>
            </Header>
        </Layout>
    )
}