import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});


	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
        console.log(posts)
			});
	}, [setAppState]);


  return (
    <div>
      <h1>done</h1>
      {appState.posts && appState.posts.map((post) => {
        return (<p>{post.id}</p>)
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
