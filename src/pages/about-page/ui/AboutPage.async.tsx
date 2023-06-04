import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await import('./AboutPage'))

const test = () => {
    const check = 1;
    const l = 2;
}
