import React, {useState, useEffect} from 'react';
import "./ClubEditor.css";
import Modal from 'react-modal';
import PfpModal from './PfpModal';

const ClubEditorPfp = (props) => {
    const [tempPfp, setTempPfp] = useState(null)
    const [pfpSelectorOpen, setPfpSelectorOpen] = useState(false);
    console.log(tempPfp);
    
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setTempPfp(reader.result);
        reader.onerror = error => reject(error);
    });
    
    return(
        <>
        <img className="clubProfilePicture" src = "./img/ccalogo.png" onClick = {() => setPfpSelectorOpen(true)}/>
        <Modal style = {{content: {"background" : "#3A4750", "overflow" : "scroll", "borderRadius" : "25px"}}} isOpen={pfpSelectorOpen} onRequestClose = {() => {setPfpSelectorOpen(false)}}>
            <PfpModal onFileSelectSuccess={(file) => toBase64(file)}
            onFileSelectError={({ error }) => alert(error)} 
            tempPfp = {tempPfp} setTempPfp = {setTempPfp} setRefresh = {props.setRefresh}
            setPfpSelectorOpen = {setPfpSelectorOpen}/>
        </Modal>
        </> 
    );
}
export default ClubEditorPfp;