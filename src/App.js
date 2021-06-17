import React from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { request } from 'http';
import MaterialStats from './MaterialStats';

const API_URL = 'http://localhost:3333';
const AddItem = (props) => {
	function submit() {
		const input = document.getElementsByClassName('form-inputs');
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				material_code: input[0].nodeValue,
				item_description: input[1].nodeValue,
				total_quantity: input[2].nodeValue,
				po_no: input[3].nodeValue,
				remarks: input[4].nodeValue,
			}),
		};
		fetch(`${API_URL}/add_material`,requestOptions).then(res => {
			res = res.json();
			if(res.success) {
				self.fetchMaterials();
			} else {
				alert('Some error occured while adding data');
			}
		});
	}
	return (
		<div className="d-flex justify-content-center myform">
			<Form>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Material Code</Form.Label>
					<Col sm={15}>
						<Form.Control className="form-inputs" type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Item Description</Form.Label>
					<Col sm={15}>
						<Form.Control className="form-inputs" type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Total Quantity</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" className="form-inputs"/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>PO No.</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" className="form-inputs"/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Remarks</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" className="form-inputs"/>
					</Col>
				</Form.Group>
				<div className="d-flex justify-content-around">
					<button
						onClick={() => {
							props.self.setState({
								addItem: false,
								dashboard: true,
							});
						}}
						className="btn btn-danger btn-md"
						type="button">
						Back
					</button>
					<button className="btn btn-success btn-md" onClick={() => this.submit()} type="button">Submit</button>
				</div>
			</Form>
		</div>
	);
}
const UpdateItem = (props) => {
	return (
		<div className="d-flex justify-content-center myform">
			<Form>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Material Code</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Person name</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Code No.</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Quantity</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizantalText">
					<Form.Label column sm={6}>Remarks</Form.Label>
					<Col sm={15}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<div className="d-flex justify-content-around">
					<button
						onClick={() => {
							props.self.setState({
								updateItem: false,
								dashboard: true,
							});
						}}
						className="btn btn-danger btn-md"
						type="button">
						Back
					</button>
					<button className="btn btn-success btn-md" type="button">Submit</button>
				</div>
			</Form>
		</div>
	);
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showStats: false,
			materialCode: 0,
			dashboard: true,
			addItem: false,
			updateItem: false,
			materials: [],
		};
	}
	componentDidMount() {
		// http.request("http://localhost:3333/materials");
		// get materials data from database
		// update materials state
	}
	fetchMaterials() {
		fetch(`${API_URL}/materials`,{
			method: 'GET',
			headers: {
				'Content-Type':'application/json'
			}
		}).then(res=>res.json())
		.then(data => {
			this.setState({
				materials: data
			});
		})
	}
	handleBack = () => {
		this.setState({
			showStats: false,
		});
	};
	showMaterialStats = materialCode => {
		console.log(materialCode);
		this.setState({
			showStats: true,
			materialCode
		})
	};
	addItem = () => {
		this.setState({
			addItem: true,
			dashboard: false,
		});
	};
	updateItem = () => {
		this.setState({
			updateItem: true,
			dashboard: false,
		});
	};
	render() {
		const { materials, dashboard, addItem, updateItem, showStats } = this.state;
		return (<div>
			{showStats &&
				<div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-primary backBtn btn-md" type="button" onClick={this.handleBack}>Back</button>
					</div>
					<MaterialStats materialCode={this.state.materialCode} />
				</div>
			}
			{ !showStats &&
				<div>
					{addItem && <AddItem self={this} />}
					{updateItem && <UpdateItem self={this} />}
					{dashboard &&
						<div>
							<div className="d-flex justify-content-center">
								<button className="btn btn-primary backBtn btn-md" onClick={this.addItem}>Add Item</button>
								<button className="btn btn-primary backBtn btn-md" onClick={this.updateItem}>Update Item</button>
							</div>
							<Table className="data-table" striped bordered hover size="sm">
								<thead>
									<tr>
										<th>Material Code</th>
										<th>Item Description</th>
										<th>Total Quantity</th>
										<th>PO No.</th>
										<th>Remarks</th>
									</tr>
								</thead>
								<tbody>
									{
										materials.map((row, index) => (
											<tr className="material-row" key={index} onClick={() => this.showMaterialStats(row[0])}>
												<td>{row[0]}</td>
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
					}
				</div>
			}
		</div>);
	}
}