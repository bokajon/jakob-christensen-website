# Kitchen pixel art v2

Style authority: `style-reference.png`, the user's preferred first pizza mockup.

Generated with the built-in Imagegen tool, using the reference image on every generation. Source atlases remain intact. `src/deckbuilder/kitchen/kitchenSprites.ts` defines source regions, discards low-alpha matte haze during loading and places independent objects in world centimetres. No global palette filter, downsampled scene, or baked fake particles. `kitchenParticle.ts` renders the simulation particles separately. The hand-card illustrations outside the scene retain their existing theme.

| Atlas | Contents |
| --- | --- |
| salt.png | Chef hand with inverted shaker; pizza on paddle |
| salt-mask.png | Aligned black/white silhouette mask for the shaker-hand sprite, removes opaque matte fringe without repainting the art |
| salt-before-fingers.png | Prior atlas; still supplies the unchanged pizza sprite |
| cockroach.png | Chef hand with spray bottle; cockroach |
| flambe.png | Hand with copper pan; extractor hood; forest-green oven |
| smoke.png | Burnt/golden toast in ivory toaster; smoke alarm |
| flies.png | Open honey jar; walnut table plank |
| flour.png | Hand with metal sifter; ceramic flour bowl |
| room.png | Forest tile texture; cabinet doors; unused shelf draft |
| shelf.png | Isolated shelf, cup, bottle and trailing plant |
| particles.png | Flame tongue, smoke puff, housefly |

Prior original style and restoration instructions: `content-backups/2026-11-06-kitchen-illustrated/README.md` at the repository root.

## Generation prompt set

Shared prompt: Production-ready 16-bit pixel art sprite atlas for a sophisticated indie kitchen puzzle game. The attached image is the EXACT STYLE REFERENCE: match its rich golden highlights, deep forest shadows, beautiful volumetric hand anatomy, convincing fabric folds, intentional chunky pixel clusters, clean stepped silhouettes, restrained dithering. It must look as professionally painted as the reference, not a pixelated vector illustration or flat clipart. Crisp pixel art, consistent 3-4 screen pixels per art pixel at 1536 width. Transparent background, no text, numbers, labels, UI or grid lines. Two strictly separated horizontal rows, each half the canvas, with transparent padding around every object and no overlap between rows. No glow, haze or shadows outside silhouettes.

Asset prompts applied to that shared direction:

- Salt: Top row, ivory chef sleeve entering from left, warm modeled hand gripping an inverted clear glass salt shaker at the right, perforated lid points down, salt inside, no falling grains. Bottom row, generous pepperoni pizza on wooden paddle with right handle, visible elliptical top, puffy toasted golden crust, cheese, red pepperoni, basil and olive rings, no table or wall.
- Cockroach: Top row, ivory chef sleeve and warm hand with teal glass cleaning bottle, ivory trigger nozzle points right, cream label with two green leaves, no droplets. Bottom row, brown cockroach facing left, six angular legs, long antennae, amber segmented shell, no floor or wall.
- Flambe: Three separated cells: hand with long wooden handle and polished copper pan containing food; forest-green trapezoid extractor hood with short chimney and golden underside; green vintage oven with four brass knobs, dark glass and brass door handle. Fourth cell empty. No fire or smoke.
- Smoke: Top row, sculptural ivory two-slot toaster with aged brass trim, round lever knob, left toast burned and right toast golden, no smoke or counter. Bottom row, round ivory smoke alarm, concentric vent holes and tiny red LED, sage-gray shadows, no ceiling or wire.
- Flies: Top row, open glass jar of golden amber honey with bubbles, thick highlights, ivory label with ornamental bee and no text, no lid, flies or spoon. Bottom row, thin wide walnut table plank with beveled worn gold edge and irregular grain, no legs.
- Flour: Top row, folded ivory chef sleeve and warm hand holding a cylindrical stainless-steel flour sifter with open top, visible underside mesh and flour inside, no falling particles. Bottom row, deep ivory ceramic mixing bowl with sage-blue shadows, golden rim and a mound of white flour, no spoon or table.
- Room: Four-cell atlas, upper left opaque forest-green tile texture with dark grout, sage highlights and subtle clusters, upper right opaque cabinet doors with paneled bevels, brass handles and cream/sage countertop. Lower left isolated shelf with ochre cup, green oil bottle and terracotta trailing plant. Lower right empty.
- Shelf: Extract only the shelf, cup, green bottle and trailing plant from the room reference. Preserve pixel art, remove all backdrop, white matte, glow, shadow and haze including openings under support and between leaves. Center on transparent background with modest margin.
- Particles: Four-cell atlas: slender upward golden-orange fire tongue with tapered tip, red-orange stepped contour, yellow core and cream highlight; gray/sage smoke puff with overlapping scalloped pixel lobes and restrained dithering; top-view dark brown housefly with two ivory veined wings and tiny legs; last cell empty. One sprite per particle, no external glow or backdrop.
- Salt hand correction: Edit only the grip in the upper row. Preserve the perfect thumb, its nail, shape, shading and position. Add three warm curled finger pads wrapping from behind around the right glass edge below the thumb, visibly overlapping that edge with small nails and joint shadows. Preserve sleeve, palm, glass, salt and lid. Keep atlas layout and transparency. The original lower-row pizza remains the runtime source to preserve it exactly.
- Salt edge mask: Image segmentation mask, exactly 1536x1024 and aligned to salt.png. Pure white only inside the true upper-row silhouette of cloth, cuff, skin, fingers and entire shaker. Pure black elsewhere including the whole bottom row. Exclude the muddy beige/brown halo above and below the sleeve and wrist, trace the actual object outline, clean stepped contour, no border expansion, internal detail, feathering, gray, glow, shadow, repositioning or scaling. Runtime uses mask luminance only; the original color pixels and measured nozzle anchor remain unchanged.
