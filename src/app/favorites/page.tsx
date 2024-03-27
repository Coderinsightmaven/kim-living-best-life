import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import ExpandableFoodSection from '@/components/ExpandableToolsSection';


export const metadata = {
  title: 'My Favorites',
  description: 'Things I eat, apps I use, and other things I recommend!',
};

export default function Favorites() {
  return (
    <SimpleLayout
      title="Things I eat, apps I use, and other things I recommend!"
      intro="I get asked a lot about the things I use to stay motivated, stay productive, and stay energized. Here’s a list of what I eat, the apps I use, and what GLP1 Supplements I use daily that help me get through my day!"
    >
      <div>
        <ExpandableFoodSection title="Foods" />
        {/* You can add more sections here as needed */}
      </div>
    </SimpleLayout>
  );
}

