import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, login, receiveErrors, clearErrors } from '../../actions/session_actions';
import { receiveModal, clearModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.formType;
  let processForm = formType === "login" ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    clearModal: () => {
      dispatch(clearModal());
      dispatch(clearErrors({}));
    },
    login: (user) => dispatch(login(user)),
    receiveModal: (modalName) => dispatch(receiveModal(modalName)),
    clearErrors: () => dispatch(receiveErrors({})),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
