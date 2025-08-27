import React from 'react';
import {Box} from '../styles/box';
import {Svg} from '../styles/svg';

export const EngineeringIcon = () => {
   return (
      <Box
         css={{
            width: 'auto',
            height: 'fit-content',
         }}
      >
         <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            {/* Simple gear icon */}
            <Svg.Path
               css={{
                  fill: '$orange600',
               }}
               d="M9 12c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3-3 1.35-3 3zm3-8c-.55 0-1 .45-1 1v1.79c-2.78.14-5 2.36-5.14 5.14H5c-.55 0-1 .45-1 1s.45 1 1 1h1.86c.14 2.78 2.36 5 5.14 5.14V20c0 .55.45 1 1 1s1-.45 1-1v-1.93c2.78-.14 5-2.36 5.14-5.14H20c.55 0 1-.45 1-1s-.45-1-1-1h-1.93c-.14-2.78-2.36-5-5.14-5.14V5c0-.55-.45-1-1-1z"
            />
            {/* Inner circle for accent */}
            <Svg.Path
               css={{
                  fill: '$orange400',
               }}
               d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
         </Svg>
      </Box>
   );
};
