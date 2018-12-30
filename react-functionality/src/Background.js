import React, { Component } from 'react';

export default class Background extends Component {
	constructor() {
		super();
		this.state = {
			pics: [],
		}
	}

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=500')
		 .then(response => response.json())
		 .then(pics => {
		 	let pictures = pics.results.map(user => {
		 		return(
		 			<div key={user.dob.date}>
		 				<img src={user.picture.thumbnail} alt=''/>
		 			</div>
		 			);
		 	});
		 	this.setState((state) => {
		 		return { pics: pictures }
		 	});
		 });
	}

	render() {
		return(
			<div className='container' style={{display: 'flex', flexWrap: 'wrap'}}>
				{this.state.pics}
			</div>
			);
	}
}