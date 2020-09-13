import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postAction';

const Post =({nextProps, ...props})=> {

    useEffect(() => {
        props.fetchPosts();
    }, []);

    // useEffect((nextProps)=> {
    //     if(nextProps.newPost) {
    //         props.posts.unshift(nextProps.newPost);
    //     }
    // })

        const postItems = props.posts.map(item => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        ));

        return (  
            <div>
                {postItems}
            </div>
        )
}

const mapStateToProps = state => ({
    posts: state.posts.items
})



export default connect(mapStateToProps, { fetchPosts })(Post);
