import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetwork = [
        {
            name: "Github",
            link: "",
            logo: logoGithub,
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/andrea-rosalin-m-6747532b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BO6hSvQi%2BSceOSdw8XWUItA%3D%3D",
            logo: logoLinkedin,
        },
        {
            name: "Github",
            link: "https://github.com/andru299",
            logo: logoGithub,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/@andru299",
            logo: logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, I'm</p>
                        <p>Andrea Méndez</p>
                        <p>Frontend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Marketing Digital
                    </S.DescriptionText>
                </S.ContainerText>
                <S.ContainerIcons>
                    {socialNetwork.map((network, index) => (
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name} />
                        </a>
                    ))}
                </S.ContainerIcons>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};

export default AboutMe;
