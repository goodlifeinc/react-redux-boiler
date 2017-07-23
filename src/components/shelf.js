import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {
    constructor ( props ) {
        super( props )

        this.state = {
            shelfItems: [
                'shampoan',
                'shokolad',
                'mlqko'
            ]
        }
        this.onClickAdd = this.onClickAdd.bind( this )
    }

    onClickAdd ( item ) {
        this.props.addItem( item )
    }

    render () {
        const shelfItems = this.state.shelfItems.map( ( item, idx ) => {
            return <li key={ idx }><button onClick={ () => this.onClickAdd( item ) }>+</button>{item}</li>
        } )
        return (
            <div>
                <h2>Shelf</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        )
    }
}

Shelf.propTypes = {
    addItem: PropTypes.func
}

export default Shelf
