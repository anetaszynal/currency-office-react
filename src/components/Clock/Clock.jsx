import React from 'react';
import { SectionParagraph } from '../Section/styled';
import { useCurrentDate } from './useCurrentDate';
import { formatedDate } from '../../lib/utils';

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <SectionParagraph date>
      Dzisiaj jest {" "} {formatedDate(date)}
    </SectionParagraph>
  );
};

