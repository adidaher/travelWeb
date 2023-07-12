import DistenationData from "./DistenationData";
import "./Distenations.css"

import Mountain1 from "../../assests/1.jpg"
import Mountain2 from "../../assests/2.jpg"
import Mountain3 from "../../assests/5.jpg"
import Mountain4 from "../../assests/6.jpg"

import React from 'react'

function Distentaions() {
  return (
    <div className="destinations">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opertunity to see a lot, whitin a time frame</p>
 <DistenationData 
 heading="Taal Volcano, Batangas"
  text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
  image1={Mountain1}
  image2={Mountain2}
  cName="first-des"/>
  <DistenationData 
 heading="Mt. Daguldul, Batangas"
  text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
  image1={Mountain3}
  image2={Mountain4}
  cName="first-des-reverse"/>
    </div>
  )
}

export default Distentaions ;

