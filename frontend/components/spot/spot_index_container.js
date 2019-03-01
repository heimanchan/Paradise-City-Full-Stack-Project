import SpotIndex from './spot_index';
import { fetchAllSpots, fetchSpot } from '../../actions/spot_actions'

const mapStateToProps = state => ({
  spots: Object.values(state.spots)
})

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: spots => dispatch(fetchAllSpots(spots)),
  fetchSpot: spot => dispatch(fetchSpot(spot))
})

// export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex)