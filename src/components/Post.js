

const Post = ({posts}) => {
    return (
        <div className ='Posts'>
            <img src={posts.image} alt={posts.description}/>
            <p>Description: {posts.description}</p>
        </div>
    )
}

export default Post