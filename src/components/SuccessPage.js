import React from 'react';
import styled from 'styled-components';

// const OuterContainer = styled.div `
//     width: 80%;
//     margin: 0 auto;
//     color: white;
// `


const SuccessPage = (props) => {
    return (
        <div className="success-container">
            <h2>Congratulations on taking the first step!</h2>
            <p>Your friend has recieved a message about your situation. Your name was not mentioned.</p>
            <p>When they finish their module you will get a text back saying they have completed it and are ready to talk.</p>
            <p>We know you may be anxious to get a text back.</p>
            <p>If you do not recieve a text that could mean one of two things:</p>
            <p> Either:</p>
            <p>1: Your friend never opened the link we sent them</p>
            <p>2: Your friend watched the video, but never completed the form saying they were done.</p>
            <p>You are more than welcome to still have this conversation with that friend, it just means they may not have utilized the tools we provided them with to prepare for the conversation.</p>
        </div>
     );
}
 
export default SuccessPage;