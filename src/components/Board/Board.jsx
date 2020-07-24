import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'

import Column from '../Column/Column'

import './Board.css'

const Board = ({ board }) => {
    return (
        <Row className="App kbboard">

            {board.columns.map(column => (
                <Column key={'column' + column.id} id={column.id} />
            ))}

        </Row>
    )
}

const mapStateToProps = state => ({
    board: state.board
})

export default connect(mapStateToProps)(Board)