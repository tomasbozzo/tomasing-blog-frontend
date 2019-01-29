import React, { Component } from 'react';
import axios from 'axios';

import './Post.css'

class Post extends Component {

    state = {

    }

    componentDidMount() {
        const category = this.props.match.params.category;
        const slug = this.props.match.params.slug;
        axios.get('http://blog.tomasing.com:8080/categories/' + category + '/posts/' + slug)
            .then(response => {
                this.setState({
                    post: response.data
                });
            });
    }

    render() {
        const post = this.state.post;
        if (post) {
            return (
                <div className="Post container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5>{new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(post.publicationDate))}</h5>
                            <h2>{post.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                            <div>
                                <span>Posted by {post.publishedBy}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}

export default Post;