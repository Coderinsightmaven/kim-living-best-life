'use client'

import React, { useState } from 'react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { MyFoods, Mysupplements } from '@/components/myfoods';

const Tool = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Card as="li">
      <Card.Description>{children}</Card.Description>
    </Card>
  );
};

const ExpandableFoodSection = ({
  title,
}: {
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <div role="button" onClick={toggleSection} className="cursor-pointer font-bold">
        {title}
      </div>
      {isOpen && (
        <ul role="list" className="space-y-16">
          <Tool>
            <MyFoods />
          </Tool>
        </ul>
      )}
    </Section>
    
  );
};

export default ExpandableFoodSection;



