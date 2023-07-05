import {surpriseMePrompts} from '../constants';


export function getRandomPrompt(promt){
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.lemgth);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt ===prompt) return getRandomPrompt(prompt);
    return randomPrompt
}