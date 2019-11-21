import React, {Component} from 'react';

class Kursus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paket: "Kursus programing",
			materi: "React js",
			desc: "belajar react js",
			Harga: "2000000"
		};
	}
	render() {
		return(
			<div> 
				<h1>Nama Paket : {this.state.paket} </h1> <br/>
				<h1>Deskripsi materi : {this.state.materi} </h1> <br/>
				<h1>Deskripsi paket : {this.state.desc} </h1> <br/>
				<h1>Harga : {this.state.Harga} </h1> <br/>
			</div>
		);
	}
}

export default Kursus;