'use client'

import { useState } from 'react';

import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Dialog, DialogContent } from '../ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import {
    ChevronDown,
    Menu,
    X,
    ChartPie,
    Zap,
    Edit,
    Trash
} from 'lucide-react';

const products = [
    { name: 'Produtos', description: 'Encontre o produto ideal para você', href: '/produto', icon: ChartPie },
    { name: 'Novo produto', description: 'Cadastre seus produtos e encontre clientes rapidamente', href: '/produto/novo', icon: Zap },
    { name: 'Editar produto', description: 'Edite as informações dos seus produtos já cadastrados', href: '#', icon: Edit },
    { name: 'Excluir produto', description: 'Exclua produtos ', href: '#', icon: Trash },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold">
                        <span className="sr-only">Logo da Empresa</span>
                        <img
                            alt="Logo"
                            src="/assets/Logomarca.svg"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2">
                                Produto
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72">
                            <div className="grid gap-4">
                                {products.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded"
                                    >
                                        <item.icon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <a href="#" className="text-sm font-medium hover:underline">
                        Features
                    </a>
                    <a href="#" className="text-sm font-medium hover:underline">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-medium hover:underline">
                        Company
                    </a>
                </div>
                <div className="hidden lg:flex">
                    <a href="#" className="text-sm font-medium hover:underline">
                        Log in →
                    </a>
                </div>
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </nav>

            <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DialogContent className="fixed mt-24 inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex justify-between items-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                alt="Logo"
                                src="/assets/Logomarca.svg"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 space-y-4">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="product">
                                <AccordionTrigger>Produto</AccordionTrigger>
                                <AccordionContent className="space-y-2 pl-4">
                                    {products.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block text-sm font-medium hover:underline"
                                            onClick={() => setMobileMenuOpen(false)} // Fecha o menu após clicar
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <a href="#" className="block text-sm font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                            Features
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                            Marketplace
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                            Company
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline" onClick={() => setMobileMenuOpen(false)}>
                            Log in
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    );
}
