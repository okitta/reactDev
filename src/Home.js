import BlogTemplate from "./BlogTemplet"
import useFetch from "./useFetch"

const Home = () => {
    /**
     *useState is a react hook method that is helpful
     *to allow dynamic content management
     */
    const { data, error, isLoading } = useFetch("http://localhost:3002/blogs");




	return (
		<div className="home">
			{error && (
				<div>
					<h1>{error}</h1>
				</div>
			)}
			{isLoading && (
				<div>
					<h1 style={{ color: "black" }}>Loading......</h1>
				</div>
			)}
			{data && <BlogTemplate blog={data} title="All Blogs!" />}
			{
				"---------------------------------------------------------------------------------------------------------------- \n"
			}
			{/* <h3 style={{ color: "red", textAlign: "center" }}>Hell Ya</h3> */}
			{
				"----------------------------------------------------------------------------------------------------------------"
			}
			{/* {data && (
				<BlogTemplate
					blog={data.filter((data) => data.title.includes("Human"))}
					title="Blogs related to Human"
				/>
			)} */}
		</div>
	);
};
export default Home;
