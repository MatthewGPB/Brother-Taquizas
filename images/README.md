# Images

Drop these files into this folder. **Filenames must match exactly** (lowercase, hyphens, no spaces).

| Filename                   | What it is                            | Used in section |
|----------------------------|---------------------------------------|-----------------|
| `bt-logo.webp`             | Brothers Taquizas circular logo       | Header + favicon|
| `food-truck.png`           | Food truck parked on Broadway         | Hero            |
| `birria-taco.jpg`          | Birria taco close-up                  | Favorites       |
| `fajitas-supreme.jpg`      | Fajitas Supreme on the skillet        | Favorites       |
| `cheesiest-quesadilla.jpg` | The cheesy quesadilla                 | Favorites       |
| `al-pastor-spread.webp`    | Al pastor tacos with pineapple        | Gallery         |
| `happy-customers.webp`     | Happy customers eating carne asada    | Gallery         |
| `family.jpg`               | David Herrera and his wife (portrait) | Our Story       |

## Where to download the originals

These same images are currently on the Shopify CDN. To pull them down before deploying:

1. **Food truck:**           https://cdn.shopify.com/s/files/1/0985/6250/7118/files/PAM_PARKING_3.png?v=1774039872&width=1200
2. **Birria Taco:**           https://cdn.shopify.com/s/files/1/0985/6250/7118/files/image_57.jpg?v=1774384651&width=1600
3. **Fajitas Supreme:**       https://cdn.shopify.com/s/files/1/0985/6250/7118/files/image_56.jpg?v=1774384323&width=1600
4. **Cheesiest Quesadilla:**  https://cdn.shopify.com/s/files/1/0985/6250/7118/files/image_58.jpg?v=1774385334&width=1600
5. **Al Pastor Spread:**      https://cdn.shopify.com/s/files/1/0985/6250/7118/files/unnamed_5.webp?v=1774385489&width=1600
6. **Happy Customers:**       https://cdn.shopify.com/s/files/1/0985/6250/7118/files/unnamed_6.webp?v=1774385489&width=1600
7. **Family:**                https://cdn.shopify.com/s/files/1/0985/6250/7118/files/Family.jpg?v=1774042023&width=1600

Right-click each link → "Save image as…" → save it with the filename in the table above (no spaces, lowercase, hyphens).

## Recommended sizes & optimization

The site automatically resizes images for display, but smaller source files = faster page loads.
Before committing, run them through https://squoosh.app/ (free, by Google) — drag, choose WebP or MozJPEG, save:

| Image           | Target max width | Suggested format |
|-----------------|------------------|------------------|
| Food truck      | 1600px           | WebP or PNG      |
| Dish photos     | 1200px           | WebP or JPEG     |
| Gallery photos  | 1400px           | WebP             |
| Family photo    | 1200px           | JPEG             |

Aim for under 300 KB each. The current Shopify versions are heavier than they need to be.

## File format guide

- **.webp** is smallest and looks great — use when you can
- **.jpg** is fine for photos
- **.png** is for graphics with transparency (logos, the truck cutout)
- Don't use BMP, TIFF, HEIC — browsers either won't render them or render slowly
