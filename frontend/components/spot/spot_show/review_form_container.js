import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../../actions/spot_actions';

const mapStateToProps = (state) => ({
  // currentUserId: state.session.currentUserId
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);