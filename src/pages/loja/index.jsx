import { Layout } from "antd"

import "./style.css"

const { Content } = Layout

export const Loja = () => {
    return (
        <Content
            style={{ padding: '0 48px' }}>
            <div className="content">
                <h1>Loja</h1>
            </div>
        </Content>
    )
}