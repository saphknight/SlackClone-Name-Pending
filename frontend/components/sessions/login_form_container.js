import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: Object.values(state.errors),
    formType: "Sign in"
});

const mdp = dispatch => ({
    action: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);