import catHair from "@/assets/cat-hair.jpg";
import catCosmetics from "@/assets/cat-cosmetics.jpg";
import catOrganic from "@/assets/cat-organic.jpg";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catRtw from "@/assets/cat-rtw.jpg";
import catFabrics from "@/assets/cat-fabrics.jpg";
import catFood from "@/assets/cat-food.jpg";
import catWholesale from "@/assets/cat-wholesale.jpg";

export interface CategoryItem {
  name: string;
  desc: string;
}

export interface Category {
  slug: string;
  title: string;
  desc: string;
  image: string;
  items: CategoryItem[];
}

export const categories: Category[] = [
  {
    slug: "hair-and-wigs",
    title: "Hair & Wigs",
    desc: "Premium human hair, lace wigs, bundles and accessories.",
    image: catHair,
    items: [
      { name: "Raw Vietnamese Bundles", desc: "Unprocessed double-drawn bundles in 12\"–32\" lengths." },
      { name: "HD Lace Frontal Wigs", desc: "Glueless HD lace, 13x6 frontal, pre-plucked hairline." },
      { name: "Brazilian Body Wave", desc: "Soft body-wave bundles, tangle-free, dye-able to #613." },
      { name: "Closure Wigs (4x4)", desc: "Beginner-friendly closures, breathable Swiss lace." },
      { name: "Pixie Cut Wigs", desc: "Ready-to-wear short pixie styles in natural colours." },
      { name: "Bonnets & Wig Caps", desc: "Satin bonnets and stocking caps for wig care." },
    ],
  },
  {
    slug: "cosmetics-and-makeup",
    title: "Cosmetics & Makeup",
    desc: "African-owned beauty brands, foundations, skincare, fragrance.",
    image: catCosmetics,
    items: [
      { name: "Zaron Foundation Range", desc: "Full-coverage foundations matched to deep skin tones." },
      { name: "House of Tara Lipsticks", desc: "Long-wear matte and satin Nigerian lipstick shades." },
      { name: "Arami Essentials Skincare", desc: "Clean, plant-based skincare from Lagos." },
      { name: "Orïkì Body Butters", desc: "Whipped natural body butters in signature scents." },
      { name: "Nigerian Perfume Oils", desc: "Concentrated attars and oud-based fragrance oils." },
      { name: "Lash & Brow Kits", desc: "Mink lashes, brow gels and precision tools." },
    ],
  },
  {
    slug: "organic-products",
    title: "Organic Products",
    desc: "Shea butter, black soap, cocoa butter and natural skincare staples.",
    image: catOrganic,
    items: [
      { name: "Raw Unrefined Shea Butter", desc: "Grade-A ivory shea, sourced from northern Nigeria." },
      { name: "African Black Soap", desc: "Traditional Dudu-Osun style, plantain ash and palm." },
      { name: "Pure Cocoa Butter", desc: "Cold-pressed cocoa butter blocks and tubs." },
      { name: "Cold-Pressed Coconut Oil", desc: "Virgin coconut oil for skin, hair and cooking." },
      { name: "Moringa Powder", desc: "Nutrient-rich moringa leaf powder, 250g packs." },
      { name: "Honey & Bee Products", desc: "Raw forest honey and beeswax in bulk." },
    ],
  },
  {
    slug: "jewelry-and-accessories",
    title: "Jewelry & Accessories",
    desc: "Beaded sets, brass, gold-plated and contemporary statement pieces.",
    image: catJewelry,
    items: [
      { name: "Bridal Coral Bead Set", desc: "Traditional Edo/Igbo coral bead bridal sets." },
      { name: "Gold-Plated Statement Necklace", desc: "Hand-crafted gold-plated brass statement chokers." },
      { name: "Waist Beads", desc: "Hand-strung waist beads in custom colours and lengths." },
      { name: "Brass Cuff Bracelets", desc: "Polished brass cuffs with tribal engraving." },
      { name: "Beaded Bridal Fans", desc: "Hand-beaded fans for traditional weddings." },
      { name: "Ankara Print Handbags", desc: "Structured handbags in vibrant Ankara prints." },
    ],
  },
  {
    slug: "rtw-fashion",
    title: "RTW Fashion",
    desc: "Ready-to-wear Ankara, Kitenge, and modern African couture.",
    image: catRtw,
    items: [
      { name: "Ankara Maxi Dresses", desc: "Tailored ready-to-wear maxi dresses in modern cuts." },
      { name: "Agbada Sets (Men)", desc: "Three-piece embroidered agbada in premium fabrics." },
      { name: "Senator Wear Sets", desc: "Classic Nigerian senator suits for men." },
      { name: "Aso-Ebi Bridal Trains", desc: "Coordinated bridal-party Aso-Ebi packages." },
      { name: "Kaftans & Boubous", desc: "Flowing kaftans with intricate beadwork." },
      { name: "Children's Ankara Outfits", desc: "Matching family Ankara wear for kids." },
    ],
  },
  {
    slug: "fabrics",
    title: "Fabrics",
    desc: "Ankara, Adire, Aso-Oke — by the yard or in bulk.",
    image: catFabrics,
    items: [
      { name: "Hollandais Wax Ankara", desc: "Authentic Hollandais wax prints, 6-yard pieces." },
      { name: "Adire Tie-Dye Fabric", desc: "Hand-dyed indigo Adire from Abeokuta." },
      { name: "Aso-Oke (Bridal)", desc: "Handwoven Aso-Oke for bridal headties and wrappers." },
      { name: "George Wrapper", desc: "Indian George fabric in deep jewel tones." },
      { name: "Lace & Sequin Fabric", desc: "Heavy beaded lace for occasion wear." },
      { name: "Damask Materials", desc: "Premium damask in solid colours by the yard." },
    ],
  },
  {
    slug: "nigerian-foodstuffs",
    title: "Nigerian Foodstuffs",
    desc: "Garri, egusi, palm oil, spices and pantry essentials.",
    image: catFood,
    items: [
      { name: "Ijebu Garri", desc: "Fine, sour Ijebu garri in sealed 5kg bags." },
      { name: "Egusi Seeds (Ground)", desc: "Ground melon seeds for traditional egusi soup." },
      { name: "Red Palm Oil", desc: "Authentic Nigerian red palm oil, unrefined." },
      { name: "Ogbono Seeds", desc: "Wild mango seeds for draw soup." },
      { name: "Crayfish (Dried & Ground)", desc: "Premium dried crayfish, finely ground." },
      { name: "Suya Spice Mix", desc: "Authentic yaji suya pepper blend." },
      { name: "Dried Stockfish & Bitter Leaf", desc: "Pantry staples vacuum-sealed for freshness." },
    ],
  },
  {
    slug: "wholesale-and-retail",
    title: "Wholesale & Retail",
    desc: "Bulk sourcing for resellers and one-off retail orders.",
    image: catWholesale,
    items: [
      { name: "Bulk Hair Vendor Orders", desc: "Mixed-bundle wholesale packs for hair resellers." },
      { name: "Boutique Restock Packages", desc: "Curated RTW and accessory restock bundles." },
      { name: "Wholesale Cosmetics Cartons", desc: "Sealed cartons direct from Nigerian beauty brands." },
      { name: "Mixed Foodstuff Containers", desc: "Container-load sourcing for African food shops." },
      { name: "Private-Label Sourcing", desc: "We help you brand and source your own line." },
      { name: "Sample Sourcing", desc: "Order single units to test before going bulk." },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
