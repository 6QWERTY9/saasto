import type { generalDataProps } from "@shared/genralTypes";

export const analyticSectionData: generalDataProps = {
    title: 'Analytics & Reporting Breakdown',
    paragraph: 'An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula ',

    benefits: [
        {
            title: 'Automatic event tracking',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#FA855C', size: 'medium', src: '/analytic_timer.svg'},
            background: 'none'
        },
        {
            title: 'Customizable dashboard',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#7AD6E1', size: 'medium', src: '/analytic_calendar.svg'},
            background: 'none'
        },
        {
            title: 'Statistics retroactively',
            description: 'Time Tracking is never been easier. Just let the stopwatch run',
            direction: 'row',
            iconProps: {background: '#FFC954', size: 'medium', src: '/analytic_dashboard.svg'},
            background: 'none'
        },
    ]
}