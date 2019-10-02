import React, { useState, useRef, useEffect } from "react";
import { TimelineMax } from "gsap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginTest } from "../actions";
import { axiosWithAuth } from "./AxiosAuth";

const AnimationContainer = styled.div`
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 55px;
  padding-top: 20vh;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  @media screen and (max-width: 850px) {
   padding-top: 10vh;
  }
`;

const Empowered = styled.div`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  opacity: 1;
  color: #212121;
  @media screen and (max-width: 718px) {
   margin-bottom: -45px;
  }
`;

const Conversation = styled.span`
  font-family: "Open Sans", sans-serif;
  margin-left: -355px;
  font-weight:900;
  color: #212121;

`;
const ConversationDiv = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0px;
`;

const StyledDiv = styled.div`
  width: 100vw;
  height: auto;
  padding: 0;
  @media screen and (max-width: 850px) {
    height: 500px;
    padding: 2rem;
  }
  @media screen and (max-width: 550px) {
    height: 700px;
    padding: 2rem;
  }
`;
const WhenWords = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 26px;
  position: relative;
  color: #666;
  font-style: italic;
`;
const Message = styled.span`
  font-size: 1.4rem;
  opacity: 0;
  display:block;
  color: grey;
`;
const StyledLink = styled(Link)`
  color: white;
  background: #57CEB3;
  padding: 10px 20px;
  border-radius:10px;
  display:block;
  max-width:max-content;
  margin: 0 auto;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
const StyledLink2 = styled(Link)`
font-size: 16px;
  color: #57CEB3;
  display:block;
  max-width:max-content;
  margin: 1em auto;
  &:hover {
    text-decoration: underline;
    color: #24b4a5;
  }
`;

function Intro(props) {
  let empowered = useRef(null);
  let conversation = useRef(null);
  let conversationDiv = useRef(null);
  let whenWords = useRef(null);
  let message1 = useRef(null);
  let message2 = useRef(null);
  let tl = new TimelineMax();
  let tl2 = new TimelineMax();
  let tl3 = new TimelineMax();
  let tl4 = new TimelineMax();
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(
      tl
        .to(empowered, 0.5, { opacity: "1" })
        .fromTo(
          conversation,
          2,
          { marginLeft: "-800", opacity: "0" },
          { marginLeft: "0", opacity: "1" },
          2
        )
        .fromTo(conversationDiv, 2, { width: "0" }, { width: "355" }, 2)
        .duration(2),

      tl2
        .fromTo(whenWords, 1, { bottom: "100px" }, { bottom: "0px" }, 2)
        .fromTo(whenWords, 3, { opacity: 0 }, { opacity: 1 }, 2)
        .delay(1),

      tl3.to(message1, 2, { opacity: "1" }).delay(5.5),

      tl4.to(message2, 2, { opacity: "1" }).delay(5.5)
    );

    const token = localStorage.getItem("ec-token");

    if (token) {
      axiosWithAuth()
        .get("/restricted")
        .then(res => {
          props.loginTest();
        })
        .catch(err => {});
    }
  }, []);

  return (
    <AnimationContainer>
      <StyledDiv>
        <Empowered
          ref={elem => {
            empowered = elem;
          }}
        >
          Empowered
        </Empowered>
        <ConversationDiv
          ref={elem => {
            conversationDiv = elem;
          }}
        >
          <Conversation
            ref={elem => {
              conversation = elem;
            }}
          >
            Conversation
          </Conversation>
        </ConversationDiv>
        <div>
          <WhenWords
            ref={elem => {
              whenWords = elem;
            }}
          >
            When words matter most
          </WhenWords>
        </div>
        <div style={{'margin-top': '40px'}}>
        <Message
          ref={elem => {
            message1 = elem;
          }}
        >
          <StyledLink to="/login">Start a conversation</StyledLink>
        </Message>
        <Message
          ref={elem => {
            message2 = elem;
          }}
        >
          <StyledLink2 className="code" to="/module">Enter a verification code</StyledLink2>
        </Message>
        </div>
      </StyledDiv>
    </AnimationContainer>
  );
}

export default connect(
  null,
  { loginTest }
)(Intro);
