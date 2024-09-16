import { Layout } from "antd"

import "./style.css"

const { Content } = Layout

export const Sobre = () => {
    return (
        <Content
            style={{ padding: '0 48px' }}>
            <div className="content">
                <h1>Sobre</h1>
            </div>
        </Content>
    )
}