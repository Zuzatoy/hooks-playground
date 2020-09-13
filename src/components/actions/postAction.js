import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
        })
    )
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
            })
        )
}

// const handleClick = () => {   
//     fetch('https://0x5wgwk3t8.execute-api.ap-southeast-2.amazonaws.com/dev/candidates', {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }})
//       .then(response => response.json())
//       .then(inputs => {
//         setInputs({ inputs }, () => {
//             history.push("/list");
//         });
//         console.log("RESULT", inputs)
//       })
//       .catch(error => {
//         console.log('error because', error);
//       })
// }