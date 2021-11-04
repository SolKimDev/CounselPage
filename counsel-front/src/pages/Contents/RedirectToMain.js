import React from 'react';
import { withRouter } from 'react-router';

const RedirectToMain = ({history}) => {

    history.push('/mainpage');

    return (
        <div>
            Redirect to main page...
        </div>
    );
};

export default withRouter(RedirectToMain);