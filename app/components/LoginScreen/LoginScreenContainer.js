import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {registerUser} from "../../store/user/Actions";
import LoginScreenComponent from './LoginScreenComponent'

const LoginScreenContainer = props =>
    <LoginScreenComponent registerUser={registerUser}/>


const mapDispatchToProps = {
    registerUser
}

LoginScreenContainer.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

export default connect(mapDispatchToProps)(LoginScreenContainer)