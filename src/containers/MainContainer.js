import {connect} from 'react-redux'
import Project from "../components/Project";
import {AddToCart} from '../services/actions/Action'

const mapStateToProps = state => ({
    cartData:state
})

const mapDispatchProps = dispatch => ({
    AddToCartHandler : data=>dispatch(AddToCart(data))
})
export default connect(mapStateToProps,mapDispatchProps)(Project)