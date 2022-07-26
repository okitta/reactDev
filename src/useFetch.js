/**
 *This is a custom hook used by do-jo blog that helps
 *us to make hooks as a reusable component
 */
import { useState, useEffect } from "react";
// import blogList from "./blog-lists.json";

const useFetch = (url) => {

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error("Could Not Fetch The Data From Source");
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
                    if(err.name==='AbortError'){
                        console.log('fetch Abort');
                    }
					setError(err.message);
					setIsLoading(false);
				});
	}, [url]);


	return { data, error, isLoading };
};
export default useFetch;
