import React from 'react';
import {Svg} from '../styles/svg';

export const TechIcon = () => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="32"
         height="32"
         fill="none"
         viewBox="0 0 24 24"
      >
         <Svg.Path
            css={{
               fill: '$purple600',
            }}
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
         />
         <Svg.Path
            css={{
               fill: '$purple400',
            }}
            d="M14 2v6h6"
         />
         <Svg.Path
            css={{
               fill: '$white',
            }}
            d="M16 13H8v-2h8v2zm0 2H8v2h8v-2z"
         />
      </Svg>
   );
};
