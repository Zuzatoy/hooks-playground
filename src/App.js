import React, { Component } from "react";
import Gallery from './Todo/Gallery';
import Counter from './Todo/Counter';
import MapCompany from './Todo/Map/MapCompany';
import CounterClass from './Todo/CounterClass';
import CounterFunction from './Todo/CounterFunction';
import Post from './components/Post';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './components/store';


export const ApplicationContext = React.createContext();




class App extends Component {
    state = {
      name: '',
      checked: false,
    };



    // onNameChange = (e) => {

    // console.log(this.state);
    //     this.setState({name: e.target.value})
    // };

    // onClick = (e) => {
    //     this.setState({checked: !e.target.checked})
    // };

    render() {
        return (
        <div>
            <Provider store={store}>
                <Postform />
                <Post />
            </Provider>
        
        {/* <ApplicationContext.Provider 
            value={{...this.state,
                onChange:this.onNameChange,
                onClick:this.onClick }}>
            <Gallery />
            <Counter />
            <MapCompany />
            <CounterClass />
            <CounterFunction />
        </ApplicationContext.Provider> */}
        </div>
        )
    }
}

export default App;