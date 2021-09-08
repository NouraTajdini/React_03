import React from 'react';

const Purchase = (props) => {
    return(
        <section className="side-section">
            <h3>My purchases</h3>
            You had <br />
            {props.pur}
        </section>
    )
}

export default Purchase;