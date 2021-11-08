import React from 'react';
import Navbar from "./sections/navbar/navbar";
import Cover from "./sections/cover/cover";
import Posts from "./sections/recent-posts/posts";
import Shots from "./sections/instagram-shots/shots";
import Footer from "./sections/footer/footer";
import './theme/main.scss';
import './theme/normalize.scss';

export default function App() {
    return (
        <div className="app">
            <Navbar/>
            <Cover/>
            <Posts/>
            <Shots/>
            <Footer/>
        </div>
    );
}
