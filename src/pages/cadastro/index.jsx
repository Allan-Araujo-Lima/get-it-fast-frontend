import { Layout } from "antd"

import "./style.css"

const { Content } = Layout

export const Cadastro = () => {
    return (
        <Content
            style={{ padding: '0 48px' }}>
            <div className="content">
                <h1>Cadastro</h1>
            </div>
        </Content>
    )
}