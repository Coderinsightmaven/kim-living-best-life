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
        <ToolsSection title="Foods">
          <Tool title="Ratio Protein Yogurt">
            <img
              className="pb-2"
              src="https://images.albertsons-media.com/is/image/ABS/970049716-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
            />
            Not only is it delicious but it is high in protein and low in sugar.
            It's a great snack to have in between meals or as a dessert.
          </Tool>
          <Tool title="FairLife Lactose Free Fat Free Ultra Filtered Milk">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/fairlife-Lactose-Free-Fat-Free-Ultra-Filtered-Milk-52-fl-oz_1766372f-7a84-4a55-9efd-225969a68785.6dce97f4760bd333c9b9a7d4f0e38b40.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            />
            I love this milk because it is lactose-free and high in protein.
          </Tool>
          <Tool title="Rao's Homemade Tomato Basil Spaghetti Sauce">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/Rao-s-Homemade-Tomato-Basil-Spaghetti-Sauce-Low-Carb-Keto-Friendly-24-Oz_0d5b31b6-afb1-4775-b65f-9c97679e9aa8.78160d8a29bc24cea5b14971bbe088ae.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
            I love this sauce because it is low in carbs and tastes delicious.
          </Tool>
          <Tool title="BodyArmor Lyte Sports Drink">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/BODYARMOR-LYTE-Sports-Drink-Blueberry-Pomegranate-16-Fl-Oz-1-count_3d8e9c4b-388a-428c-baf8-948e06da1bf9.2286b6e4f11c9b8f98a50e0b97d25f56.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
          </Tool>
          <Tool title="Frigo Cheese Heads Original Mozzarella String Cheese">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/Frigo-Cheese-Heads-Original-Mozzarella-String-Cheese-Cheese-Snacks-36-oz-36-Count_021ae36a-24fb-4d4b-a1a8-a5335d9fa846.fcb191602ed1fda4405e58f4f248c7af.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            />
          </Tool>
          <Tool title="The Berry that cares 1 U.S. Dry Pint (551 ml)">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/Fresh-Blueberries-18-oz-Container_66ee489f-0ddc-43b4-99ce-07c0a7bf886e_1.b805f72f3cafb54c77a036a6ab6f4ed4.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
          </Tool>
          <Tool title="Good Culture Classic Simply Cottage Cheese Tub">
            <img
              className="pb-2"
              src="https://i5.walmartimages.com/seo/Good-Culture-Classic-Simply-Cottage-Cheese-Tub-2-Milk-Fat-14-g-Protein-16-oz_f4e88661-8db7-4309-915d-5f1a29347ec7.3c7b4f43617225dce3698cfd3206f8d2.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
          </Tool>

          <Tool title="Sargento Balanced Breaks, Variety Snack Pack">
            <img
              className="pb-2"
              src="https://scene7.samsclub.com/is/image/samsclub/0004610035432_A?$DT_PDP_BB$"
            />
            <img
              alt="Sargento Balanced Breaks, Variety Snack Pack (12 ct.)"
              src="https://scene7.samsclub.com/is/image/samsclub/0004610030268_A?$DT_PDP_BB$"
            />
          </Tool>
          <Tool title="Three Bridges Ham and Gruyere Egg Bites">
            <img
              className="pb-2"
              src="https://scene7.samsclub.com/is/image/samsclub/0074275334817_A?$DT_PDP_BB$"
            />
          </Tool>
          <Tool title="Member's Mark Honey Roasted Turkey Breast">
            <img
              className="pb-2"
              alt="Member's Mark Honey Roasted Turkey Breast, Sliced (1 lb. 6 oz.)"
              src="https://scene7.samsclub.com/is/image/samsclub/0019396832025_A?$DT_PDP_BB$"
            />
          </Tool>
          <Tool title="Fairlife Nutrition Plan 30g Protein Shake, Chocolate">
            <img
              className="pb-2"
              alt="Fairlife Nutrition Plan 30g Protein Shake, Chocolate (11.5 fl. oz., 12 pk.)"
              src="https://scene7.samsclub.com/is/image/samsclub/0081162002218_A?$DT_PDP_BB$"
            />
          </Tool>
          <Tool title="Built Puff Bars">
            <img
              className="pb-2"
              alt="Built Puff Bars"
              src="https://m.media-amazon.com/images/I/71ceQ7RSltL._SL1500_.jpg"
            />
            Flavors I like of the Built Puff Bars: Churro and Brownie Batter
          </Tool>

          <Tool title="Nature Valley Protein Granola, Oats and Honey">
            <img
              className="pb-2"
              alt="Nature Valley Protein Granola, Oats and Honey"
              src="https://m.media-amazon.com/images/I/81CCp0QmNpL._SL1500_.jpg"
            />
          </Tool>
          <Tool title="Barilla Protein+ Farfalle Pasta">
            <img
              className="pb-2"
              alt="Barilla Protein+ Farfalle Pasta"
              src="https://i5.walmartimages.com/seo/Barilla-Protein-Farfalle-Pasta-14-5-Oz_65dd155a-4056-4821-bdf5-4f01a4b320a2.4b2dd50525fd845ddf55bc472c793870.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
          </Tool>
          <Tool title="The Only Bean Crunchy Roasted Vegan Keto Food">
            <img
              className="pb-2"
              alt="The Only Bean Crunchy Roasted Vegan Keto Food"
              src="https://i5.walmartimages.com/seo/The-Only-Bean-Crunchy-Roasted-Vegan-Keto-Food-10-Pack_6904a318-327f-453d-90d3-081f6417b9af.1b9fe8206c685126073f58ea0dc8ba79.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF"
            />
          </Tool>
        </ToolsSection>

        {/* foods above this line */}

        <ToolsSection title="Supplements">
          <Tool title="MaryRuth Organics Nighttime Liquid Multimineral Sleep Supplement">
            <img src="https://m.media-amazon.com/images/I/81gQ1OWRdbL._AC_SL1500_.jpg" />
          </Tool>
          <Tool title="Equate - Stool Softener 100 mg">
            <img src="https://m.media-amazon.com/images/I/7197gvznfUL._AC_SL1500_.jpg" />
          </Tool>
          <Tool title="Nutricost Cissus Quadrangularis 600mg">
            <img src="https://m.media-amazon.com/images/I/610nmvwUqVL._AC_SL1500_.jpg" />
          </Tool>
          <Tool title="Nordic Naturals Vitamin D3 + K2 Gummies, Pomegranate - 60 Gummies">
            <img src="https://m.media-amazon.com/images/I/61zkoxQ6isL._AC_SL1500_.jpg" />
          </Tool>
          <Tool title="Source Naturals Essential Enzymes 500mg">
            <img src="https://m.media-amazon.com/images/I/71fYJVSxl7L._AC_SL1500_.jpg" />
          </Tool>
          <Tool title="Bloom Nutrition Greens & Superfoods Powder, Mixed Berry, 25 Servings">
            <img src="https://m.media-amazon.com/images/I/61OQcccGwAL._AC_SL1050_.jpg" />
          </Tool>
          <Tool title="Ultima Replenisher Daily Electrolyte Drink Mix – Grape, 20 Stickpacks">
            <img src="https://m.media-amazon.com/images/I/61dh1Eqvl8L._SL1500_.jpg" />
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
