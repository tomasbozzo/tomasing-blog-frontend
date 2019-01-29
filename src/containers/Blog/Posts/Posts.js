import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Posts.css'

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://blog.tomasing.com:8080/posts')
            .then(response => {
                this.setState({
                    posts: response.data._embedded.postResourceList
                });
            });
    }

    getPostLink = (post) => {
        return {
            pathname: '/' + post.category + '/' + post.slug
        }
    }

    getPosts = () => {
        return this.state.posts.map(p => (
            <div className="row" key={p.slug}>
                <div className="col-sm-12">
                    <div>
                        <h2><Link className="text-body" to={this.getPostLink(p)}>{p.title}</Link></h2>
                        <div dangerouslySetInnerHTML={{__html: p.content}}></div>
                        <div>
                            <Link className="float-right" to={this.getPostLink(p)}>Read the full story</Link>
                            <span>Created by {p.publishedBy}</span>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="Posts container">
                {this.getPosts()}
            </div>
        );
    }
}

export default Posts;