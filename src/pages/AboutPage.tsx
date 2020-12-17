import React from "react";
import {useHistory} from "react-router-dom";

const AboutPage: React.FC = () => {
    const history = useHistory()
    return (<>
        <h1>Страница Информмации</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Culpa ducimus eos exercitationem harum laudantium
            maxime minus mollitia nam odio pariatur porro quia rem, tenetur totam vero.
            Ad assumenda dolore explicabo sint sunt.</p>
        <button className='btn' onClick={()=>history.goBack()}>Обратно к списку дел</button>
    </>)
};
export default AboutPage;
