import React from 'react';
import PropTypes from 'prop-types'; 

const Repos = ({ className, title, repos }) => (

    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map( repo => (
                <li key={repo.id}><a href={repo.link}>{repo.name}</a></li>
            ))}
        </ul>
    </div>
)

React.defaultProps = {
    className: ''
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos;