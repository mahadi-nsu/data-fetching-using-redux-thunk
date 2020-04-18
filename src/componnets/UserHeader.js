import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUsers(this.props.userId);
        console.log(this.props.users);
    }
    render() {
        console.log(this.props.users);
        const user = this.props.users.find(user => user.id === this.props.userId);
        if (!user) {
            return null;
        }
        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

export default connect(mapStateToProps, { fetchUsers })(UserHeader);