import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		console.log("Pending.........");
		const blog = { title, body, author };

		fetch("http://localhost:3002/blogs", {
			method: "POST",
			headers: { "content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			console.log("Done!!!!!!");
			console.log(blog);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h3>Add new Blog</h3>
			<form onSubmit={handleSubmit}>
				<label>Blog Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<label>Blog Body</label>
				<textarea
					required
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
				></textarea>
				<label>Blog Author</label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				>
					<option value="Orappa">Orappa</option>
					<option value="Sumeya">Sumeya</option>
					<option value="Ongaye">Ongaye</option>
				</select>
				{!isPending && <button>Add Button</button>}
				{isPending && <button disabled>Loading....</button>}
				<p>{title}</p>
				<p>{body}</p>
				<p>{author}</p>
			</form>
		</div>
	);
};
export default Create;
