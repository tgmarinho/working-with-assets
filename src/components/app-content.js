import React from 'react';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types';


const AppContent = ({ 
    userInfo,
    repos,
    starred,
    isFetching,
    handleSearch,
    getRepos,
    getStarred
}) => (
    <div className='app'>

        <Search handleSearch={handleSearch} isDisabled={isFetching} />
        {isFetching && <div>carregando...</div>}
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length &&
            <Repos className="repos" title="Respositórios:" repos={repos} />
        }

        {!!starred.length &&
            <Repos className="starred" title="Favoritos:" repos={starred} />
        }

    </div >
)

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred:  PropTypes.func.isRequired
}

export default AppContent;