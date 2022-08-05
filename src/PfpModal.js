import React, {useRef} from 'react'

const PfpModal = (props) => {
    const fileInput = useRef(null)  

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if(file == null) return;
        //change this back later
        if (file.size < 2048)
          props.onFileSelectError({ error: "File size cannot exceed more than 2MB" });
        else props.onFileSelectSuccess(file);
    }
    const submitForm = () => {
        props.setPfpSelectorOpen(false);
        
      };
      
    return (
        <div>
            <h1>Select a Club Profile Picture</h1>
            <input type="file" name="myImage" accept="image/x-png,image/jpeg" onChange={handleFileInput}/>
            <button onClick={e => fileInput.current && fileInput.current.click()}>Select File</button>
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default PfpModal;