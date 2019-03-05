import { connect } from 'react-redux'
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';
import { receiveSearch } from '../../actions/search_action'
const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots)
})

const mapDispatchToProps = dispatch => ({
  // fetchAllSpots: () => dispatch(fetchAllSpots()),
  // fetchSpot: spot => dispatch(fetchSpot(spot))
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  receiveSearch: search => dispatch(receiveSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)