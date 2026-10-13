// PondCo guide content — original, evergreen pond-care writing.
// Sections: { h: heading, p: [paragraphs], ul: [bullet list] (optional) }

export const guides = [
  {
    slug: 'build-a-backyard-pond',
    title: "How to Build a Backyard Pond: A Beginner's Complete Guide",
    description:
      'Plan, dig, line, plumb, and stock your first backyard pond — with the sizing math, shelf depths, and cycling steps most guides skip.',
    eyebrow: 'Start Here · Build a Pond',
    heading: "How to Build a Backyard Pond: A Beginner's Complete Guide",
    intro:
      'A backyard pond is mostly earthmoving and patience, not magic. This guide walks the whole build in order — planning, digging, lining, plumbing, filling, and stocking — and flags the mistakes that are expensive to fix after the water goes in.',
    sections: [
      {
        h: 'Plan before you dig',
        p: [
          'Pick a spot you can see from where you actually sit — a pond you cannot see from the house gets neglected. Aim for roughly 4–6 hours of sun a day: enough for lilies and marginal plants, not so much that the water overheats and grows algae all summer.',
          'Avoid the lowest spot in the yard, where lawn runoff (and any fertilizer in it) drains straight into the pond. Keep clear of big tree roots and heavy autumn leaf fall if you can. Before you dig, call your local utility-locating service (811 in the US) — it is free and it is not optional. Finally, plan for electricity: your pump and filter need a GFCI-protected outdoor outlet nearby, ideally run by an electrician.',
        ],
      },
      {
        h: 'Choose the size and depth first',
        p: [
          'Depth matters more than surface area. A typical garden pond is dug in shelves, like an underwater wedding cake:',
        ],
        ul: [
          'Marginal shelf: 6–12 inches deep, around the edge, for potted marginal plants.',
          'Lily zone: 18–24 inches deep, for water lilies and submerged oxygenators.',
          'Fish zone: at least 24 inches deep so fish can escape summer heat and winter ice; 36 inches or more if you plan to keep koi.',
        ],
      },
      {
        h: 'Do the volume math now, not later',
        p: [
          'Your pond volume decides your pump, filter, and fish capacity, so estimate it before you buy anything. For a rectangular pond: length × width × average depth (all in feet) × 7.48 = gallons. For an oval or kidney shape, multiply the result by about 0.8. A 10 × 7 ft pond averaging 2 ft deep is roughly 10 × 7 × 2 × 7.48 ≈ 1,050 gallons — a comfortable size for a first pond with a few small fish.',
          'Err bigger if you are torn between two sizes. A larger volume of water changes temperature and chemistry more slowly, which makes it more forgiving of beginner mistakes.',
        ],
      },
      {
        h: 'Mark it, dig it, level it',
        p: [
          'Lay out the outline with a garden hose or rope and live with it for a day — you will move it. Dig the shelves in steps, sloping the walls slightly so the soil does not cave in, and remove every sharp stone and root end from the hole.',
          'The single most visible mistake in amateur ponds is an unlevel rim: water always finds its own level, so a rim that is 2 inches low on one side shows a 2-inch band of liner on the other. Check the rim with a long straight board and a spirit level, working around the whole edge, before any liner goes in.',
        ],
      },
      {
        h: 'Underlayment and liner',
        p: [
          'Line the hole with a protective underlayment (geotextile pond underlayment, or in a pinch old carpet or a layer of sand) so stones and roots cannot puncture the liner from below. Then drape the liner loosely across the hole with plenty of slack — never stretch it tight. As the pond fills, the water weight settles the liner into the shelves; pleat and fold the excess neatly in the corners rather than cutting it.',
          'For the liner itself, 45-mil EPDM rubber is the default recommendation for a permanent pond: flexible, fish-safe, and UV-stable. Leave at least 12 inches of liner overlapping the rim all the way around, and do not trim it until the pond has been full for a few days and everything has settled.',
        ],
      },
      {
        h: 'Edge it so the liner disappears',
        p: [
          'Hide the rim with stone, gravel, or planting, but keep one detail right: the liner edge must finish above the waterline, tucked behind the edging. If soil touches the water over the liner edge, it wicks pond water out like a lamp wick (capillary action) and you will chase a phantom "leak" that is really your edging drinking the pond.',
        ],
      },
      {
        h: 'Plumbing: pump, filter, and moving water',
        p: [
          'Put the pump at the opposite end from the waterfall or return so water circulates through the whole pond instead of short-circuiting. Route the flow through your filter before any waterfall. Flexible PVC pipe is easier to work with than rigid pipe in a garden, and a union fitting on the pump line will make future pump swaps a five-minute job instead of a plumbing project. If you add a skimmer, it goes on the downwind side, where the breeze pushes surface debris.',
          'Our pump-sizing guide walks through the flow and head-height math with worked examples — read it before buying, because the flow number printed on the box is measured under conditions your pond will never have.',
        ],
      },
      {
        h: 'Fill, dechlorinate, and cycle before fish',
        p: [
          'Fill the pond and add a dechlorinator that also neutralises chloramine if your tap water uses it (many municipal supplies do — check the product label). Then wait. A new pond has no biological filter yet: beneficial bacteria need roughly 4–6 weeks to colonise the filter media and convert toxic ammonia from fish waste into nitrite and then into much less harmful nitrate. This is the nitrogen cycle, and stocking fish before it establishes is the classic beginner disaster.',
          'Speed it up honestly: add plants right away (they do not care about the cycle), run the pump and filter continuously, and use a liquid test kit to watch ammonia and nitrite rise and fall. When both read zero for several days, the pond is ready for its first few fish.',
        ],
      },
      {
        h: 'Plant in zones',
        p: [
          'Plant each depth zone for its job: marginals (iris, rushes, pickerel) on the shelf in pots of heavy garden soil or aquatic compost; water lilies in the deep zone; submerged oxygenators loose or in pots on the bottom; and floating plants (water lettuce, water hyacinth) for surface shade in summer. Aim for plants to shade roughly 50–70% of the surface in summer — that shade is your cheapest algae control.',
        ],
      },
      {
        h: 'Stock slowly, and expect green water',
        p: [
          'Add a few small fish at a time, weeks apart, and feed lightly — uneaten food is tomorrow\'s algae. Nearly every new pond goes through a green-water phase in its first season while the ecosystem finds its balance. It is ugly and it is normal: keep the filter running, do not drain and refill (that just restarts the clock), and let the plants and bacteria catch up.',
        ],
      },
    ],
  },
  {
    slug: 'pond-algae-control',
    title: 'Pond Algae Control: Every Method, Ranked Honestly',
    description:
      'Green water, string algae, or surface film? Identify your algae first, then work the honest ranking — from free nutrient control to last-resort algaecides.',
    eyebrow: 'Fix a Problem',
    heading: 'Pond Algae Control: Every Method, Ranked Honestly',
    intro:
      'Algae is not a disease; it is a symptom. It blooms when a pond has more nutrients (fish waste, uneaten food, runoff, decaying leaves) and more light than its plants and filter can handle. Every method below is ranked by how well it addresses that cause — not by how quickly it makes the water look clear for a weekend.',
    sections: [
      {
        h: 'First: know which algae you have',
        p: [
          'The fix depends entirely on the type. Pea-soup green water is planktonic algae — single cells suspended in the water column. String algae (blanket weed) is the long, hair-like growth attached to rocks, liner, and waterfall stones; the water itself is often crystal clear. Surface films and mats are usually a mix of algae and trapped debris. A treatment that cures one type can be useless against another, which is why so many pond owners conclude that "nothing works."',
        ],
      },
      {
        h: 'The root cause, stated plainly',
        p: [
          'Algae eats dissolved nutrients — mainly nitrogen and phosphorus — and grows in proportion to how much food and sunlight it gets. Fish food is the biggest nutrient input in most garden ponds, followed by decaying leaves and plant matter, then fertiliser-laden runoff. Kill the algae without cutting its food supply and it simply grows back, which is the business model of half the products on the shelf.',
        ],
      },
      {
        h: '#1 — Cut the nutrient supply (free, and it actually works)',
        p: [
          'Feed fish only what they finish in about five minutes, and only once or twice a day in warm weather. Net out leaves and dead foliage before they rot on the bottom. Stop lawn fertiliser from washing in — a small berm or planting strip between lawn and pond pays for itself. Every handful of nutrients you keep out is algae that never grows. This is slow — expect weeks — but it is the only fix that lasts.',
        ],
      },
      {
        h: '#2 — Shade and plant competition',
        p: [
          'Plants are algae\'s direct competitors for the same nutrients, and floating leaves steal its sunlight. Aim for 50–70% of the surface covered by lily pads and floating plants in summer. A well-planted pond routinely "fixes itself" in late spring as the plants wake up and start out-eating the algae — which is why algae is worst in early spring, before the plants get going.',
        ],
      },
      {
        h: '#3 — Mechanical removal and filtration',
        p: [
          'String algae comes out by hand, with a brush, or with a toilet-brush-on-a-stick — unglamorous, immediate, and it physically exports nutrients from the pond (compost it away from the water). Keep skimmer baskets emptied and filter media rinsed (in a bucket of pond water, not tap water, to protect the bacteria) so trapped waste leaves the system instead of dissolving back in.',
        ],
      },
      {
        h: '#4 — Barley straw (a preventive, not a cure)',
        p: [
          'As barley straw decomposes in oxygenated water it is widely reported to inhibit new algae growth. The honest summary: the evidence is mixed, it takes several weeks to start working, it does nothing to algae already present, and a rotting bale consumes oxygen while it works. If you use it, start early in spring, use loose straw in a mesh bag near moving water, and replace it about every six months. Barley extract is the same idea in a faster, pricier form.',
        ],
      },
      {
        h: '#5 — UV clarifier (superb for green water, useless for string algae)',
        p: [
          'A UV clarifier passes pond water over an ultraviolet lamp; the UV clumps planktonic algae together so the filter can catch it, clearing pea-soup water — often within one to two weeks. It cannot touch string algae, because string algae never flows through the unit. It also does not remove nutrients, so the underlying cause remains. Size the unit to your pond, respect its maximum flow rate (water that rushes past gets under-dosed), and replace the bulb roughly every 12 months — the lamp still glows long after its UV output has faded.',
        ],
      },
      {
        h: '#6 — Algaecides (last resort, handle with care)',
        p: [
          'Chemical algaecides kill algae fast — and a pond full of suddenly dead algae is a pond full of rotting material that consumes oxygen as it decays. Fish kills after algaecide treatment are usually oxygen crashes, not poisoning. If you use one: follow the label exactly, treat part of the pond rather than all of it, run aeration hard, remove dead algae as it loosens, and never treat the whole pond on a hot, still day. Some products are unsafe with certain fish or invertebrates — the label, not the shop shelf, is the authority.',
        ],
      },
      {
        h: 'What does not work',
        p: [
          'Magnetic and electronic "descalers" have no credible mechanism for pond algae. Copper-based ionisers can suppress algae but copper accumulates and is toxic to fish and invertebrates at levels not far above the effective dose — a narrow, risky trade. Blue dye is cosmetic shade in a bottle; it can help marginally as part of a plan but feeds nothing and fixes nothing. And draining, scrubbing, and refilling resets your pond to day one: the algae returns on schedule because the nutrient supply never changed.',
        ],
      },
      {
        h: 'A realistic timeline',
        p: [
          'Work the ranking top-down: fix feeding and debris this week, get plant coverage up this month, add UV only if green water persists, and judge the result in weeks, not days. A balanced pond is not sterile — a light fuzz of algae on rocks is normal and is food and habitat. The goal is clear-enough water and healthy fish, not an outdoor swimming pool.',
        ],
      },
    ],
  },
]

guides.push(
  {
    slug: 'size-a-pond-pump',
    title: 'How to Size a Pond Pump (With the Math)',
    description:
      'Pond volume, turnover rate, and head height — the three numbers that decide your pump, with worked examples and the running-cost formula.',
    eyebrow: 'Gear & Math',
    heading: 'How to Size a Pond Pump (With the Math)',
    intro:
      'The flow rate printed on a pump box is measured at zero lift — pumping water straight out of the top of the pump. Your pond will never give a pump those conditions. Here is the three-step method (volume, turnover, head) that lands you on the right pump from the manufacturer\'s own chart.',
    sections: [
      {
        h: 'Step 1 — Calculate your pond volume',
        p: [
          'For a rectangular pond: length × width × average depth (feet) × 7.48 = gallons. For oval or kidney shapes, multiply by about 0.8. Two examples:',
        ],
        ul: [
          'Small water garden: 8 ft × 6 ft × 1.5 ft average depth × 7.48 ≈ 540 gallons.',
          'Medium fish pond: 11 ft × 8 ft × 2 ft average depth × 7.48 ≈ 1,320 gallons.',
        ],
      },
      {
        h: 'Step 2 — Pick a turnover target',
        p: [
          'Turnover means passing the whole pond volume through the filter once. Sensible targets:',
        ],
        ul: [
          'Plant pond, no fish: once every 2 hours is plenty.',
          'Garden pond with a few fish: once every 1–2 hours.',
          'Heavily stocked or koi pond: once an hour or faster.',
        ],
      },
      {
        h: 'Step 3 — Add up the head height',
        p: [
          'Head is everything the pump fights against. Start with static head: the vertical distance from the pond\'s water surface to the highest point the water reaches (usually the top of the waterfall). Then add friction: as a rule of thumb, every 10 ft of tubing adds roughly 1 ft of head, and elbows, valves, and the filter itself add more — check the filter maker\'s figure if they publish one. Total dynamic head = static head + friction head.',
          'Example: waterfall top is 3 ft above the surface, with 15 ft of tubing and a pressurised filter. Static 3 ft + ~1.5 ft tubing friction + ~1 ft filter ≈ 5.5 ft of total head. Round up, not down.',
        ],
      },
      {
        h: 'Step 4 — Read the pump curve, not the box',
        p: [
          'Every decent pump publishes a chart: flow at 1 ft of head, at 5 ft, at 10 ft, and so on. Find your total head on that chart and read the flow there. That number — not the headline maximum — is what your pond gets.',
          'Worked example: the 1,320-gallon fish pond above, target turnover once per 2 hours → needs at least 660 GPH delivered. At 5.5 ft of head, a pump advertised as "1,200 GPH" might deliver only ~700 GPH — just enough, with no margin. A pump advertised at 1,800 GPH might deliver ~1,100 GPH at that head — comfortable, and it can be throttled slightly with a valve on the output (never restrict the intake). Buy for the flow at your head, with roughly 20–30% spare for filter clogging and future additions.',
        ],
      },
      {
        h: 'Sizing for a waterfall',
        p: [
          'If the same pump feeds a waterfall, the falls set their own requirement: as a rule of thumb, plan roughly 100–150 GPH of delivered flow per inch of waterfall width for a full, unbroken sheet of water; less gives a thinner, quieter trickle, which many people prefer. A 12-inch-wide spillway therefore wants about 1,200–1,800 GPH at the top of the falls — which is why waterfall ponds need much bigger pumps than the turnover math alone suggests. A common solution is a larger pump with a tee and valve splitting flow between filter and falls.',
        ],
      },
      {
        h: 'What it costs to run',
        p: [
          'Pond pumps run 24/7, so wattage is a purchase spec, not a footnote. Monthly electricity use: watts × 24 hours × 30 days ÷ 1,000 = kWh per month. A 100-watt pump uses about 72 kWh a month; at a typical household rate that is a real line item, and a magnetic-drive pump that does the same job at 60 watts pays for its price difference over a season or two. Compare pumps on watts at your duty point (your head, your flow), not on watts alone.',
        ],
      },
      {
        h: 'Common sizing mistakes',
        ul: [
          'Buying by maximum flow and discovering half of it at real head height.',
          'Ignoring the filter\'s own head loss, then blaming the pump.',
          'Undersizing for a stocked fish pond — the filter then cannot keep up no matter how good it is.',
          'Running a UV clarifier too fast: UV units have a maximum flow, above which green water passes through under-treated.',
          'No spare capacity: a pump that is exactly right on day one is too small the day the filter starts to clog.',
        ],
        p: [],
      },
    ],
  },
  {
    slug: 'koi-pond-basics',
    title: 'Koi Pond Basics: Stocking, Feeding, and Winter Care',
    description:
      'Space, stocking rates, temperature-based feeding, water-quality targets, and winter care — the fundamentals that keep koi healthy for decades.',
    eyebrow: 'Maintain It',
    heading: 'Koi Pond Basics: Stocking, Feeding, and Winter Care',
    intro:
      'Koi are not big goldfish. They grow to 24–36 inches, produce a heavy waste load, and can live for decades — which means a koi pond is a long-term system, not a decoration. These are the fundamentals that decide whether koi thrive or merely survive.',
    sections: [
      {
        h: 'Space comes first',
        p: [
          'The most common koi mistake is overstocking a pond that was sized for how the fish looked in the shop. A widely used rule of thumb is about 250 gallons of pond volume per adult koi, in a pond of at least roughly 1,000 gallons and 3 ft deep. Depth matters: it gives koi a refuge from summer heat, winter cold, and herons. If your pond is under that, keep goldfish instead — they are hardy, colourful, and honest about the space they need.',
        ],
      },
      {
        h: 'Filtration must be oversized',
        p: [
          'Koi eat a lot and waste a lot, and their health is set by water quality more than by anything else. Plan mechanical filtration (to remove solids before they dissolve) plus biological filtration (surface area for the bacteria that convert ammonia to nitrite to nitrate), sized generously beyond the pond\'s volume. Treat manufacturer ratings with suspicion: a filter "rated for 2,000 gallons" usually assumes a lightly stocked plant pond, so experienced keepers derate such claims by half or more for koi. A bottom drain feeding the filter is the single best design decision in a purpose-built koi pond.',
        ],
      },
      {
        h: 'What a koi pond actually costs (planning estimates)',
        p: [
          'The figures below are rough US planning estimates as of 2026, given as wide ranges on purpose: pond costs swing with size, region, and whether you dig it yourself. Use them to budget the shape of the project, never as a quote.',
          'For a do-it-yourself pond of around 1,000 gallons, the big-ticket parts typically break down like this: 45-mil EPDM liner and underlayment, roughly $300–$900 depending on sheet size; a properly sized pump, roughly $150–$500; a filter system honestly rated for koi, roughly $300–$1,500 or more — premium bead and combination units run well past that; plumbing, valves, and fittings, roughly $100–$400; an aeration kit, roughly $100–$300; and a floating de-icer for winter, roughly $40–$80. Rock, edging, and plants then add whatever your taste demands — from nearly nothing for salvaged stone to thousands for dressed boulders.',
          'All-in, a self-built 1,000-gallon koi pond commonly lands somewhere in the $2,000–$6,000 range for materials, before fish. Having the same pond designed and built by a contractor commonly runs into five figures. The fish themselves span the widest range of all: young pond-grade koi often sell for tens of dollars each, while quality and show-grade fish cost far more — budget for a modest number of healthy fish rather than a crowd of bargains.',
          'Then come the running costs new keepers forget: electricity for a pump and aerator running around the clock, food through the growing season, test kits, dechlorinator, and a replacement UV bulb most years. A few hundred dollars a year is a fair planning figure for a mid-size pond. None of this makes koi keeping unreasonable — it makes it a hobby to enter with the budget written down.',
        ],
      },
      {
        h: 'The water numbers that matter',
        p: [
          'Test while you learn; the targets are simple:',
        ],
        ul: [
          'Ammonia: 0. Nitrite: 0. Either reading above zero means the filter is overloaded or immature — feed less and do a partial water change.',
          'Nitrate: kept low with water changes and plants; it is the end product of the cycle, removed by you, not the filter.',
          'pH: roughly 7.0–8.5 is fine; stability matters more than the exact number. Crashes are prevented by adequate KH (carbonate hardness), the pond\'s pH buffer — keep KH comfortably above ~80 ppm.',
          'Oxygen: koi are active, hungry fish in warm water that holds less oxygen — aeration is not optional in summer.',
        ],
      },
      {
        h: 'Feeding: by temperature, not by calendar',
        p: [
          'A koi\'s digestion runs on water temperature:',
        ],
        ul: [
          'Below 50°F (10°C): do not feed. The fish cannot digest properly and uneaten food fouls the water.',
          '50–60°F (10–15°C): wheat-germ-based food only, sparingly — it is formulated to digest easily in cool water.',
          'Above 65°F (18°C): standard or growth food; two or three small feeds a day in high summer is fine for growing fish.',
          'At any temperature: feed only what the fish finish in about five minutes, and net out the leftovers.',
        ],
      },
      {
        h: 'Stocking slowly — and quarantine',
        p: [
          'Add koi a few at a time, weeks apart, so the filter bacteria can grow to match the load. Every new fish is also a possible disease import: a simple quarantine tank for 3–4 weeks of observation is how serious keepers avoid introducing parasites to an established pond. At minimum, buy from one reputable source, inspect fish before purchase, and never rush a new fish straight into the main pond on the day it comes home.',
        ],
      },
      {
        h: 'Seasonal rhythm',
        p: [
          'Spring is the danger season: koi immune systems wake up slower than the parasites and bacteria in the water, so watch closely, test often, and restart feeding gently. Summer is growth season — feed well, aerate at night, and shade part of the pond. Autumn is preparation: net out leaves before they sink and rot, reduce feeding as temperatures fall, and tidy the filter while it is still biologically active.',
        ],
      },
      {
        h: 'Winter care',
        p: [
          'As water drops below 50°F, stop feeding entirely — the fish slow into torpor near the bottom, living off stored energy, and this is normal, not a problem to solve. Your jobs are two: keep a hole in any ice (with a floating de-icer or an air stone near the surface) so gases from decaying matter can escape, and never smash the ice to make one — the shock waves genuinely stress the fish. Our month-by-month winterizing checklist covers the full sequence from September to March.',
        ],
      },
      {
        h: 'Reading the fish',
        p: [
          'Koi behaviour is an early-warning system. Flashing (rubbing against surfaces), clamped fins, isolating from the group, gasping at the surface, or refusing food all say stress — and the first suspect is always the water, not a disease. Test ammonia, nitrite, pH, and oxygen before reaching for any treatment; most "sickness" in garden koi ponds starts as a water-quality problem wearing a disguise.',
        ],
      },
    ],
  },
)

guides.push(
  {
    slug: 'pond-liners-vs-preformed-shells',
    title: 'Pond Liners vs Preformed Shells: Which Should You Buy?',
    description:
      'EPDM, PVC, and RPE liners compared with rigid preformed shells — flexibility, lifespan, installation traps, and a straight decision guide.',
    eyebrow: 'Gear & Decisions',
    heading: 'Pond Liners vs Preformed Shells: Which Should You Buy?',
    intro:
      'Every pond starts with the same question: a flexible liner you shape yourself, or a rigid preformed shell you drop into a hole? Both hold water. They differ in almost everything else — size, lifespan, installation effort, and how forgiving they are of mistakes.',
    sections: [
      {
        h: 'The two families',
        p: [
          'Flexible liners are sheet materials — EPDM rubber, PVC, or reinforced polyethylene (RPE/HDPE) — sold in rectangles that you drape into an excavation of any shape. Preformed shells are rigid tubs, usually fibreglass or moulded plastic, with the shelves and contours built in, in a fixed range of shapes and sizes.',
        ],
      },
      {
        h: 'EPDM rubber: the default for permanent ponds',
        p: [
          '45-mil EPDM is the material most serious pond keepers land on. It stays flexible in cold weather, tolerates odd shapes and deep profiles, is UV-stable, and quality EPDM is commonly rated by its makers for 20+ years of service. Buy fish-grade material and confirm it is safe for aquatic life. The trade-offs: it is heavy to manoeuvre, corners gather in pleats and folds (cosmetic, not a leak risk), and a sharp stone or root underneath can puncture it — which is why a proper underlayment layer is part of the system, not an upsell.',
        ],
      },
      {
        h: 'PVC and RPE: cheaper or tougher, with caveats',
        p: [
          'PVC liner is the budget option: light and inexpensive, but stiffer to work with, and it tends to grow brittle with UV exposure and age — a reasonable choice for a small or temporary pond, a poor one for a pond you expect to keep for decades. RPE (reinforced polyethylene) is the opposite trade: very strong and light for its thickness, but less flexible, so it folds rather than drapes and suits simpler, more rectangular shapes.',
        ],
      },
      {
        h: 'Preformed shells: the weekend pond, honestly assessed',
        p: [
          'A shell is genuinely fast: dig a hole roughly to shape, set the shell, level it, backfill, fill. The built-in plant shelves are convenient and the shape is predictable. The limits are real, though. Sizes top out small — most shells hold a few hundred gallons at most, too little for koi. The shell must be almost perfectly level and backfilled in stages (sand or sifted soil worked into every void, filling with water as you go); skip that care and it tilts, bulges, or cracks. And the rigid rim is harder to disguise with rock than a liner edge.',
        ],
      },
      {
        h: 'Comparing cost without fooling yourself',
        p: [
          'Compare cost per square foot of material, not the headline price: a liner pond\'s sheet must be bought as a rectangle big enough to cover length + twice the depth in both directions, so some material ends up as overlap and folds. A shell\'s price looks simple until you price the pond by the gallon — small shells are often the most expensive water you can buy. Either way, budget the underlayment (liner) or the sand and patience (shell) into the comparison.',
        ],
      },
      {
        h: 'The decision, straight',
        ul: [
          'Choose a flexible liner if: the pond is over roughly 500 gallons, you want a custom shape or a deep fish zone, you keep or plan to keep koi, or this is a build-once landscape feature.',
          'Choose EPDM specifically if: the pond is permanent — it is the longest-lived, most forgiving option.',
          'Choose a preformed shell if: the pond is small (a patio or wildlife pond), the site is flat and easy to level, speed matters more than size, or the pond may be removed later.',
          'Choose PVC only if: budget is decisive and the pond is small or temporary.',
        ],
        p: [],
      },
      {
        h: 'Installation gotchas, both kinds',
        p: [
          'Liner ponds fail at the edges: keep the liner edge above the waterline behind the edging stone so soil cannot wick water out, and do not trim the excess until the filled pond has settled for a few days. Shell ponds fail at the base: an unsupported void under a shelf concentrates stress exactly where the plastic can least afford it. In both cases, the liner or shell is rarely the weak point — the preparation underneath it is.',
        ],
      },
    ],
  },
  {
    slug: 'winterizing-your-pond',
    title: 'Winterizing Your Pond: A Month-by-Month Checklist',
    description:
      'September to March: feeding cut-offs, leaf nets, pump and de-icer decisions, ice holes, and the spring restart — a month-by-month pond winterizing checklist.',
    eyebrow: 'Maintain It · Seasonal',
    heading: 'Winterizing Your Pond: A Month-by-Month Checklist',
    intro:
      'Winter kills pond fish in predictable ways: decaying leaves fouling the water under ice, gases trapped with no escape hole, feeding that should have stopped. All of it is preventable with a season of small jobs. These months suit a temperate four-season climate (roughly USDA zones 5–7): shift everything a few weeks earlier in colder zones, later in warmer ones. In mild climates (zone 8 and up) you may only need the autumn steps.',
    sections: [
      {
        h: 'September — get ahead of the leaves',
        ul: [
          'Stretch a fine net over the pond before leaf fall begins, or commit to skimming daily — leaves that sink become winter\'s water-quality problem.',
          'Trim back yellowing foliage on marginal plants; remove spent lily pads as they yellow.',
          'Give the filter a proper clean while the bacteria in it are still active.',
          'As evenings cool, start easing off feeding — smaller amounts, less often.',
        ],
        p: [],
      },
      {
        h: 'October — stop feeding the plants, change the fish food',
        ul: [
          'Stop fertilising water lilies and marginals for the year.',
          'When the water drops toward 55°F (13°C), switch fish to a wheat-germ food formulated for cool water.',
          'Lift out tropical floaters (water hyacinth, water lettuce) before the first frost — left in, they rot.',
          'Do a final bottom tidy: vacuum or net out accumulated sludge so it does not decay under ice all winter.',
        ],
        p: [],
      },
      {
        h: 'November — make the pump and ice decisions',
        ul: [
          'Stop feeding fish entirely once the water stays below 50°F (10°C) — they cannot digest food properly below this.',
          'If you shut the pump down for winter: lift it out, clean it, and store it in a bucket of water indoors so the seals stay wet and supple.',
          'If you keep water moving: bypass or raise the waterfall return — running the falls in deep cold supercools the water — and let the filter run gently instead.',
          'Move the aerator\'s air stone up onto a plant shelf rather than the deep zone, so the warmest bottom layer where fish rest stays undisturbed.',
          'Set up the floating de-icer (or confirm the aerator plan) before the first hard freeze, not during it.',
          'Sink hardy lily pots to the deepest part of the pond; tender plants come indoors.',
        ],
        p: [],
      },
      {
        h: 'December to February — keep a hole, leave the fish alone',
        ul: [
          'Maintain an open hole in the ice with the de-icer or aerator: decaying matter releases gases all winter, and they must be able to escape.',
          'Never smash the ice to make a hole — the shock waves stress fish badly. Melt through with a pan of hot water if the de-icer fails.',
          'Do not feed, at any temperature spike — the fish are in torpor, living off stored energy, and this is normal.',
          'After storms, check that the aerator and de-icer are still running.',
          'Leave snow on the ice alone; it insulates, and the fish need rest more than light in midwinter.',
        ],
        p: [],
      },
      {
        h: 'March — the restart, in order',
        ul: [
          'As the water climbs back through 50°F (10°C), test it: ammonia and nitrite first. Winter\'s accumulated waste can spike both.',
          'Do a partial water change of about 10–20% (with dechlorinator) to dilute the winter build-up.',
          'Rinse filter media in a bucket of pond water — never tap water — and get the filter running before feeding resumes.',
          'Reconnect the waterfall once hard freezes are past.',
          'Resume feeding with wheat-germ food only, sparingly, and only above 50°F — and watch the fish closely: spring, when fish immune systems lag behind waking parasites, is when problems appear.',
        ],
        p: [],
      },
      {
        h: 'The three rules underneath the checklist',
        p: [
          'Everything above reduces to three principles: get organic matter out before ice forms, keep an escape route for gases all winter, and let the fish fast in peace. Do those three and the calendar details can flex with your weather; skip them and no gadget will save the pond.',
        ],
      },
    ],
  },
)

// Gear Hub categories — honest buying criteria. Product slots are Amazon
// Associates placeholders (tag inserted at deploy); no affiliate URLs exist
// yet, by design. Secondary route (UK traffic): FlexOffers pond programs.
export const gearCategories = [
  {
    id: 'pumps',
    name: 'Pond Pumps',
    blurb:
      'The heart of the pond. It moves water through the filter, feeds the waterfall, and runs 24 hours a day — so efficiency and honest sizing matter more than headline numbers.',
    criteria: [
      'Flow at YOUR head height, read off the manufacturer\'s pump curve — never the maximum flow on the box.',
      'Wattage at that duty point: the pump runs 8,760 hours a year, so 40 saved watts is a real annual saving.',
      'Solids-handling design for fish ponds (or a pump pre-filter), so debris passes to the filter instead of jamming the impeller.',
      'A warranty of several years and available spare impellers — pumps are wear items.',
      'Cable length that reaches your outlet without an extension lead anywhere near the water.',
    ],
    avoid: [
      'Sizing by maximum flow — you will get half of it, or less, at real head height.',
      'Fountain pumps in fish ponds: cheap, clog-prone, and not built for continuous filter duty.',
      'Restricting the intake to slow a pump down; throttle the output side only.',
    ],
  },
  {
    id: 'liners',
    name: 'Pond Liners & Underlayment',
    blurb:
      'The pond itself. A liner decision is a decades-long decision, and the underlayment beneath it decides whether it survives them.',
    criteria: [
      'Material: 45-mil EPDM for permanent ponds — flexible, UV-stable, fish-safe. Confirm any liner is labelled safe for aquatic life.',
      'Size it generously: sheet length = pond length + twice the maximum depth + at least 2 ft of overlap; same for width.',
      'Real underlayment (geotextile), not newspaper or thin felt — it is the puncture insurance.',
      'A single sheet wherever possible; seamed joins are the weak point of any liner pond.',
    ],
    avoid: [
      'Cheap thin PVC for a pond you intend to keep — it embrittles with UV and age.',
      'Tarpaulins and builder\'s polythene sold as "liner": wrong material, short life, questionable fish safety.',
      'Trimming the excess liner before the filled pond has settled for a few days.',
    ],
  },
  {
    id: 'filters',
    name: 'Pond Filter Systems',
    blurb:
      'Two filters in one box: mechanical media that strain out solids, and biological media where bacteria convert fish waste. Both halves have to be sized to your fish load, not your pond\'s best day.',
    criteria: [
      'Honest capacity: derate the maker\'s gallon rating by half for a fish pond, more for koi — ratings usually assume few or no fish.',
      'Mechanical stage you can actually clean easily — a filter that is a chore gets skipped, and a skipped filter is a swamp kit.',
      'Biological media with high protected surface area, and a design that never needs the media replaced (only rinsed in pond water).',
      'Flow range that matches your pump\'s delivered flow at head, not its box maximum.',
    ],
    avoid: [
      'Tiny all-in-one units on stocked ponds — they suit a small plant pond, nothing more.',
      'Replacing biological media on a schedule: you would be throwing away the bacteria colony the pond depends on.',
      'Undersizing to save money now; an undersized filter cannot be fixed by cleaning it more often.',
    ],
  },
  {
    id: 'uv-clarifiers',
    name: 'UV Clarifiers & Sterilizers',
    blurb:
      'A targeted tool, not a filter: ultraviolet light clumps the single-cell algae that turn water into pea soup, so the filter can remove it. Brilliant at exactly one job.',
    criteria: [
      'Wattage and rating matched to pond volume, with a stated maximum flow — water must linger in front of the lamp to be treated.',
      'A quartz sleeve that can be removed and cleaned; a fouled sleeve blocks the UV.',
      'Bulb availability and cost: UV output fades after roughly a season of use even though the lamp still glows, so budget a bulb about every 12 months.',
      'Position after the mechanical filter where possible, so the clearest water reaches the lamp.',
    ],
    avoid: [
      'Buying one to fix string algae — attached algae never passes through the unit. It cannot work, and it won\'t.',
      'Oversizing flow through a small unit and concluding "UV doesn\'t work."',
      'Treating UV as a substitute for filtration or nutrient control — the causes of green water remain untouched.',
    ],
  },
  {
    id: 'skimmers',
    name: 'Pond Skimmers',
    blurb:
      'The pond\'s surface vacuum: a skimmer draws the top layer of water — where leaves, pollen, dust, and uneaten food collect — through a basket before any of it can sink and rot.',
    criteria: [
      'A leaf basket you can lift out and empty in seconds, without tools — a skimmer that is awkward to service stops being serviced.',
      'A weir door that genuinely floats and tracks the water level, so the skim keeps working across normal level changes.',
      'A flow rating matched to your pump, on a body sized for your pond\'s surface area — skimming is about surface pull, not depth.',
      'Room inside the body for the pump, if you want it protected and hidden there, with mechanical padding between the basket and the pump intake.',
    ],
    avoid: [
      'Expecting a skimmer to replace filtration — it handles the surface; the filter still has to handle the water column.',
      'Small floating in-pond skimmers on larger ponds: underpowered for a real leaf load, and one more cable in the water.',
      'Skipping the skimmer on a pond under trees — autumn leaf fall pays you back in sludge, tannins, and ammonia.',
    ],
  },
  {
    id: 'aerators',
    name: 'Pond Aeration Kits & Aerators',
    blurb:
      'Air pump, airline, and a diffuser stone. Aeration is cheap insurance: fish need the oxygen most on hot summer nights and under winter ice — the two moments ponds get into trouble.',
    criteria: [
      'Output rated for your pond\'s depth — an air pump must overcome the water pressure at the diffuser, so check the depth rating, not just litres per minute.',
      'A weatherproof home for the pump itself (it lives outdoors, above water level, or with a check valve so water cannot siphon back).',
      'Replaceable diaphragms: on most air pumps the diaphragm is the wear part, and a service kit extends the pump\'s life for years.',
      'For winter use, a diffuser that can sit on a shallow shelf so the deep zone stays undisturbed.',
    ],
    avoid: [
      'Deep-diffuser aeration in winter: stirring the whole pond destroys the warmer bottom layer the fish are resting in.',
      'Undersized single-stone kits on stocked ponds in summer — the hottest nights are exactly when oxygen crashes.',
      'Running the air pump below water level without a check valve.',
    ],
  },
]

// Amazon Associates picks per Gear Hub category — tracking tag
// amazon300008-20. Copy rule: NO prices, NO ratings, NO review counts.
export const gearPicks = {
  pumps: [
    { name: 'TetraPond Debris-Handling Pump (DHP4200 size)', asin: 'B001QIPLAE', note: 'The solids-handling pick for fish ponds: passes debris up to ¼″ through a pre-filter cage to the filter, built for continuous duty, with published flow-at-height figures.' },
    { name: 'Alpine Corporation Cyclone PAL3100 (3,100 GPH)', asin: 'B00489Q0VM', note: 'Large pre-filter, oil-free ceramic-shaft motor, runs submerged or inline — and a 33-ft cord, so no extension lead ever sits near the water.' },
    { name: 'Danner Pondmaster Pond-Mag 700 GPH (02527)', asin: 'B000BJK3QQ', note: 'The efficient small-pond pump: magnetic drive, rigid pre-filter included, 5-year warranty — low watts for a pump that runs all year.' },
  ],
  liners: [
    { name: 'Firestone PondGard 45-mil EPDM Liner, 15 × 20 ft', asin: 'B000G0GDJ6', note: 'The do-it-once liner: single-sheet 45-mil EPDM, labelled fish-safe, UV-stable, no plasticizers to embrittle. 20-year warranty.' },
    { name: 'LifeGuard 45-mil EPDM Liner + Underlayment Combo, 15 × 20 ft', asin: 'B006SOIHOI', note: 'Liner and real geotextile underlayment in one box — the puncture insurance, included instead of forgotten.' },
    { name: 'Firestone PondGard 45-mil EPDM Liner, 15 × 25 ft', asin: 'B002IUPTEC', note: 'The same 45-mil EPDM in the larger single sheet the sizing formula demands for bigger or deeper builds.' },
  ],
  filters: [
    { name: 'OASE BioSmart 5000 Pond Filter', asin: 'B00J767SJE', note: 'Flow-through mechanical + biological filtration with a cleaning indicator. Note: the 5,000-gallon figure is the no-fish rating — derate it for a stocked pond.' },
    { name: 'TetraPond Bio-Active Pressure Filter (BP1500 / BP2500 sizes)', asin: 'B00D7JBDZM', note: 'Backflush cleaning without opening the unit; bio media is rinsed, never replaced on a schedule. Choose your size on the product page — the BP2500 is the 2,500-gallon size; treat it as roughly a 1,250-gallon filter on a stocked fish pond.' },
    { name: 'Laguna Clear-Flo 1000 Kit (PT1741)', asin: 'B00T4503UO', note: 'Pressure-Flo filter and solids-handling Max-Flo pump matched by the maker, so the two halves of the system cannot be mismatched.' },
  ],
  'uv-clarifiers': [
    { name: 'TetraPond GreenFree UVC-5 (5W)', asin: 'B00474BFSQ', note: 'The small-pond green-water fix (up to 660 gallons): quartz sleeve, reflective insert, replaceable bulb — budget about one bulb a season.' },
    { name: 'TotalPond UV Pond Clarifier (9W)', asin: 'B004DL0Y76', note: 'The mid-size step up for green water, with a 16-ft cord. Treats single-cell algae only — run it after the mechanical filter.' },
    { name: 'Jebao STU-36 Stainless Clarifier (36W)', asin: 'B08Z3T7RKS', note: 'For larger ponds (maker-rated to ~8,000 gallons): stainless housing, vertical or horizontal mounting, stated bulb-replacement guidance up front.' },
  ],
  skimmers: [
    { name: 'Aquascape Signature Series 200 Skimmer (43020)', asin: 'B019J2C3EA', note: 'Lift-out debris net, 6″ weir that tracks the water level, and a protected in-body home for the pump. Ponds up to 200 sq ft, flows to 3,000 GPH.' },
    { name: 'Aquascape Signature Series 400 Skimmer (43021)', asin: 'B019J2C4H6', note: 'Rigid basket plus filter mat, locking weir door for maintenance draining, faux-rock lid. Ponds up to 400 sq ft, flows to 4,000 GPH.' },
  ],
  aerators: [
    { name: 'Aquascape Pond Air 2 Aeration Kit (75000)', asin: 'B0078LTKM8', note: 'Complete 2-outlet kit — compressor, tubing, diffusers — for ponds up to 2,000 gallons, summer oxygen and winter insurance in one box.' },
    { name: 'Aquascape Pro Air 20 Aeration Kit (61009)', asin: 'B078WG39Z4', note: 'Outdoor-rated compressor, 0.71 CFM, rated to 6.5 ft depth, self-cleaning membrane diffuser, 25 ft of braided airline. Ponds up to 5,000 gallons.' },
    { name: 'Tetra Pond Air Pump Kit (19706)', asin: 'B00CQ7JRAY', note: 'The winter-survival kit: tubing, air stones and check valves included, 30-ft cord so the pump can sit safely above water level.' },
  ],
}

export const associatesUrl = (asin) => `https://www.amazon.com/dp/${asin}/?tag=amazon300008-20`

// End-of-guide gear boxes: guide slug -> Gear Hub category ids (kit Step 5 map).
export const guideGear = {
  'size-a-pond-pump': ['pumps'],
  'pond-algae-control': ['uv-clarifiers'],
  'pond-liners-vs-preformed-shells': ['liners'],
  'winterizing-your-pond': ['aerators'],
  'koi-pond-basics': ['filters', 'pumps'],
  'build-a-backyard-pond': ['liners', 'skimmers'],
}
