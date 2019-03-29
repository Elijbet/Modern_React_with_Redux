import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="Jane" timeAgo="Yesterday at 3:34" image={faker.image.avatar()} text="Whoohoo learning React!" />
			<CommentDetail author="Pete" timeAgo="Today at 5:34" image={faker.image.avatar()} text="Whoohoo learning Vue!"   />
			<CommentDetail author="Kelly" timeAgo="Yesterday at 3:24" image={faker.image.avatar()} text="Whoohoo learning Angular!"   />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));