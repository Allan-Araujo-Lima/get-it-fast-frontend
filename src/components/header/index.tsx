'use client'

import { useState } from 'react';

import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import {
    ChevronDown,
    Menu,
    X,
    PlayCircle,
    Phone,
    ChartPie,
} from 'lucide-react';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPie },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: ChartPie },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: ChartPie },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: ChartPie },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ChartPie },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircle },
    { name: 'Contact sales', href: '#', icon: Phone },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold">
                        <span className="sr-only">Your Company</span>
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
                                Product
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
                            <div className="border-t mt-4 pt-4 grid gap-2">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                                    >
                                        <item.icon className="h-4 w-4 text-gray-500" />
                                        {item.name}
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
                <DialogContent className="fixed inset-0 bg-white p-4">
                    <DialogHeader>
                        <DialogTitle>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-xl font-bold">
                                    <img
                                        alt="Logo"
                                        src="/assets/Logomarca.svg"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    className="p-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-6 space-y-4">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="product">
                                <AccordionTrigger>Product</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 pl-4">
                                        {[...products, ...callsToAction].map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block text-sm font-medium hover:underline"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <a href="#" className="block text-sm font-medium hover:underline">
                            Features
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline">
                            Marketplace
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline">
                            Company
                        </a>
                        <a href="#" className="block text-sm font-medium hover:underline">
                            Log in
                        </a>
                    </div>

                </DialogContent>
            </Dialog>
        </header>
    );
}
