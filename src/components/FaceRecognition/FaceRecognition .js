import React from 'react';
import './FaceRecognition.css';
const FaceRecognition=({imageurl,box})=>{
	return (
		<div className= 'center ma'>
		<div className=' absolute mt2'>

		<img  id='inputimage' alt='facedetection' src={imageurl}  width= '500px'/>
			<div className='bounding-box'
 				style={{
 					top: box.topRow, 
 				 	right: box.rightCol,
 					bottom: box.bottomRow, 
 	 				left: box.leftCol}}>
 	 		</div>

		</div>

		</div>
		);
}

export default FaceRecognition;

/*import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageurl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageurl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol,
         bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;*/