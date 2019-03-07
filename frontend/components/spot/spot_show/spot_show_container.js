import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { fetchSpot } from '../../../actions/spot_actions'

const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
  reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);