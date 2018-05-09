import React from 'react';
import PropTypes from 'prop-types';


const Actions = ({ getRepos, getStarred }) => (
    <div className='actions'>
        <button onClick={getRepos} > Ver Respositórios</button>
        <button onClick={getStarred} > Ver favoritos</button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.bool.isRequired,
    getStarred: PropTypes.bool.isRequired
}

export default Actions;