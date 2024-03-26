import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Favorites',
  description: 'Things I eat, apps I use, and other things I recommend!',
}

export default function Favorites() {
  return (
    <SimpleLayout
      title="Things I eat, apps I use, and other things I recommend!"
      intro="I get asked a lot about the things I use to stay motivated, stay productive, and stay energized. Here’s a list of what I eat, the apps I use, and what GLP1 Supplements I use daily that help me get through my day!"
    >
      <div className="space-y-20">
        <ToolsSection title="Supplements">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Apps">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          
        </ToolsSection>
        <ToolsSection title="Life Quotes">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
