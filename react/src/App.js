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
		};
	});

	function fetcher(url) {
		return axiosInstance.get(url).then((res) => res.data);
	};

	const { data: posts, error, isLoading } = useSWR('', fetcher);

	if(error) return <h1>failed to load</h1>
	if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
			Success
			{posts && posts.map((post) => {
				<p>{post.id}</p>
			})}
    </div>
  )
	// const [appState, setAppState] = useState({
	// 	loading: false,
	// 	posts: null,
	// });


	// useEffect(() => {
	// 	setAppState({ loading: true });
	// 	const apiUrl = `http://127.0.0.1/api/`;
	// 	fetch(apiUrl)
	// 		.then((data) => data.json())
	// 		.then((posts) => {
	// 			setAppState({ loading: false, posts: posts });
  //       console.log(appState)
	// 		});
	// }, [setAppState]);

	// return (
	// 	<div className="App">
  //     <h1>react app check logs</h1>
	// 	</div>
	// );
}

export default App;
