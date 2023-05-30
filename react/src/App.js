import React from 'react';
import './App.css';
import axios from 'axios';
import useSWR from 'swr';

function App() {
	const baseURL = 'http://127.0.0.1/api/';

	const axiosInstance = axios.create({
		baseURL: baseURL,
		timeout: 5000,
		header: {
			'Context-Type': 'applicaiton/json',
		}
	});

	function fetcher(url) {
		return axiosInstance.get(url).then((res) => res.data);
	};

	const { data: posts, error, isLoading } = useSWR('/', fetcher);
	console.log(posts)
	if(error) return <h1>Failed to load</h1>;
	if(isLoading) return <h1>Loading...</h1>;

	const Post = ({id, title}) => {
		return (
			<p>{id} {title}</p>
		)
	};

  return (
		<div>
			<h1>Success</h1>
			{posts && posts.map((post) => {
				return (
					<Post key={post.id} id={post.id} title={post.title}/>
				)
			})}
		</div>
  )

}

export default App;
