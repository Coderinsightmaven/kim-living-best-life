import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  TiktokIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Kimberly Marincik. Living my best life, healthy, happy, and at
            peace.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hi, my name is Kim. I am 45 years old and a single mom to two boys
              living in Colorado who have a rare and incurable genetic
              condition, I also have this rare and incurable disease. It’s
              called Danon Disease. I am an advocate for our disease and speak
              at many events for rare disease, and heart patients around the US.
              I run a nonprofit foundation for <Link className="text-sky-500 hover:text-blue-800 hover:text-lg hover:text-bold" href="https://www.danonfoundation.org" target="_blank">Danon Disease</Link> and a support group
              on <Link className="text-sky-500 hover:text-blue-800 hover:text-lg hover:text-bold" href="https://www.facebook.com/groups/92786839826/" target="_blank" >Facebook</Link>. I have
              fought this disease my entire life. I am a fighter and do not give
              up easily.
            </p>
            <p>
              I am also a big lover of Hope and Faith. This has kept me afloat
              the last 19years as I found out what our rare disease was called
              and had to face many days of worry, hurt, sadness, anger, pain,
              anxiety and loss of that hope and faith. I have pulled myself out
              of depression more than a few times going through this alone. I
              have been through more than anyone should in one lifetime but you
              will never find me giving up. I will always stand up and have that
              hope and faith bring me back to reality. It is a beautiful thing
              to be alive and each day I wake up I thank the lord and keep
              pushing. Follow my website for updates and stories each week of
              this crazy life of mine.{' '}
            </p>
            <p>
              A few years ago, my youngest son got a heart transplant, he was
              17. My oldest son got gene therapy; he was 18. Both boys are now
              19 and 22 and stable – not cured. They are what keep me going as a
              single mom. I am working a full-time job at home and as of late
              learning to be a content creator on Tik Tok. I have so much to
              share with you all and plan to do it here. I want to share my
              favorites, my quotes, my hopes and dreams, my health journey with
              a GLP1 med, my VSG journey in 2022 and life in general. I want to
              reach everyone I can with my story and let them know whatever you
              are going through there is always someone else out there with it
              worse. So, no matter what, wake up, dress up and smile. Life is
              worth living!!!{' '}
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.tiktok.com/@livingmybestlife4478"
              icon={TiktokIcon}
            >
              Follow me on Tiktok
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/livingmybestlife4478/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow me on Instagram
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
