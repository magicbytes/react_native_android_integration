import React from "react"
import { AppRegistry, ScrollView } from "react-native"

import TutorialCarousel from "./components/TutorialCarousel/tutorialCarousel"

const CCMScreen = (): React.ReactElement => {
    return (
        <ScrollView>
            <TutorialCarousel carouselType="online" title="online" />
            <TutorialCarousel carouselType="offline" title="offline" />
            <TutorialCarousel carouselType="alo" title="alo" />
            <TutorialCarousel carouselType="ebon" title="ebon" />
        </ScrollView>
    )
}
export default CCMScreen

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => CCMScreen,
);
