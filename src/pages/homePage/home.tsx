import { Layoutpage } from "@shared/components/layoutPage"


import { Herosection } from "./sections/heroSection"
import { Benefitssection } from "./sections/benefitsSection"
import { AnalyticsSection } from "./sections/analyticsSection"

export const Home = () => {
    return (
        <Layoutpage>
            <Herosection/>
            <Benefitssection/>
            <AnalyticsSection/>
        </Layoutpage>
    )
}