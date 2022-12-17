import React from "react";
import '../styles/Div.css'
const Div = ({ list, updateBtn, updateList, updateEdit,updateData }) => {

    const Delete = ({ id }) => {
        // console.log(id)
        let arr = [];
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id !== id) {
                arr[count] = list[i];
                count++;
            }
        }
        updateList(arr);
    }

    const Edit = (ele) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === ele.id) {                             
                updateEdit(list[i])
                updateData(ele.value)
            }
        }
    }
    return (
        <div className="box">
            {list.map((ele) => (
                <>
                    <ul className="list-group list-group-flush ">
                        <li className="list list-group-item list-group-item-dark shadow p-3 mb-2 bg-body rounded " key={ele.id}>{ele.value}
                            <button className="btn  btn-outline-danger btn-sm" style={{ float: "right" }} id={ele.id} onClick={() => { Edit(ele); updateBtn((prev) => prev = "Save") }}>Edit</button>
                            <button className="btn one btn-outline-primary btn-sm" style={{ float: "right" }} onClick={() => Delete(ele)}>Delete</button>
                        </li>
                    </ul>
                </>
            ))}

        </div>
    )
}

export default Div;