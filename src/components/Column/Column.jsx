import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Card from '../Card/Card'

import './Column.css'

const Column = ({ column }) => {
    return (
        <Col className="kbcolumn kbcomponent">
            <Row className="kbcolumn-header">
                <Col sx={11}>
                    <strong>{column.title}</strong>
                </Col>
                <Col sm={1} >
                    ...
                </Col>
            </Row>
            { column.cards.map(card => (
                <Card key={'card' + card.id} id={card.id} />
            ))}
        </Col>
    )
}

const mapStateToProps = (state, ownProps) => ({
    column: state.board.columns.filter(column => (column.id === ownProps.id))[0]
})

export default connect(mapStateToProps)(Column)