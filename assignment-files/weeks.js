// Weekly Assignments content. This is the only file to edit each week.
//
// currentWeek: the week marked "This week" (0 = none yet).
// For each week:
//   date:      e.g. "Sept 30" (optional)
//   due:       e.g. "Due before Week 6" (optional, shown above the handouts)
//   assignment: { steps: ["...", "..."], note: "..." } (optional, shown first)
//   recap:     list of paragraphs, e.g. ["We started with...", "Next week..."]
//   recapTitle: heading for the recap block (optional, default "Class recap")
//   links:     links shown under the recap, e.g. { label: "Artist site", href: "https://..." }
//              YouTube links get a thumbnail automatically; add thumb: "/path.webp" to use your own
//   files:     PDFs/handouts (images show as a thumbnail), e.g. { label: "Value study handout", href: "/assignment-files/pdfs/week-02-value-study.pdf" }
//   photosLink: link shown below the photos (optional), e.g. { label: "Artist site", href: "https://..." }
//   photos:    images, e.g. { src: "/assignment-files/photos/week-02-demo.jpg", caption: "Demo: value scale" }
//   materials: list of items to bring
//   photosPlaceholder: text shown under "Student work" until photos are added (optional)
//   featured:  a highlighted download, e.g. { heading, label, href, description, contents: ["..."], note }
//   unit:      a new-unit overview { eyebrow, title, intro: ["..."], assignments, materials, schedule, care }
//   unitAssignment: one of the UNIT_ASSIGNMENTS below, shown as this week's assignment
//   goal:      one-line goal shown with unitAssignment (optional)
//   care:      studio care list, shown under the materials
// A week with no recap, files or photos shows as "Coming soon".
// Put uploaded PDFs in assignment-files/pdfs/ and images in assignment-files/photos/.

// Mixed media sculpture unit (Weeks 8 and on). "Bones and Skin" is a working
// title: change it here and it updates everywhere on the page.
const UNIT_NAME = "Bones and Skin";

const UNIT_ASSIGNMENTS = [
  {
    label: "Assignment 1",
    title: "Twist the armature",
    intro: "Build the skeleton first. Choose a story, memory, or question, then sketch a quick gesture: standing, leaning, climbing, hanging, or flat against a wall.",
    steps: [
      { n: "01", title: "Twist the foil", text: "Tear sheets of aluminum foil, roll each into a long rope, and twist several ropes together for strength. Bend the bundle into your gesture. Make the core thicker where the sculpture will be heavier.", lookFor: "A strong line that holds its shape when you set it down." },
      { n: "02", title: "Add bulk and anchors", text: "Crumple foil into masses for the shapes you want. Wrap thin strips of foil around the ropes to hold them. Leave rough, ridged areas and a few hooks or loops so clay, fiber, and cement have something to grip. Wall pieces need a flat back and a loop or tab for hanging.", lookFor: "A skeleton that stands, leans, or hangs without help, with open spaces between the parts." },
    ],
    notes: [
      // 1/8 inch wire size is an assumption: confirm with product instructions.
      { label: "Optional: aluminum wire", text: "You may buy soft aluminum armature wire (about 1/8 inch) for longer reach or a sturdier backbone. Twist it into the foil core, and cap sharp wire ends with a fold of foil or tape. Foil is the default; wire is an optional purchase." },
      { label: "Test first", text: "Gently press the armature to check its balance. A wobbly base is easier to fix now than after the clay goes on." },
    ],
  },
  {
    label: "Assignment 2",
    title: "Clay over the armature",
    intro: "Start with clay while it is still workable, before any plaster or cement comes into the room.",
    steps: [
      { n: "03", title: "Press clay onto the bones", text: "Score the foil, brush on a little slip or water, and press clay in thin slabs and coils. Keep walls even, about 1/2 to 3/4 inch. Press firmly so the clay locks into the foil ridges and hooks.", lookFor: "Clay that grips the armature with no hollow pockets or sliding." },
      { n: "04", title: "Texture and carve", text: "Stamp, scratch, pinch, and drag tools through the surface. Leave a few deep valleys and a few smooth, calm areas. Mark where fiber will wrap or poke through later.", lookFor: "Ridges, valleys, and open areas that will catch plaster or cement." },
      { n: "05", title: "Dry slowly", text: "Cover loosely with plastic or a damp cloth for the first day, then uncover and dry flat or supported. Check thick areas for cracks and press them closed while the clay is still damp." },
    ],
    notes: [
      { label: "Kiln note", text: "Foil armatures cannot be fired with clay in the kiln, and most clay-over-foil pieces will not be fired at all. Use air-dry clay, or treat these as finished air-dried surfaces. Ask the instructor before anything goes near a kiln." },
      { label: "Keep clay and plaster apart", text: "Use separate tools, buckets, and scrap bins for each. Plaster contaminates clay." },
    ],
  },
  {
    label: "Assignment 3",
    title: "Wrap in fiber",
    intro: "Bring back the string, yarn, and paper-skin thinking from the collage unit, now in three dimensions.",
    steps: [
      { n: "06", title: "Wrap and weave", text: "Wind string, yarn, or strips of fabric around the armature and the dry clay. Tuck ends into the foil and secure them with a dab of glue or slip. Let some fibers cross open space like bridges.", lookFor: "Fibers that follow the gesture of the form and leave bare areas between wraps." },
      { n: "07", title: "Soak and drape (optional)", text: "Dip jute, cotton gauze, or burlap in thin plaster or slurry, drape it over the form, and shape the folds. Works well on wall pieces.", lookFor: "Stiffened folds that hold their shape when dry." },
      { n: "08", title: "Plan what stays visible", text: "Decide which fiber will be buried under the next layer and which will stay exposed. Leave a few tails sticking out of the surface to pull later, as in the collage unit." },
    ],
    notes: [
      { label: "Fiber tip for cement", text: "Plant and jute fibers weaken over time in cement because of its high alkalinity. Keep them near the surface, or use synthetic or alkali-resistant fibers inside the cement." },
    ],
  },
  {
    label: "Assignment 4",
    title: "Plaster and cement skin",
    intro: "Finish the piece as a freestanding sculpture or a textured wall relief. Test a small sample on scrap first, because mixes and drying times vary.",
    steps: [
      { n: "09", title: "Mix small batches", text: "Measure powder and water carefully, add powder to water, and stir until smooth like thick yogurt. Gypsum plaster sets in minutes, and CSA cement sets faster than Portland, so mix only what you can use right away.", lookFor: "A mix that holds a ridge when you drag a stick through it." },
      { n: "10", title: "Build the skin", text: "Apply in thin layers by hand, with a brush, or with a palette knife. Press it into the clay texture and around the fiber. Let each layer firm up before adding the next. Leave some clay, fiber, or foil exposed on purpose.", lookFor: "Thin layers with exposed areas, a rough crust, and smooth patches." },
      // 24 to 48 hour damp cure is an assumption: confirm with product instructions.
      { n: "11", title: "Cure and finish", text: "Keep cement pieces damp under plastic for 24 to 48 hours so they cure slowly, then dry flat. Once dry, wash lightly, rub back high spots with a damp sponge, and add a small amount of pigment, wax, or sealer only where needed.", lookFor: "A balance of raised texture, buried material, and exposed color." },
      { n: "12", title: "Present your piece", text: "Show it freestanding or hung. Share what is buried, what is revealed, and how the piece connects to your chosen story." },
    ],
  },
];

const UNIT_MATERIALS = [
  // 1/8 inch wire size is an assumption: confirm with product instructions.
  { group: "Armature", text: "Heavy-duty aluminum foil (provided). Optional: soft aluminum armature wire, about 1/8 inch, which students may buy themselves." },
  { group: "Clay", text: "Ceramic or air-dry clay, slip or water, and a scoring tool." },
  { group: "Fiber", text: "String, yarn, jute, burlap, cotton gauze, fabric strips, and an optional small amount of alkali-resistant or synthetic fiber for inside cement." },
  { group: "Plaster and cement", text: "Gypsum plaster, plus Portland or CSA cement-based products." },
  { group: "Tools", text: "Brushes, palette knives, plastic cards, blunt craft sticks, wire cutters and pliers, sponges, and scissors." },
  { group: "Mixing and cleanup", text: "Disposable cups, buckets kept separate for clay and plaster, plastic sheeting, and rags." },
  { group: "Safety gear", text: "Dust masks, gloves, and eye protection." },
];

// Draft schedule: weeks 9–13 are proposed and may change.
const UNIT_SCHEDULE = {
  title: "Session timing (proposed)",
  note: "Draft schedule. Weeks 9–13 may change to fit our class length.",
  columns: ["Session", "Focus", "Minutes", "Goal"],
  rows: [
    ["Week 8", "Collage showcase, then unit intro", "15 intro, rest showcase", "Share fiber collages; sketch a sculpture gesture"],
    ["Week 9", "Twist the armature", "60", "Finished, balanced foil armature (steps 01–02)"],
    ["Week 10", "Clay over the armature", "60", "Textured clay on the armature; start drying (steps 03–05)"],
    ["Week 11", "Wrap in fiber", "60", "Fiber wrapped or draped; plan what stays visible (steps 06–08)"],
    ["Week 12", "Plaster and cement skin", "60", "Thin layers applied; cover to cure (steps 09–10)"],
    ["Week 13", "Cure, finish, and share", "60", "Rub back, finish, and present (steps 11–12)"],
  ],
};

const STUDIO_CARE = [
  { label: "Dust", text: "Wear a dust mask when opening or measuring dry plaster or cement. Clean up with wet sponges and mops, never dry sweeping or sanding." },
  { label: "Wet cement", text: "Wet cement and plaster can burn skin. Wear gloves, and rinse skin with water right away if it gets on you." },
  { label: "Drains", text: "Plaster and cement never go down the sink. Let leftovers harden in a bucket or cup and throw them in the trash." },
  { label: "Heat", text: "Setting plaster and cement warms up, so don't hold thick mixes in bare hands." },
  { label: "Wire", text: "Cap or fold sharp wire and foil ends. Wear eye protection when cutting wire." },
  { label: "Ventilation and supervision", text: "Keep the room ventilated. Cement and plaster mixing happens under teacher supervision." },
];

window.ASSIGNMENTS = {
  currentWeek: 8,
  weeks: [
    {
      week: 1,
      title: "Drawing Foundations I",
      topic: "See, simplify + construct",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Pencils HB–6B","eraser","sketchbook","a few household objects"],
    },
    {
      week: 2,
      title: "Drawing Foundations II",
      topic: "Light, value + composition",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Pencils","blending stump","desk lamp","a white object such as an egg or mug"],
    },
    {
      week: 3,
      title: "Drawing Foundations III",
      topic: "Transform: Surrealism",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Drawing kit and reference photos"],
    },
    {
      week: 4,
      title: "Color Theory + Egg Tempera",
      topic: "Mixing what you see",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Eggs","pigment pastes","palette","small brushes","watercolor paper or panel"],
    },
    {
      week: 5,
      title: "Pigment + Casein Paint",
      topic: "Paint is made",
      date: "",
      due: "Due before Week 6",
      assignment: {
        steps: [
          "Make your own paint using a binder that you make. See the examples and recipes on this page.",
          "Add a pigment that you source yourself: plant-based, iron oxide, spice, charcoal, coffee, etc.",
          "Create 3 or more colors and use them to make an abstract painting. It can be on mixed media paper, cardboard, an “Amazon envelope,” etc.",
        ],
        note: "Optional: include other mixed media elements, such as collage, found objects or fiber.",
      },
      recap: [],
      files: [
        { label: "Make your own casein paint", href: "/assignment-files/handouts/casein-paint.webp" },
        { label: "From nonfat milk to casein paint", href: "/assignment-files/handouts/nonfat-milk-to-casein-paint.webp" },
        { label: "Make clay & wheat-paste paint", href: "/assignment-files/handouts/clay-wheat-paste-paint.webp" },
        { label: "Make Swedish-style flour paint", href: "/assignment-files/handouts/swedish-flour-paint.webp" },
        { label: "Try soy-milk paint", href: "/assignment-files/handouts/soy-milk-paint.webp" },
        { label: "Make starch paint", href: "/assignment-files/handouts/starch-paint.webp" },
        { label: "Make egg tempera", href: "/assignment-files/handouts/egg-tempera.webp" },
        { label: "Make a pantry color palette", href: "/assignment-files/handouts/pantry-color-palette.webp" },
      ],
      photos: [],
      materials: ["Casein binder","pigment pastes","illustration board or cardboard","brushes"],
    },
    {
      week: 6,
      title: "Mixed Media I",
      topic: "Layer + transform · 2-week project (Weeks 6–7)",
      date: "",
      recapTitle: "Recap and assignment",
      recap: [
        "You will be creating a single, or if you are feeling brave, a multi-panel art piece on paper, wood, canvas, an old window, old clothing, etc. This will be the art substrate that you are painting and working on.",
        "Feel free to work “outside of the frame” as we saw with Rauschenberg, and with the IG artist reel that we watched who integrated the string into and outside of his art pieces.",
        "Use found objects, homemade paint/pigment, collage, photos, prints, fibers, sand, dirt, straw, flowers, and so on.",
        "This is a 2-week project. Next week (Week 7) we will share our mid-project progress, and we will show the final work in Week 8.",
        "Tip: take photos of your progress to share in next week’s class, so you don’t have to hold your piece up to your Zoom camera.",
        "Reference artists and images. We looked at these artists:",
      ],
      links: [
        { label: "Robert Rauschenberg", href: "https://youtu.be/DGuo2oW-6_8?si=v2ZJFg8FSZM6M7Gd" },
        { label: "Misc. mixed media tutorial", href: "https://www.youtube.com/watch?v=wA3HQH6gD8M&list=PLUE608AhaUzo", thumb: "/assignment-files/photos/week-06-mixed-media-tutorial-thumb.webp" },
      ],
      files: [],
      photosLink: { label: "See more of William Catling’s work", href: "https://williamcatling.com/" },
      photos: [
        { src: "/assignment-files/photos/week-06-rauschenberg-1.webp", caption: "Robert Rauschenberg, Combine" },
        { src: "/assignment-files/photos/week-06-rauschenberg-2.webp", caption: "Robert Rauschenberg, Trophy III (for Jean Tinguely), 1961" },
        { src: "/assignment-files/photos/week-06-rauschenberg-3.webp", caption: "Robert Rauschenberg, Combine" },
        { src: "/assignment-files/photos/week-06-rauschenberg-4.webp", caption: "Robert Rauschenberg, silkscreen paintings including Retroactive I (1964), Tate Modern" },
        { src: "/assignment-files/photos/week-06-rauschenberg-5.webp", caption: "Robert Rauschenberg, mixed media collage" },
        { src: "/assignment-files/photos/week-06-monogram-1.jpg", caption: "Robert Rauschenberg, Monogram (1955–59)" },
        { src: "/assignment-files/photos/week-06-monogram-2.jpg", caption: "Robert Rauschenberg, Monogram (1955–59), Moderna Museet" },
        { src: "/assignment-files/photos/week-06-misc-1.webp", caption: "Textured mixed media painting" },
        { src: "/assignment-files/photos/week-06-kiefer-1.webp", caption: "Anselm Kiefer, pine needles and paint on canvas" },
        { src: "/assignment-files/photos/week-06-catling-1.webp", caption: "William Catling" },
        { src: "/assignment-files/photos/week-06-catling-2.webp", caption: "William Catling" },
        { src: "/assignment-files/photos/week-06-catling-3.jpg", caption: "William Catling" },
        { src: "/assignment-files/photos/week-06-catling-4.jpg", caption: "William Catling" },
        { src: "/assignment-files/photos/week-06-catling-5.jpg", caption: "William Catling" },
      ],
      materials: ["Substrate: paper, wood panel, canvas, an old window or old clothing","Gel medium or PVA glue","scissors","collage papers, photos and prints","found objects","homemade paint/pigment (casein, egg tempera, etc.)","fibers: string, yarn, thread, fabric scraps","sand, dirt, straw, dried flowers","modeling paste or plaster for texture","palette knife","brushes","needle, wire or staples for attaching objects"],
    },
    {
      week: 7,
      title: "Mixed Media I (continued)",
      topic: "Mid-project progress: share photos of your Week 6 piece",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Your Week 6 mixed media piece and materials","photos of your progress"],
    },
    {
      week: 8,
      title: "Collage Showcase",
      topic: "Share your fiber collage, then meet the next unit: " + UNIT_NAME,
      date: "",
      recapTitle: "Collage showcase",
      recap: [
        "We have spent seven weeks on our fiber collage projects. This week each student presents their collage.",
        "When you share, tell us which strata came first, what artifacts you uncovered, and one discovery you made along the way.",
        "Tip: photos of your collage are easier to share than holding it up to your Zoom camera.",
        "We will also take about 15 minutes to introduce our next unit, " + UNIT_NAME + ", and sketch a quick gesture for your sculpture.",
      ],
      files: [],
      // ADD STUDENT PHOTOS: put images in assignment-files/photos/ (e.g. week-08-collage-1.webp)
      // and list them here like Week 6, e.g. { src: "/assignment-files/photos/week-08-collage-1.webp", caption: "Student name, fiber collage" }.
      // The placeholder below disappears once photos are added.
      photos: [],
      photosPlaceholder: "Photos of student collages will be added after class.",
      featured: {
        heading: "Download the Art-chaeology assignment",
        label: "Art-chaeology visual assignment packet (PDF, 5 pages)",
        href: "/assignment-files/pdfs/Art_Lab_Art-chaeology.pdf",
        description: "The step-by-step packet from our fiber collage unit: build, bury, and excavate a story through layers of art.",
        contents: [
          "Page 1 · Assignment 1, Build a site of layered stories (postcard size to 9 x 12 inches): start with a story, then add raised textures such as string, wrinkled paper, or a dry leaf. Includes a “Gather your materials” list.",
          "Page 2 · Assignment 2, Build the strata: press paper over texture, then build, hide, and dry. Session 1, about 60 minutes. Includes a binder tip.",
          "Page 3 · Assignment 3, Excavate the surface: pull a string path through the layers, then excavate, edit, and finish. Session 2: reveal + reflect.",
          "Page 4 · Optional extension, Bury an image, reveal a story: buried photocopies plus strata.",
          "Page 5 · Optional extension, Read the excavated layers: open channels in small sections, balance image and texture, and answer the field notes questions.",
        ],
        note: "The photos in the packet are AI-generated examples. Your results will vary.",
      },
      unit: {
        eyebrow: "Weeks 8 and on",
        title: "Next unit: " + UNIT_NAME,
        intro: [
          "A mixed media sculpture unit, Weeks 8 and on, using ceramic clay, fiber, and cementitious products (gypsum plaster, Portland cement or CSA cement products). You will build a foil armature, then clothe it in clay, fiber, plaster, and cement, as a freestanding piece or a textured relief that hangs on a wall.",
          "Every piece starts with a twisted aluminum foil armature. The order is: foil armature, then clay, then fiber, then a plaster or cement skin.",
        ],
        assignments: UNIT_ASSIGNMENTS,
        materials: UNIT_MATERIALS,
        schedule: UNIT_SCHEDULE,
        care: STUDIO_CARE,
      },
      materials: ["Your fiber collage, or photos of it","sketchbook and pencil for a quick gesture sketch"],
    },
    {
      week: 9,
      title: UNIT_NAME + " I",
      topic: "Twist the armature",
      date: "",
      unitAssignment: UNIT_ASSIGNMENTS[0],
      goal: "A finished, balanced foil armature (steps 01–02).",
      recap: [],
      files: [],
      photos: [],
      // 1/8 inch wire size is an assumption: confirm with product instructions.
      materials: ["Your gesture sketch from Week 8","heavy-duty aluminum foil (provided)","optional: soft aluminum armature wire, about 1/8 inch (students buy their own)","wire cutters and pliers, if using wire","tape for capping sharp wire ends","eye protection when cutting wire"],
      care: STUDIO_CARE,
    },
    {
      week: 10,
      title: UNIT_NAME + " II",
      topic: "Clay over the armature",
      date: "",
      unitAssignment: UNIT_ASSIGNMENTS[1],
      goal: "Textured clay on the armature; start drying (steps 03–05).",
      recap: [],
      files: [],
      photos: [],
      materials: ["Your foil armature from Week 9","ceramic or air-dry clay","slip or water","scoring tool","texture tools: plastic cards, blunt craft sticks, brushes","plastic sheeting or a damp cloth for slow drying","sponges and rags","a bucket and tools used only for clay"],
      care: STUDIO_CARE,
    },
    {
      week: 11,
      title: UNIT_NAME + " III",
      topic: "Wrap in fiber",
      date: "",
      unitAssignment: UNIT_ASSIGNMENTS[2],
      goal: "Fiber wrapped or draped; plan what stays visible (steps 06–08).",
      recap: [],
      files: [],
      photos: [],
      materials: ["Your armature with its dry clay layer","string, yarn, and fabric strips","glue or slip for securing ends","scissors","for the optional soak and drape: jute, burlap, or cotton gauze, plus thin plaster or slurry, disposable cups, and plastic sheeting","optional: a small amount of synthetic or alkali-resistant fiber for inside cement","dust mask, gloves, and eye protection if plaster is mixed"],
      care: STUDIO_CARE,
    },
    {
      week: 12,
      title: "Chance + Experimental Process",
      topic: "Chance and control",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Gel medium","brayer","gel plate","sun-print paper","laser-printed images"],
    },
    {
      week: 13,
      title: "Final Project I",
      topic: "Concept + material plan",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Anything from the semester’s kits; the student’s plan decides"],
    },
    {
      week: 14,
      title: "Final Project II",
      topic: "Build",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Final-project materials"],
    },
    {
      week: 15,
      title: "Final Project III",
      topic: "Develop + refine",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Final-project materials"],
    },
    {
      week: 16,
      title: "Final Project IV",
      topic: "Finish + present",
      date: "",
      recap: [],
      files: [],
      photos: [],
      materials: ["Finished work","a phone camera","good light"],
    },
  ],
};
