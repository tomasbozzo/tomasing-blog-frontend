import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Posts from './Posts/Posts';
import Post from './Post/Post';

import './Blog.css'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <Header />
                <Route path="/blog/" exact component={Posts} />
                <Route path="/blog/:category/:slug" exact component={Post} />
                <Footer />
            </div>
        );
    }
}

export default Blog;