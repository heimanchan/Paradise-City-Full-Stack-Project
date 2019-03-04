import { connect } from 'react-redux'
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';
import { fetchAllSpots, fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots)
})

const mapDispatchToProps = dispatch => ({
  // fetchAllSpots: () => dispatch(fetchAllSpots()),
  // fetchSpot: spot => dispatch(fetchSpot(spot))
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)