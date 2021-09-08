import React from 'react';

const Wallet = (props) => {
    return(
        <section className="side-section">
            <h3>My purchases</h3>
            You have <br />
            {props.wal}
        </section>
    )
}

export default Wallet;