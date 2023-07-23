import React from 'react'
import { AboutMe } from './AboutMe';
import { TechnicalKnowledge } from './TechnicalKnowledge';
import { Projects } from './Projects';
import { WorkExp } from './WorkExp';
import { Language } from './Language';
import { Social } from './Social';
import { Strip } from './Strip';

export const Profile = () => {
    return (
        <>
            <Strip />
            <AboutMe />
            <TechnicalKnowledge />
            <Projects />
            <WorkExp />
            <Language />
            <Social />

        </>
    )
}
