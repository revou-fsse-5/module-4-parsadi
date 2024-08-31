import './App.css'
import React from 'react'
import { useState, useEffect } from 'react';
import CustomizedDialogs from '../component/Dialog';
import Registration from './Registration';

function App() {
    const [allItems, setAllItems] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [currentEdit, setCurrentEdit] = useState("");

    const handleAdd = () => {
        let newItem = {
            title: newTitle,
            description: newDesc
        }

        let updateItemsArr = [...allItems];
        updateItemsArr.push(newItem);
        setAllItems(updateItemsArr);
        localStorage.setItem('categoriesItem', JSON.stringify(updateItemsArr))
    }

    const handleDelete = (index) => {
        let reducedItem = [...allItems];
        reducedItem.splice(index);
        localStorage.setItem('categoriesItem', JSON.stringify(reducedItem))
        setAllItems(reducedItem)
    }


    useEffect(() => {
        let savedItem = JSON.parse(localStorage.getItem('categoriesItem'));
        if (savedItem) {
            setAllItems(savedItem);
        }
    }, [])


    return (
        <div>
            <CustomizedDialogs child={<Registration />}>
            </CustomizedDialogs>
            <div className='App'>
                <h1>My Categories</h1>

                <div className='categories-wrapper'>
                    <div className='categories-input'>
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder='title here' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <input type="text" placeholder='description here' value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                        </div>
                        <div className='categories-input-item'>
                            <button type='button' className='primaryBtn' onClick={handleAdd}>Add</button>
                        </div>

                    </div>

                    <div className='categories-list'>
                        {allItems.map((item, index) => {
                            return (
                                <div className='categories-list-item' key={index}>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                        <button type='button' className='primaryBtn' onClick={() => handle}>edit</button>
                                        <button type='button' className='primaryBtn' onClick={() => handleDelete(index)}>delete</button>
                                    </div>
                                </div>

                            )
                        })}

                        {/* <div>
                            <button type='button' className='primaryBtn'>edit</button>
                            <button type='button' className='primaryBtn'>delete</button>
                        </div> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default App