import React from 'react';
import Service from '../services/UserService';
import '../styles/LoginSignUp.css'
import { Button, Form } from 'react-bootstrap';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			message:''
		};
		this.service = new Service();
	}

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.service
			.signup(this.state.username, this.state.password)
			.then((response) => {
				console.log(response)
				this.setState({
					username: '',
					password: '',
					message: response.errorMessage
				});
				this.props.getUser(response);
			})
			.catch((err) => console.error(err));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<Form className="form" onSubmit={this.handleFormSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label htmlFor="username">Username</Form.Label>
						<Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={(event) => this.handleChange(event)} />
						{/* <Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text> */}
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
					</Form.Group>
					<p>{this.state.message}</p>
					<Button variant="info" type="submit">
						sign up
					</Button>
				</Form>
			</div>
		);
	}
}

export default SignUp;
