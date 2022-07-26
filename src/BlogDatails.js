import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
	const { id } = useParams();
	const { data, isLoading, error } = useFetch(
		"http://localhost:3002/blogs/" + id
	);
    const history = useHistory();
    const handleClick = ()=>{
        fetch("http://localhost:3002/blogs/"+data.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        })

    }
	return (
		<div className="blog-details">
			{isLoading && <div>Loading....</div>}
			{error && <div>error</div>}
			{data && (
				<article>
					<h2>{data.title}</h2>
					<h5>
						Written By {data.author}
					</h5>
					<div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
