import React from 'react';
import {Svg} from '../styles/svg';

export const ConsultingIcon = () => {
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
               fill: '$blue600',
            }}
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.5 9c.83 0 1.5-.67 1.5-1.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 6 16.5 6 15 6.67 15 7.5 15.67 9 16.5 9zm-4.5 6c-2 0-3.6-1.2-4.24-2.84-.13-.33.08-.66.44-.66h7.6c.36 0 .57.33.44.66C15.6 13.8 14 15 12 15z"
         />
      </Svg>
   );
};
