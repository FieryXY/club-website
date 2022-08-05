import React, {useRef, useState} from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {centerCrop, makeAspectCrop} from 'react-image-crop';


const PfpModal = (props) => {
    const fileInput = useRef(null);
    const [image, setImage] = useState("");
    const [aspect, setAspect] = useState(1);
    const [crop, setCrop] = useState({
        unit: '%',
        width: 50,
        height: 50,

    });
    function onImageLoad(e) {
        const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
      
        const crop = centerCrop(
          makeAspectCrop(
            {
                unit: '%',
                width: 50,
                height: 50,
            },
            16 / 9,
            width,
            height
          ),
          width,
          height
        )
      
        setCrop(crop);
      }

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if(file == null) return;
        //change this back later
        if (file.size < 2048)
          props.onFileSelectError({ error: "File size cannot exceed more than 2MB" });
        else props.onFileSelectSuccess(file);
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }

    }
    const submitForm = () => {
        props.setPfpSelectorOpen(false);
    };
      console.log(props.tempPfp);
    return (
        <div>
            <form onSubmit = {submitForm} encType= "multipart/form-data">
            <h1>Select a Club Profile Picture</h1>
            <input type = "file" name="myImage" accept="image/x-png,image/jpeg" onChange={handleFileInput}/>
            <ReactCrop crop={crop} onLoad = {onImageLoad} onChange={(_, percentCrop) => setCrop(percentCrop)} circularCrop = {true} keepSelection = {true} aspect = {1}>
                <img id="target" src={image} />
            </ReactCrop>
            
            <button onClick={e => fileInput.current && fileInput.current.click()}>Select File</button>
            
            <input type ="button" value="Submit" onClick = {() => {props.handleFile(image)}}/>
            

            </form>
        </div>
    ); 
}

export default PfpModal;