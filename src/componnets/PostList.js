import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import reducers from '../reducers';


class PostList extends Component {
    // componentDidMount() {
    //     console.log(this.props.fetchPosts());
    // }
    render() {
        console.log(this.props.posts.data);
        return (
            <div>
                <button onClick={() => { this.props.fetchPosts() }}>fetch datas</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);