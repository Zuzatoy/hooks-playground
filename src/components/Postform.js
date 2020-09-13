import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from './actions/postAction';

const Postform = (props) => {

    const [inputs, setInputs] = useState({ title: "", body: ""});


    const onChange = (event) => { 
        setInputs({...inputs, [event.target.name]: event.target.value})}

    const onSubmit =(event)=> {
        event.preventDefault();
        const post = {
            title: inputs.title,
            body: inputs.body
        }
        props.createPost(post);
    }

    return (
        <div>
        <p>
            Yo Candidate!!! Reveal yourself 
        </p>
        <form className="lisa-form" onSubmit={onSubmit} >
            <div>
                <label  htmlFor="title">Title</label>
                <input  type="text" name="title" id="title" value={inputs.title} onChange={onChange} />
            </div>
            <div >
                <label htmlFor="body">Body</label>
                <input  type="body" name="body" id="body" value={inputs.body} onChange={onChange} />
            </div>
            <div>
                <button className="button button5" type="submit">
                    Submit
                </button>
            </div>
        </form>
        </div>
    )
}

export default connect(null, { createPost })(Postform);
