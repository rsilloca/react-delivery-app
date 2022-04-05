import React, { useState, Fragment } from 'react'
import { Button, TextField } from "@mui/material"

const Layout = () => {

    // const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [data, setData] = useState({
        name: ''
    });

    const increment = () => {
        // setList([...list, 6]);
        console.log('click bb', data);
    };

    const onChangeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Fragment>
            <TextField label="Your name" variant="outlined" name="name" onChange={onChangeHandler} />
            <Button onClick={increment}>Add</Button>
            <h1>{data.name}</h1>
            {/* {
                list.map((e, index) =>
                    <p key={index}>{e}</p>
                )
            } */}
        </Fragment>
    );
}

export default Layout;