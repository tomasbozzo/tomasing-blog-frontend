import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Home.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Home extends Component {

    state = {
        posts: [
            {
                title: 'The title',
                content: 'The content',
                slug: 'first-post'
            },
            {
                title: 'The title 2',
                content: 'The content 2',
                slug: 'second-post'
            }
        ]
    }

    getPosts = () => {
        return this.state.posts.map(p => (
            <div className="row">
                <div class="col-sm-12">
                    <div>
                        <h2><a className="text-body" href={'/' + p.slug}>{p.title}</a></h2>
                        <div>{p.content}</div>
                        <div>
                            <a className="float-right" href={'/' + p.slug}>Read the full story</a>
                            <span>Created by user</span>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <div className="Home container">
                    {this.getPosts()}
                </div>
                <Footer />
                <Route path="/" exact render={() => <h1>Hola</h1>} />
            </div>
        );
    }
}

export default Home;
