import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
	return (
		
 <div className="f3">

 	{<p> This magic brain will detect faces in your picture. Give it a try</p>}

 
 <div className=' center form pa4 br3 '>

 	 {<input  className='  f3' type='text' onChange={onInputChange} />}
 	{
 	<button className=' button grow f4 link bg-light-purple' onClick={onButtonSubmit}>
 	 Detect 
 	</button>
 	}

 </div>
</div>

			);
}

export default ImageLinkForm;