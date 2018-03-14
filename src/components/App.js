import React, { PureComponent } from 'react';
import TasksList from './TasksList';
import '../index.css';

class App extends PureComponent { //это родительский статичный класс без state
	render() {
		return (
			<div className="container">
				<div className="head-block"> 
					<div className="big-header-font"> Your Tasks App </div> 
					<div className="small-header-font"> manage your business tasks </div>
				</div>
				<TasksList />
			</div>			
		);
	}
}
export default App;