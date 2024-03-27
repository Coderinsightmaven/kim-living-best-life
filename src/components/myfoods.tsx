'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const products = [
  {
    ProductName: 'Ratio Protein Yogurt',
    ProductImage:
      'https://images.albertsons-media.com/is/image/ABS/970049716-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
  },
  {
    ProductName: 'FairLife Lactose Free Fat Free Ultra Filtered Milk',
    ProductImage:
      'https://i5.walmartimages.com/seo/fairlife-Lactose-Free-Fat-Free-Ultra-Filtered-Milk-52-fl-oz_1766372f-7a84-4a55-9efd-225969a68785.6dce97f4760bd333c9b9a7d4f0e38b40.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  },
  {
    ProductName: "Rao's Homemade Tomato Basil Spaghetti Sauce",
    ProductImage:
      'https://i5.walmartimages.com/seo/Rao-s-Homemade-Tomato-Basil-Spaghetti-Sauce-Low-Carb-Keto-Friendly-24-Oz_0d5b31b6-afb1-4775-b65f-9c97679e9aa8.78160d8a29bc24cea5b14971bbe088ae.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'BodyArmor Lyte Sports Drink',
    ProductImage:
      'https://i5.walmartimages.com/seo/BODYARMOR-LYTE-Sports-Drink-Blueberry-Pomegranate-16-Fl-Oz-1-count_3d8e9c4b-388a-428c-baf8-948e06da1bf9.2286b6e4f11c9b8f98a50e0b97d25f56.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'Frigo Cheese Heads Original Mozzarella String Cheese',
    ProductImage:
      'https://i5.walmartimages.com/seo/Frigo-Cheese-Heads-Original-Mozzarella-String-Cheese-Cheese-Snacks-36-oz-36-Count_021ae36a-24fb-4d4b-a1a8-a5335d9fa846.fcb191602ed1fda4405e58f4f248c7af.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
  },
  {
    ProductName: 'The Berry that cares 1 U.S. Dry Pint (551 ml)',
    ProductImage:
      'https://i5.walmartimages.com/seo/Fresh-Blueberries-18-oz-Container_66ee489f-0ddc-43b4-99ce-07c0a7bf886e_1.b805f72f3cafb54c77a036a6ab6f4ed4.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'Good Culture Classic Simply Cottage Cheese Tub',
    ProductImage:
      'https://i5.walmartimages.com/seo/Good-Culture-Classic-Simply-Cottage-Cheese-Tub-2-Milk-Fat-14-g-Protein-16-oz_f4e88661-8db7-4309-915d-5f1a29347ec7.3c7b4f43617225dce3698cfd3206f8d2.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'Sargento Balanced Breaks, Variety Snack Pack',
    ProductImage:
      'https://scene7.samsclub.com/is/image/samsclub/0004610035432_A?$DT_PDP_BB$',
  },
  {
    ProductName: 'Three Bridges Ham and Gruyere Egg Bites',
    ProductImage:
      'https://scene7.samsclub.com/is/image/samsclub/0074275334817_A?$DT_PDP_BB$',
  },
  {
    ProductName: "Member's Mark Honey Roasted Turkey Breast",
    ProductImage:
      'https://scene7.samsclub.com/is/image/samsclub/0019396832025_A?$DT_PDP_BB$',
  },
  {
    ProductName: 'Fairlife Nutrition Plan 30g Protein Shake, Chocolate',
    ProductImage:
      'https://scene7.samsclub.com/is/image/samsclub/0081162002218_A?$DT_PDP_BB$',
  },
  {
    ProductName: 'Built Puff Bars',
    ProductImage:
      'https://m.media-amazon.com/images/I/71ceQ7RSltL._SL1500_.jpg',
  },
  {
    ProductName: 'Nature Valley Protein Granola, Oats and Honey',
    ProductImage:
      'https://m.media-amazon.com/images/I/81CCp0QmNpL._SL1500_.jpg',
  },
  {
    ProductName: 'Barilla Protein + Farfalle Pasta',
    ProductImage:
      'https://i5.walmartimages.com/seo/Barilla-Protein-Farfalle-Pasta-14-5-Oz_65dd155a-4056-4821-bdf5-4f01a4b320a2.4b2dd50525fd845ddf55bc472c793870.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'The Only Bean Crunchy Roasted Vegan Keto Food',
    ProductImage:
      'https://i5.walmartimages.com/seo/The-Only-Bean-Crunchy-Roasted-Vegan-Keto-Food-10-Pack_6904a318-327f-453d-90d3-081f6417b9af.1b9fe8206c685126073f58ea0dc8ba79.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF',
  },
  {
    ProductName: 'StarKist Wild Caught Light Tuna',
    ProductImage:
      'https://m.media-amazon.com/images/I/81I-laID7aL._SL1500_.jpg',
  },
  {
    ProductName:
      'Chomps Mini Grass Fed Beef Jerky Meat Snack Sticks 0.5 Oz, Original Beef',
    ProductImage:
      'https://m.media-amazon.com/images/I/71Y8jMnY+mL._SL1500_.jpg',
  },
  {
    ProductName:
      "Trader Joe's Nuts, Roasted Salted, Cashew Pieces - Low Sodium",
    ProductImage: 'https://i.ebayimg.com/images/g/ga4AAOSwmV5kAORZ/s-l1600.jpg',
  },
  {
    ProductName: 'Spring Tree Pure Maple Syrup Bottle, 8.5 Fl Oz',
    ProductImage:
      'https://m.media-amazon.com/images/I/61i+wlgmz6L._SL1500_.jpg',
  },
  {
    ProductName:
      'Kodiak Cakes - Protein-Packed Muffin Mix Chocolate Chip & Blueberry',
    ProductImage:
      'https://m.media-amazon.com/images/I/615VxR8H4TL._SL1000_.jpg',
  },
  {
    ProductName: "Jack Link's Original Beef Jerky",
    ProductImage:
      'https://scene7.samsclub.com/is/image/samsclub/0001708287772_A?$DT_PDP_BB$',
  },
  {
    ProductName: "Lily's Milk Chocolate Style No Sugar Added, Sweets Bars",
    ProductImage:
      'https://m.media-amazon.com/images/I/71fGd2qMBML._SL1500_.jpg',
  },
  {
    ProductName: 'Kodiak Instant Oatmeal Packets, Maple Brown Sugar',
    ProductImage:
      'https://m.media-amazon.com/images/I/810fU50oJPL._SL1500_.jpg',
  },
  {
    ProductName: "Trader Joe's Just Chicken",
    ProductImage:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2023/11/Trader-Joes-Just-Chicken.jpg?quality=82&strip=all&w=640',
  },
  {
    ProductName: 'Just Bare Lightly Breaded Chicken Breast',
    ProductImage:
      'https://target.scene7.com/is/image/Target/GUEST_92d86ef8-2941-465d-929f-a87044545488?wid=488&hei=488&fmt=pjpeg',
  },
]

export function MyFoods() {
  return (
    <div className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {products.map((product) => (
              <Disclosure as="div" key={product.ProductName} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="text-base font-semibold leading-7">
                          {product.ProductName}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <Image
                        src={product.ProductImage}
                        alt={product.ProductName}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const supplements = [
  {
    SupplementName:
      'MaryRuth Organics Nighttime Liquid Multimineral Sleep Supplement',
    SupplementImage:
      'https://m.media-amazon.com/images/I/81gQ1OWRdbL._AC_SL1500_.jpg',
  },
  {
    SupplementName: 'Equate - Stool Softener 100 mg',
    SupplementImage:
      'https://m.media-amazon.com/images/I/7197gvznfUL._AC_SL1500_.jpg',
  },
  {
    SupplementName: 'Nutricost Cissus Quadrangularis 600mg',
    SupplementImage:
      'https://m.media-amazon.com/images/I/610nmvwUqVL._AC_SL1500_.jpg',
  },
  {
    SupplementName:
      'Nordic Naturals Vitamin D3 + K2 Gummies, Pomegranate - 60 Gummies',
    SupplementImage:
      'https://m.media-amazon.com/images/I/61zkoxQ6isL._AC_SL1500_.jpg',
  },
  {
    SupplementName: 'Source Naturals Essential Enzymes 500mg',
    SupplementImage:
      'https://m.media-amazon.com/images/I/71fYJVSxl7L._AC_SL1500_.jpg',
  },
  {
    SupplementName:
      'Bloom Nutrition Greens & Superfoods Powder, Mixed Berry, 25 Servings',
    SupplementImage:
      'https://m.media-amazon.com/images/I/61OQcccGwAL._AC_SL1050_.jpg',
  },
  {
    SupplementName:
      'Ultima Replenisher Daily Electrolyte Drink Mix Grape, 20 Stickpacks',
    SupplementImage:
      'https://m.media-amazon.com/images/I/61dh1Eqvl8L._SL1500_.jpg',
  },
]

export function Mysupplements() {
  return (
    <div className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {supplements.map((supplement) => (
              <Disclosure
                as="div"
                key={supplement.SupplementName}
                className="pt-6"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="text-base font-semibold leading-7">
                          {supplement.SupplementName}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <Image
                        src={supplement.SupplementImage}
                        alt={supplement.SupplementName}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
