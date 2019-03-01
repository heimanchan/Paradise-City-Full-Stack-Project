import { connect } from 'react-redux'
import SpotIndex from './spot_index';
import { fetchAllSpots, fetchSpot } from '../../actions/spot_actions'

const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots)
})

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  fetchSpot: spot => dispatch(fetchSpot(spot))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex)