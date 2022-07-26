import { Link } from "react-router-dom";

const BlogTemplet = (props) => {
	const blog = props.blog;
	const title = props.title;
	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blog.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blog/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>main body.......</p>
						<h6>Written By {blog.author}</h6>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogTemplet;
