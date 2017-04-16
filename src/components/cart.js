import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/add_to_cart'
import Shelf from './shelf'
import PropTypes from 'prop-types'

class Cart extends Component {

    render () {
        const CartItems = this.props.cart.map( ( item, idx ) => {
            return <li key={ idx }>{item}</li>
        } )
        return (
            <div className='Cart'>
                <Shelf addItem={ this.props.actions.addToCart } />
                <h2>Shopping Bag</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

function mapStateToProps ( state, prop ) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions: bindActionCreators( CartActions, dispatch )
    }
}

Cart.propTypes = {
    cart: PropTypes.object,
    actions: PropTypes.object
}

export default connect( mapStateToProps, mapDispatchToProps )( Cart )
