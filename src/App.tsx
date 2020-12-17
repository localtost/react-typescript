import React from 'react';
import Navbar
    from "./components/Navbar";
import  { BrowserRouter,Switch,Route } from 'react-router-dom';
import TodoPages
    from "./pages/TodosPage";
import AboutPage
    from "./pages/AboutPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                   <Route  path='/todo' component={TodoPages}/>
                    <Route  path='/about' component={AboutPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
