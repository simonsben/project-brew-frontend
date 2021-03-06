import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdvTable from '../components/table';
import { assemble_beer_info } from '../actions/assemble_data';

const AllBeers = props => {
    const { beers } = props;
    const { header, beer_info, is_numeric } = assemble_beer_info({beers});


    return (
        <Fragment>
            <Row className='top_pad'>
                <Col>
                    <h1 className='display-4 text-center'>Best value beers</h1>
                    <p className='lead text-center'>
                        <span className='larger'>Here is every beer sold at <a href='https://www.thebeerstore.ca/'>The Beer Store</a> ranked by the mL of alcohol per dollar. </span><br />
                        Click on a beer for more information.
                    </p>
                </Col>
            </Row>
            <Row>
                <AdvTable header={ header } data={ beer_info } is_numeric={ is_numeric } />
            </Row>
        </Fragment>
    )
}

export default AllBeers;
