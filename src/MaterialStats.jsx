import React from 'react';
import { Table } from 'react-bootstrap';

export default class MaterialStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [
                [2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
				[2, 'lots of data', 232, 5632423432654, 'nope still nothing'],
            ],
        };
    }
    render() {
        const { stats } = this.state;
        const { materialCode } = this.props;
        return (
            <div>
                <Table className="table table-hover data-table">
                    <thead>
                        <tr>
                            <th scope="col">Material Code</th>
                            <th scope="col">Drawn date</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Name</th>
                            <th scope="col">Code No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stats.map((row,id) => (
                                <tr key={id}>
                                    <td>{materialCode}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td>{row[4]}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}