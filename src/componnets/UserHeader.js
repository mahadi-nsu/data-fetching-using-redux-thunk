import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUsers(this.props.userId);
        // console.log(this.props.users);
    }
    render() {
        // console.log(this.props.users);
        // const user = this.props.users.find(user => user.id === this.props.userId);
        const { user } = this.props;
        console.log(user);
        if (!user) {
            return null;
        }
        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.find(user => user.id === ownProps.userId)
    };
}

export default connect(mapStateToProps, { fetchUsers })(UserHeader);