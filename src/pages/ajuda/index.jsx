import { Layout } from "antd"
import { Button } from "../../components/ui/button"

import "./style.css"

const { Content } = Layout

export const Ajuda = () => {
    return (
        <Content
            style={{ padding: '0 48px' }}>
            <div className="content">
                <h1>Ajuda</h1>
            </div>
            <div>
                <Button>Click me</Button>
            </div>
        </Content>
    )
}