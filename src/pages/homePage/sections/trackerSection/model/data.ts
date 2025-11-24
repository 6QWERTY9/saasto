import type { generalDataProps } from "@shared/genralTypes";

export const trackerSectionData: generalDataProps = {
    title: 'How our Tracker work for you',
    paragraph: 'An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula ',

    benefits: [
        {
            title: 'Time Tracking',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#5BC17F', size: 'large', src: '/tracker_timer.svg'},
            background: 'none'
        },
        {
            title: 'Expenses',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#FE6292', size: 'large', src: '/tracker_hourglass.svg'},
            background: 'none'
        },
        {
            title: 'Budget controlling',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#6B72FF', size: 'large', src: '/tracker_wallet.svg'},
            background: 'none'
        },
    ]
}