import React,  {memo} from 'react';

const Header = () => {
    return(
        <div className="header">
            <img src='https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg' className="App-logo" alt="logo" />
        </div>
    );
}

export default memo(Header);