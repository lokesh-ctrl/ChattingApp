import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {registerUser} from "../../store/user/Actions";
import LoginScreenComponent from './LoginScreenComponent'

const LoginScreenContainer = props =>
    <LoginScreenComponent registerUser={props.registerUser}/>

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = {
    registerUser
}

LoginScreenContainer.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)