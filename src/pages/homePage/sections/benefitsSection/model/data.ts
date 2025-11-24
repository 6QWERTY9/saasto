import type { generalDataProps } from "@shared/genralTypes";


export const benefitsData: generalDataProps = {
    title: 'Some excellent features for you',
    paragraph: 'An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula ',

    benefits: [
        {
            title: 'Preset List of Task',
            description: 'Make bill payments easily using the wallet app', 
            direction: 'column', 
            background: '#70D0DC', 
            iconProps: {size: 'medium', background: '#FFFFFF80', src: '/benefits_task_list.svg'} 
        },
        {
            title: 'Reminder of Task',
            description: 'Make bill payments easily using the wallet app', 
            direction: 'column', 
            background: '#7562E0', 
            iconProps: {size: 'medium', background: '#FFFFFF80', src: '/benefits_bell.svg'} 
        },
        {
            title: 'Complecation Report',
            description: 'Make bill payments easily using the wallet app', 
            direction: 'column', 
            background: '#FA865F', 
            iconProps: {size: 'medium', background: '#FFFFFF80', src: '/benefits_agenda.svg'} 
        },
    ]
}
