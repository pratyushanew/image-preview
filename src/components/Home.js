import {React} from "react";
import {useHistory} from "react-router-dom";
import './styles.css';

function Home (){
    let history = useHistory();
    return(
        <div>
            <div className="heading" style={{background: 'purple'}}>WELCOME</div>

            <div>
				<div className="label-holder">
					<label htmlFor="file" className="label">
						
                    <button style={{background:'pink', height:'100px', width: '200px', fontSize:'20px'}}   
                        onClick={() =>{history.push("/upload") }} >
                            Select
                    </button>
					 
                    </label>
				</div>
			</div>

            
            
        </div>
    );
}
export default Home;