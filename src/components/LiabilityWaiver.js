import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from "react-transition-group";

const StyledButton = styled(Button) `
    && {
        background-color: #24B4A5;
        border-color: white !important;
    }

    &:hover {
        background: white !important;
        color: #24B4A5 !important;
        border-color: #24B4A5 !important;
    }
`

const LiabilityContainer = styled.div `
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 2rem auto;
    width: 50%;
    height: 500px;
    overflow: scroll;

    @media screen and (max-width: 800px) {
        width: 60%;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        width: 95%;
    }
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0px;

    &::-webkit-scrollbar {
    width: 20px;
    }

    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
    background: #24B4A5; 
    border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: rgba(168,216,205,1); 
    }
`

const FormHeadingContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const FormHeading = styled.h3 `
    color: rgb(42, 72, 78, 1);
    text-align: center;
`

const FormParagraph = styled.p`
    color: rgb(42, 72, 78, 1);
    text-align: center;
`

const FormListItem = styled.li`
    color: rgb(42, 72, 78, 1);
    text-align: center;
`

const StyledA = styled.a `
    color: #24B4A5;

    &:hover {
        text-decoration: none;
        color: rgba(221,239,227,1);
    }
`

const AcceptDiv = styled.div `
    margin: 2rem auto;
    width: 45%;
    @media screen and (max-width: 800px) {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
    }
`

const ArrowDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
`

const FaIcon = styled(FontAwesomeIcon) `
    position: absolute;
    top: 1;
    color: rgb(42, 72, 78, 1);

    &:hover {
        color: rgba(221,239,227,1);
    }
`

function LiabilityWaiver() {
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
      >
        <div>
            <LiabilityContainer>
                <ArrowDiv>
                    <Link to='/form/namephone'><FaIcon icon={faArrowAltCircleLeft} className='fa-3x'/></Link>
                </ArrowDiv>
                <div style={{'padding': '4rem'}}>
                    <FormHeading>Terms and Conditions</FormHeading>

                    <FormParagraph>These terms and conditions outline the rules and regulations for the use of Empowered Conversation's Website, located at /empoweredconversation.com.</FormParagraph>

                    <FormParagraph>By accessing this website we assume you accept these terms and conditions. Do not continue to use Empowered Conversation if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the <StyledA href="https://www.termsandconditionsgenerator.com">Terms And Conditions Generator</StyledA>.</FormParagraph>

                    <FormParagraph>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</FormParagraph>

                    <FormHeading><strong>Cookies</strong></FormHeading>

                    <FormParagraph>We employ the use of cookies. By accessing Empowered Conversation, you agreed to use cookies in agreement with the Empowered Conversation's Privacy Policy.</FormParagraph>

                    <FormParagraph>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</FormParagraph>

                    <FormHeading><strong>License</strong></FormHeading>

                    <FormParagraph>Unless otherwise stated, Empowered Conversation and/or its licensors own the intellectual property rights for all material on Empowered Conversation. All intellectual property rights are reserved. You may access this from Empowered Conversation for your own personal use subjected to restrictions set in these terms and conditions.</FormParagraph>

                    <FormParagraph>You must not:</FormParagraph>
                    <ul>
                        <FormListItem>Republish material from Empowered Conversation</FormListItem>
                        <FormListItem>Sell, rent or sub-license material from Empowered Conversation</FormListItem>
                        <FormListItem>Reproduce, duplicate or copy material from Empowered Conversation</FormListItem>
                        <FormListItem>Redistribute content from Empowered Conversation</FormListItem>
                    </ul>

                    <FormParagraph>This Agreement shall begin on the date hereof.</FormParagraph>

                    <FormParagraph>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Empowered Conversation does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Empowered Conversation,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Empowered Conversation shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</FormParagraph>

                    <FormParagraph>Empowered Conversation reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</FormParagraph>

                    <FormParagraph>You warrant and represent that:</FormParagraph>

                    <ul>
                        <FormListItem>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</FormListItem>
                        <FormListItem>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</FormListItem>
                        <FormListItem>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</FormListItem>
                        <FormListItem>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</FormListItem>
                    </ul>

                    <FormParagraph>You hereby grant Empowered Conversation a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</FormParagraph>

                    <FormHeading><strong>Hyperlinking to our Content</strong></FormHeading>

                    <FormParagraph>The following organizations may link to our Website without prior written approval:</FormParagraph>

                    <ul>
                        <FormListItem>Government agencies;</FormListItem>
                        <FormListItem>Search engines;</FormListItem>
                        <FormListItem>News organizations;</FormListItem>
                        <FormListItem>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</FormListItem>
                        <FormListItem>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</FormListItem>
                    </ul>

                    <FormParagraph>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</FormParagraph>

                    <FormParagraph>We may consider and approve other link requests from the following types of organizations:</FormParagraph>

                    <ul>
                        <FormListItem>commonly-known consumer and/or business information sources;</FormListItem>
                        <FormListItem>dot.com community sites;</FormListItem>
                        <FormListItem>associations or other groups representing charities;</FormListItem>
                        <FormListItem>online directory distributors;</FormListItem>
                        <FormListItem>internet portals;</FormListItem>
                        <FormListItem>accounting, law and consulting firms; and</FormListItem>
                        <FormListItem>educational institutions and trade associations.</FormListItem>
                    </ul>

                    <FormParagraph>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Empowered Conversation; and (d) the link is in the context of general resource information.</FormParagraph>

                    <FormParagraph>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</FormParagraph>

                    <FormParagraph>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Empowered Conversation. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</FormParagraph>

                    <FormParagraph>Approved organizations may hyperlink to our Website as follows:</FormParagraph>

                    <ul>
                        <FormListItem>By use of our corporate name; or</FormListItem>
                        <FormListItem>By use of the uniform resource locator being linked to; or</FormListItem>
                        <FormListItem>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</FormListItem>
                    </ul>

                    <FormParagraph>No use of Empowered Conversation's logo or other artwork will be allowed for linking absent a trademark license agreement.</FormParagraph>

                    <FormHeading><strong>iFrames</strong></FormHeading>

                    <FormParagraph>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</FormParagraph>

                    <FormHeading><strong>Content Liability</strong></FormHeading>

                    <FormParagraph>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</FormParagraph>

                    <FormHeading><strong>Your Privacy</strong></FormHeading>

                    <FormParagraph>Please read Privacy Policy</FormParagraph>

                    <FormHeading><strong>Reservation of Rights</strong></FormHeading>

                    <FormParagraph>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</FormParagraph>

                    <FormHeading><strong>Removal of links from our website</strong></FormHeading>

                    <FormParagraph>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</FormParagraph>

                    <FormParagraph>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</FormParagraph>

                    <FormHeading><strong>Disclaimer</strong></FormHeading>

                    <FormParagraph>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</FormParagraph>

                    <ul>
                        <FormListItem>limit or exclude our or your liability for death or personal injury;</FormListItem>
                        <FormListItem>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</FormListItem>
                        <FormListItem>limit any of our or your liabilities in any way that is not permitted under applicable law; or</FormListItem>
                        <FormListItem>exclude any of our or your liabilities that may not be excluded under applicable law.</FormListItem>
                    </ul>

                    <FormParagraph>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</FormParagraph>

                    <FormParagraph>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</FormParagraph>
                    </div>
            </LiabilityContainer>
            <AcceptDiv>
                <FormParagraph>You understand that by clicking on the "I Accept & Continue" button below, you are agreeing to Empowered Conversation's Terms and Conditions of using this tool.</FormParagraph> 
            </AcceptDiv>
            <Link to='/form/submit'><StyledButton>I Accept & Continue</StyledButton></Link>
        </div>
        </CSSTransition>
    );
}

export default LiabilityWaiver;