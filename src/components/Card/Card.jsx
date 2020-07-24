import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import './Card.css'

const Card = ({ card }) => {
    return (
        <Row>
            <Col className="kbcard kbcomponent">
                {card.title}
            </Col>
        </Row>
    )
}

const mapStateToProps = (state, ownProps) => {

    let card = null

    state.board.columns.map(column => {

        const result = column.cards.filter(card => (card.id === ownProps.id))
        if (result.length > 0)
            card = result[0]

        return result[0]
    })

    return {
        card
    }
}

export default connect(mapStateToProps)(Card)