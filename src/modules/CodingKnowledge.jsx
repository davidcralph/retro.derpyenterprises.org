import React from 'react';
import { Container } from 'nes-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faJs, faReact, faCss3, faSass, faHtml5, faPython, faGithub, faGitlab, faBitbucket, faLinux, faWindows, faMarkdown, faGit, faNpm, faDiscord, faDigitalOcean, faGitkraken, faRaspberryPi, faYarn, faUbuntu } from '@fortawesome/free-brands-svg-icons';

export default class CodingKnowledge extends React.Component {
  render() {
    return <Container className='container is-dark icon'>
        <FontAwesomeIcon data-tip='Node.js' size='3x' icon={faNode}/>
        <FontAwesomeIcon data-tip='JavaScript' size='3x' icon={faJs}/>
        <FontAwesomeIcon data-tip='React' size='3x' icon={faReact}/>
        <FontAwesomeIcon data-tip='CSS3' size='3x' icon={faCss3}/>
        <FontAwesomeIcon data-tip='React' size='3x' icon={faSass}/>
        <FontAwesomeIcon data-tip='HTML5' size='3x' icon={faHtml5}/>
        <FontAwesomeIcon data-tip='Python' size='3x' icon={faPython}/>
        <FontAwesomeIcon data-tip='Markdown' size='3x' icon={faMarkdown}/>
        <FontAwesomeIcon data-tip='NPM' size='3x' icon={faNpm}/>
        <FontAwesomeIcon data-tip='Yarn' size='3x' icon={faYarn}/>
        <FontAwesomeIcon data-tip='Windows' size='3x' icon={faWindows}/>
        <FontAwesomeIcon data-tip='Linux' size='3x' icon={faLinux}/>
        <FontAwesomeIcon data-tip='Ubuntu' size='3x' icon={faUbuntu}/>
        <FontAwesomeIcon data-tip='Raspberry Pi' size='3x' icon={faRaspberryPi}/>
        <FontAwesomeIcon data-tip='Git' size='3x' icon={faGit}/>
        <FontAwesomeIcon data-tip='GitHub' size='3x' icon={faGithub}/>
        <FontAwesomeIcon data-tip='GitLab' size='3x' icon={faGitlab}/>
        <FontAwesomeIcon data-tip='BitBucket' size='3x' icon={faBitbucket}/>
        <FontAwesomeIcon data-tip='GitKraken' size='3x' icon={faGitkraken}/>
        <FontAwesomeIcon data-tip='DigitalOcean' size='3x' icon={faDigitalOcean}/>
        <FontAwesomeIcon data-tip='Discord' size='3x' icon={faDiscord}/>
    </Container>;
  }
}