import { connect } from 'react-redux'
import SpotIndex from './spot_index';
import { fetchAllSpots, fetchSpot } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots),
  search: state.ui.search,
})

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  fetchSpot: spot => dispatch(fetchSpot(spot)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex)