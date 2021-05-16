import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import './styles.css';

const Upload = () => {
    let history = useHistory();
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div className="heading">Multiple Images Preview</div>
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">Upload </i>
                        <button style={{background:'blue', height:'25px', width: '80px', fontSize:'20px', color:'white' }}   
                             onClick={() =>{history.push("/") }} >
                                Back
                        </button>
 
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	);
};

export default Upload;