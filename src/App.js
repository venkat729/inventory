import React from 'react';
import http from "http";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			materials: [],
		};
	}
	componentDidMount() {
		// get materials data from database
		// update materials state
		http.request("http://localhost:3333/add_material");
	}
	render() {
		const { materials } = this.state;
		return (<div>
			<tr>
				<th>Material Code</th>
				<th>Item Description</th>
				<th>Total Quantity</th>
				<th>PO No.</th>
				<th>Remarks</th>
			</tr>
			<tr>
				<td><input type="text" id="material-code"/></td>
				<td><input type="text" id="item-description"/></td>
				<td><input type="text" id="quantity"/></td>
				<td><input type="text" id="po-number"/></td>
				<td><input type="text" id="remarks"/></td>
			</tr>
			<div>
				<tr>
					<th>Material Code</th>
					<th>Item Description</th>
					<th>Total Quantity</th>
					<th>PO No.</th>
					<th>Remarks</th>
				</tr>
				{
					materials.map(row =>(
							<tr>
								<td>{row[0]}</td>
								<td>{row[1]}</td>
								<td>{row[2]}</td>
								<td>{row[3]}</td>
								<td>{row[4]}</td>
							</tr>
						)
					)
				}
			</div>
		</div>);
	}
}