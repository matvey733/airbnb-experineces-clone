import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";

export default function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
            </main>
        </>
    )
}