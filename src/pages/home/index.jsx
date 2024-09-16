import { useEffect, useState } from 'react';
import { Divider, Layout } from 'antd';
import axios from 'axios';

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { cn } from "../../lib/utils"
import "./style.css"

const { Content } = Layout;

export const Home = () => {

    const [presentation, setPresentation] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:7777/get_data")
            .then((response) => {
                const data = response.data;
                setPresentation(data["body"])
            })
            .catch((e) => {
                console.error(e);
            })
    }, [])

    return (
        <Content>
            <div className='container'>
                <div className='intrudution'>
                    <h1>Bem-vindo(a) GetItFast!</h1>
                    <p>Somos uma empresa especializada em venda de alimentos com a data de validade próxima. Venha conhecer um pouco mais de nossa história!</p>
                </div>
                <div className='information'>
                    <Card className='card'>
                        <CardHeader>
                            <CardTitle>O que fazemos?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Recebos anúncios de vendedores com produtos próximos a data de validade e disponibilizamos para os nossos clientes com até 90% de desconto.</p>
                        </CardContent>
                    </Card>
                    <Card className='card'>
                        <CardHeader>
                            <CardTitle>Qual a finaliade?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Promover produtor de qualidade apropriados para o consumo rápido, além da diminuição de itens descartados por não conseguirem ser vendidos dentro de sua validade.</p>
                        </CardContent>
                    </Card>
                    <Card className='card'>
                        <CardHeader>
                            <CardTitle>Há segurança?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Os produtos são <b>sempre</b> vendidos antes de sua data de validade informada pelo fabricante, desta forma, não há nenhum tipo de risco para o seu consumo.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Content>
    )
}