import React from 'react'
import { PinboardEmbed } from "@thoughtspot/visual-embed-sdk/react";

export default function Liveboard() {
   return (
       <div>
           <h1>Liveboard</h1>
           <p>
            This Search uses the Sales Performance liveboard which comes with the ThoughtSpot Free Trial account. 
            You can also use the <a href="https://try.thoughtspot.cloud/#/develop/playground/pinboard" target="_blank">Developer Playground</a> to configure additional parameters. 
           </p>
           <p>&nbsp;</p>
           <PinboardEmbed frameParams={{height: "80vw"}}
                       pinboardId={"200d4f78-07ad-407e-b35b-191a5cf489b6"}/>
       </div>
   )
}