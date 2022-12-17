import React, { useState } from "react";
import Div from './Div.jsx'
import '../styles/Input.css'


const Input = () => {
    // for updating individual input data
    const [data, updateData] = useState('');
    // for storing all the entered data
    const [list, updateList] = useState([]);
    // for storing the edited data
    const [edit, updateEdit] = useState('');
    // for changing the ad button text
    const [btn, updateBtn] = useState('Add');
    // const [update, Aupdate] = useState('');

    // generating random number
    function RandomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // adding data to list on clicking add
    function addData(event) {
        if (!edit) { // initially edit is empty
            let num = RandomNum(0, 100);
            updateList(list.concat([{ id: num, value: data }])); // add data to list
        }
        else { // if not empty
            for (let i = 0; i < list.length; i++) { // iterate through list
                if (list[i].id === edit.id) { // find the edit text from id
                    list[i].value = data; // replace the list data with editted value
                }
            }
            updateEdit('')
        }
        // document.querySelector("#task").value = ' ';
        updateData('')
        if (event.target.innerHTML === 'Save') {
            updateBtn((prev) => prev = "Add") // change text of add button
        }
    }


    return (
        <div className="container">
            <h2>To Do List</h2>
            <div className="box1" >
                <input className= "form-control-sm item"type="text" id="task" onChange={(e) => { updateData(e.target.value) }} value= {data} ></input>
                {/* value = {!edit ? data : edit } placeholder={!edit ? data : edit }*/}
                <button className="btn btn-secondary btn-sm" type="button" id="btn" onClick={addData} disabled={(data) ? false : true} >{btn}</button>
            </div>
            <Div list={list} updateBtn={updateBtn} updateList={updateList} updateEdit={updateEdit} updateData={updateData}/>
        </div>
    )
}

export default Input;