import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions'


const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId]
})

const mapDispatchToProps = dispatch => ({
  fetchSpot: spot => dispatch(fetchSpot(spot))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);