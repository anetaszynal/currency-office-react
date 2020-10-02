import React from 'react';
import {useCurrentDate} from './useCurrentDate';
import {formatDate} from '../../lib/utils';
import {Paragraph} from '../Styles/styled';

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Paragraph date>
            Today is {" "} {formatDate(date)}
        </Paragraph>
    );
};

