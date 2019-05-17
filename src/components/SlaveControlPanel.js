import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from "react-router-dom";

const USER_URL = "https://prnkstrserver.herokuapp.com/users"

class UserEdit extends Component {
	constructor(props) {
	super(props);
	this.state = {
		user: [],
		// id: '',
		// name: '',
		fill_murray: false,
		// place_cage: '',
		// custom_header: '',
		// custom_header_text:'',
		// paragraph_background: '',
		// paragraph_color:'',
		// snap: '',
		// master_id: ''
	};

	this._handleChangeName = this._handleChangeName.bind(this);
	this._handleChangeFillMurray = this._handleChangeFillMurray.bind(this);
	this._handleChangePlaceCage = this._handleChangePlaceCage.bind(this);
	this._handleChangeCustomHeader = this._handleChangeCustomHeader.bind(this);
	this._handleChangeCustomHeaderText = this._handleChangeCustomHeaderText.bind(this);
	this._handleChangeParagraphBackground = this._handleChangeParagraphBackground.bind(this);
	this._handleChangeParagraphColor = this._handleChangeParagraphColor.bind(this);
	this._handleChangeSnap = this._handleChangeSnap.bind(this);
	this._handleChangeMasterId = this._handleChangeMasterId.bind(this);
	this.editSlave = this.editSlave.bind(this);
	}

	componentDidMount() {
		this.fetchSlave();
	}

	fetchSlave() {
	let userId = this.props.match.params.user;
	axios
		.get(`https://prnkstrserver.herokuapp.com/users/${ userId }.json`)
		.then(response => {
			this.setState( {
				name: response.data.name,
				fill_murray: response.data.fill_murray,
				place_cage: response.data.place_cage,
				custom_header: response.data.custom_header,
				custom_header_text: response.data.custom_header_text,
				paragraph_background: response.data.paragraph_background,
				paragraph_color: response.data.paragraph_color,
				snap: response.data.snap,
				master_id: response.data.master_id
			}, () => {
			console.log(this.state);
			});
		})
		.catch(err => console.log(err));
	}

	editSlave = async (e) => {
	let userId = this.props.match.params.user
	axios
		.put( `https://prnkstrserver.herokuapp.com/users/${userId}.json`, {
			"name": this.state.name,
			"fill_murray": this.state.fill_murray,
			"place_cage": this.state.place_cage,
			"custom_header": this.state.custom_header,
			"custom_header_text": this.state.custom_header_text,
			"paragraph_background": this.state.paragraph_background,
			"paragraph_color": this.state.paragraph_color,
			"snap": this.state.snap,
			"master_id": this.state.master_id
			} )
		.then( r => console.log(r.status) ).catch( e => console.log(e) )
	}

	_handleSubmit = async e => {
		e.preventDefault();
		this.editSlave();
	};

	_handleChangeName(e) {
		this.setState({name: e.target.value});
	}
	_handleChangeFillMurray(e) {
		this.setState({fill_murray: e.target.value});
	}
	_handleChangePlaceCage(e) {
		this.setState({place_cage: e.target.value});
	}
	_handleChangeCustomHeader(e) {
		this.setState({custom_header: e.target.value});
	}
	_handleChangeCustomHeaderText(e) {
		this.setState({custom_header_text: e.target.value});
	}
	_handleChangeParagraphBackground(e) {
		this.setState({paragraph_background: e.target.value});
	}
	_handleChangeParagraphColor(e) {
		this.setState({paragraph_color: e.target.value});
	}
	_handleChangeSnap(e) {
		this.setState({snap: e.target.value});
	}
	_handleChangeMasterId(e) {
		this.setState({master_id: e.target.value});
	}

	_toggleFillMurray = () => {
		this.setState( {
			fill_murray: !this.state.fill_murray
		});
	}
	_togglePlaceCage = () => {
		this.setState( {
			place_cage: !this.state.place_cage
		})
	}
	_toggleCustomHeader = () => {
		this.setState( {
			custom_header: !this.state.custom_header
		})
	}
	_toggleSnap = () => {
		this.setState( {
			snap: !this.state.snap
		})
	}

	render() {
		return (
   <div className="BackdropColor">
		 <div className="row justify-content-center">
			 <div className="col-lg-4 col-md-6">
				 <img className="img-fluid py-4" src={ process.env.PUBLIC_URL + '/prnkstr_long_white.svg' } />
			 </div>
		 </div>


			<div className="container">


				<form onSubmit={ this._handleSubmit } className="gridme">
					<div className="postItlrg postIt" id="nameBox" >
						<label>Now Editing:</label>
						<input className="nameInput" type="text" name="name" value={ this.state.name } onChange={ this._handleChangeName } />
					</div>
					<div className="postItlrg postIt" id="fillMurrayBox">
						<h4 className="textPopper">Fill Murray?</h4>
						<input type="checkbox" onChange={ this._toggleFillMurray } value={ this.state.fill_murray } checked={ this.state.fill_murray } className="inlineBlock" />


					</div>
					<div className="postItlrg postIt" id="placeCageBox">
						<h4 className="textPopper">Place Cage?</h4>
						<input type="checkbox" onChange={ this._togglePlaceCage } value={ this.state.place_cage } checked={ this.state.place_cage } />
					</div>

					<div className=" postIt" id="customHeaderBox">
						<input  type="checkbox" onChange={ this._toggleCustomHeader } value={ this.state.custom_header } checked={ this.state.custom_header } />
						<h5>Custom Headings</h5>
						<input type="text" name="custom_header_text" value={ this.state.custom_header_text } onChange={ this._handleChangeCustomHeaderText } />
						<h6> * Insert Custom Heading Here </h6>
					</div>

					<div className="postItlrg postIt" id="customBackgroundBox">
						<input type="checkbox" name="paragraph_background" value={ this.state.paragraph_background } onChange={ this._handleChangeParagraphBackground } />
						<h5 className="textPopper">Paragraph Background Color</h5>
						<input className="" type="text" name="paragraph_color" value={ this.state.paragraph_color } onChange={ this._handleChangeParagraphColor } />
						<h6 className="textPopper">* Pick a Color</h6>
					</div>


					<div className="postItsml postIt" id="">
						<h5>Stranger Things </h5>
						<input type="checkbox" name="paragraph_background" />
					</div>
					<div className="postItlrg postIt" id="">
						<h5> Flip Page </h5>
						<input type="checkbox" name="paragraph_background" />
					</div>

					<div className="postItsml postIt" id="">
						<h5> Other side</h5>
						<input type="checkbox" name="paragraph_background" />
					</div>

					<div className="postItlrg postIt" id="">
						<h5> Marquee </h5>
						<input type="checkbox" name="paragraph_background" />
						<input type="range" id="marqueeSpeed" name="speed" min="1" max="500" />
						<label>Marque Speed</label>
						<input type="text" id="marqueeElement" name="marqueeElement" value="div" />
						<label >Marque Element</label>
					</div>

					<div className="postItsml postIt" id="">
						<h5> Unicorn Mode </h5>
						<input type="checkbox" name="paragraph_background" />
					</div>

					<div className="postItlrg postIt" id="">
						<h5> Word Swapper </h5>
						<input type="checkbox" name="wordswapper" />
						<input type="text" name="paragraph_background" value="Old word"/>
						<input type="text" name="paragraph_background" value="Replaced word"/>
					</div>

					<div className="postItlrg postIt" id="">
						<h5> Hidden Video </h5>
						<input type="checkbox" name="wordswapper" />
						<input type="text" name="paragraph_background" value="Your video URL"/>
					</div>




					<div className="postItlrg postIt" id="awwSnapBox">
						<input className="" type="checkbox" onChange={ this._toggleSnap } value={ this.state.snap } checked={ this.state.snap } />
						<label className="">Snap</label>
					</div>

					<div className="postItsml postIt" id="submitButtonBox">
						<input type="submit" className="" value="Update" id="submitButton"/>
						<button className="btn btn-secondary" type="button" onClick={ this.handleCancel }>Cancel</button>
					</div>
				</form>
			</div>
			</div>

		);
	}
}

export default UserEdit;
