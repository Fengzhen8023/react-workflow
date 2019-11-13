import * as React from 'react';
import './App.css';
import DragAndDropSidebar from './flowDiagram/DragAndDropSidebar'



class App extends React.Component {
	render() {
		return (
			<div className="app-box">
				<DragAndDropSidebar />
			</div>
		);
	}
}

export default App;