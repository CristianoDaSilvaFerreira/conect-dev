import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import PostCard from "../../../components/PostCard";

const useStyles = makeStyles ((theme) =>({
    root: {
    },
}));

const posts = [
    { 
        id: 1, 
        author: {
            id: 1,
            name: 'Cristiano Ferreira',
            username: 'cristianoferreira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um App do zero utilizando React.js',
        date: 'Janeiro 13, 2022',
        description: 'Fala pessoal! Qual o framework favorito de vcs?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: '/images/posts/post9.jpeg'
    },
    { 
        id: 2, 
        author: {
            id: 1,
            name: 'Cristiano Ferreira',
            username: 'cristianoferreira',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um App do zero utilizando React.js',
        date: 'Janeiro 13, 2022',
        description: 'Fala pessoal! Qual o framework favorito de vcs?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: '/images/posts/post8.png'
    },
];

function Feed() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
}
export default Feed;