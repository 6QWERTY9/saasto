import { Layoutpage } from "@shared/components/layoutPage"


import { Herosection } from "./sections/heroSection"
import { Benefitssection } from "./sections/benefitsSection"

export const Home = () => {
    return (
        <Layoutpage>
            <Herosection/>
            <Benefitssection/>
        </Layoutpage>
    )
}