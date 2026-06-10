import catHair from "@/assets/cat-hair.jpg";
import catCosmetics from "@/assets/cat-cosmetics.jpg";
import catOrganic from "@/assets/cat-organic.jpg";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catRtw from "@/assets/cat-rtw.jpg";
import catFabrics from "@/assets/cat-fabrics.jpg";
import catFood from "@/assets/cat-food.jpg";
import catWholesale from "@/assets/cat-wholesale.jpg";

// Item images
import hairRaw from "@/assets/items/hair-raw-vietnamese.jpg";
import hairHd from "@/assets/items/hair-hd-frontal.jpg";
import hairBody from "@/assets/items/hair-body-wave.jpg";
import hairClosure from "@/assets/items/hair-closure.jpg";
import hairPixie from "@/assets/items/hair-pixie.jpg";

import cosFoundation from "@/assets/items/cos-foundation.jpg";
import cosLipsticks from "@/assets/items/cos-lipsticks.jpg";
import cosSkincare from "@/assets/items/cos-skincare.jpg";
import cosBodyButter from "@/assets/items/cos-body-butter.jpg";
import cosPerfume from "@/assets/items/cos-perfume.jpg";
import cosLashes from "@/assets/items/cos-lashes.jpg";

import orgShea from "@/assets/items/org-shea.jpg";
import orgBlacksoap from "@/assets/newImages/blackSoap.jpeg";
import orgCocoa from "@/assets/items/org-cocoa.jpg";
import orgCoconut from "@/assets/items/org-coconut.jpg";
import orgEssentialOils from "@/assets/newImages/essentialOils.jpg";
import orgHairOils from "@/assets/newImages/hairOils.jpg";

import jewCoral from "@/assets/items/jew-coral.jpg";
import jewNecklace from "@/assets/items/jew-necklace.jpg";
import jewWaist from "@/assets/items/jew-waist.jpg";
import jewCuffs from "@/assets/items/jew-cuffs.jpg";
import jewFan from "@/assets/items/jew-fan.jpg";
import jewHandbag from "@/assets/newImages/rattanBag.jpeg";

import rtwAnkara from "@/assets/items/rtw-ankara-maxi.jpg";
import rtwAgbada from "@/assets/items/rtw-agbada.jpg";
import rtwSenator from "@/assets/newImages/senatorWear.jpg";
import rtwAsoebi from "@/assets/items/rtw-asoebi.jpg";
import rtwKaftan from "@/assets/items/rtw-kaftan.jpg";
import rtwKids from "@/assets/items/rtw-kids.jpg";

import fabHollandais from "@/assets/newImages/fabrics/ankara.jpeg";
import fabAdire from "@/assets/newImages/fabrics/adire.jpeg";
import fabAsooke from "@/assets/newImages/fabrics/asooke.jpeg";
import fabGeorge from "@/assets/newImages/fabrics/georgefabric.jpeg";
import fabAkwete from "@/assets/newImages/fabrics/akwete.jpeg";
import fabDamask from "@/assets/newImages/fabrics/damask.jpeg";

import foodGarri from "@/assets/newImages/ijebuGarri.jpeg";
import foodEgusi from "@/assets/newImages/Egusi.jpeg";
import foodPalm from "@/assets/newImages/palmOil.png";
import foodOgbono from "@/assets/newImages/ogbono.jpeg";
import foodCrayfish from "@/assets/newImages/crayfish.jpeg";
// import foodSuya from "@/assets/items/food-suya.jpg";
import foodStockfish from "@/assets/newImages/stockfish.jpeg";

import whlHair from "@/assets/items/whl-hair.jpg";
import whlBoutique from "@/assets/items/whl-boutique.jpg";
import whlCosmetics from "@/assets/items/whl-cosmetics.jpg";
import whlFood from "@/assets/items/whl-food.jpg";

export interface CategoryItem {
  name: string;
  desc: string;
  image: string;
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
      { name: "Raw Vietnamese Bundles", desc: "Unprocessed double-drawn bundles in 12\"–32\" lengths.", image: hairRaw },
      { name: "HD Lace Frontal Wigs", desc: "Glueless HD lace, 13x6 frontal, pre-plucked hairline.", image: hairHd },
      { name: "Brazilian Body Wave", desc: "Soft body-wave bundles, tangle-free, dye-able to #613.", image: hairBody },
      { name: "Closure Wigs (4x4)", desc: "Beginner-friendly closures, breathable Swiss lace.", image: hairClosure },
      { name: "Pixie Cut Wigs", desc: "Ready-to-wear short pixie styles in natural colours.", image: hairPixie },
    ],
  },
  {
    slug: "cosmetics-and-makeup",
    title: "Cosmetics & Makeup",
    desc: "African-owned beauty brands, foundations, skincare, fragrance.",
    image: catCosmetics,
    items: [
      { name: "Full-Coverage Foundation Range", desc: "Foundations matched to deep skin tones.", image: cosFoundation },
      { name: "Matte & Satin Lipsticks", desc: "Long-wear matte and satin lipstick shades.", image: cosLipsticks },
      { name: "Clean Plant-Based Skincare", desc: "Natural skincare serums, cleansers and toners.", image: cosSkincare },
      { name: "Whipped Natural Body Butters", desc: "Moisturising body butters in signature scents.", image: cosBodyButter },
      { name: "Concentrated Perfume Oils", desc: "Attars and oud-based fragrance oils.", image: cosPerfume },
      { name: "Lash & Brow Kits", desc: "Mink lashes, brow gels and precision tools.", image: cosLashes },
    ],
  },
  {
    slug: "organic-products",
    title: "Organic Cosmetics",
    desc: "Organic skincare, essential oils and natural beauty staples.",
    image: catOrganic,
    items: [
      { name: "Raw Unrefined Shea Butter", desc: "Grade-A ivory shea, sourced from northern Nigeria.", image: orgShea },
      { name: "African Black Soap", desc: "Traditional Dudu-Osun style, plantain ash and palm.", image: orgBlacksoap },
      { name: "Pure Cocoa Butter", desc: "Cold-pressed cocoa butter blocks and tubs.", image: orgCocoa },
      { name: "Cold-Pressed Coconut Oil", desc: "Virgin coconut oil for skin, hair and cooking.", image: orgCoconut },
      { name: "Essential Oils", desc: "Lavender, tea tree, eucalyptus and peppermint essential oils.", image: orgEssentialOils },
      { name: "Natural Hair Oils", desc: "Castor, argan and jojoba oil blends for hair and scalp.", image: orgHairOils },
    ],
  },
  {
    slug: "jewelry-and-accessories",
    title: "Jewelry & Accessories",
    desc: "Beaded sets, brass, gold-plated and contemporary statement pieces.",
    image: catJewelry,
    items: [
      { name: "Bridal Coral Bead Set", desc: "Traditional Edo/Igbo coral bead bridal sets.", image: jewCoral },
      { name: "Gold-Plated Statement Necklace", desc: "Hand-crafted gold-plated brass statement chokers.", image: jewNecklace },
      { name: "Waist Beads", desc: "Hand-strung waist beads in custom colours and lengths.", image: jewWaist },
      { name: "Brass Cuff Bracelets", desc: "Polished brass cuffs with tribal engraving.", image: jewCuffs },
      { name: "Beaded Bridal Fans", desc: "Hand-beaded fans for traditional weddings.", image: jewFan },
      { name: "Rattan Bags", desc: "Handwoven rattan and straw bags for a natural finish.", image: jewHandbag },
    ],
  },
  {
    slug: "rtw-fashion",
    title: "RTW Fashion",
    desc: "Ready-to-wear Ankara, Kitenge, and modern African couture.",
    image: catRtw,
    items: [
      { name: "Ankara Maxi Dresses", desc: "Tailored ready-to-wear maxi dresses in modern cuts.", image: rtwAnkara },
      { name: "Agbada Sets (Men)", desc: "Three-piece embroidered agbada in premium fabrics.", image: rtwAgbada },
      { name: "Senator Wear Sets", desc: "Classic Nigerian senator suits for men.", image: rtwSenator },
      { name: "Aso-Ebi Bridal Trains", desc: "Coordinated bridal-party Aso-Ebi packages.", image: rtwAsoebi },
      { name: "Kaftans & Boubous", desc: "Flowing kaftans with intricate beadwork.", image: rtwKaftan },
      { name: "Children's Ankara Outfits", desc: "Matching family Ankara wear for kids.", image: rtwKids },
    ],
  },
  {
    slug: "fabrics",
    title: "Fabrics",
    desc: "Ankara, Adire, Aso-Oke — by the yard or in bulk.",
    image: catFabrics,
    items: [
      { name: "Ankara", desc: "Authentic Ankara wax prints, 6-yard pieces in bold patterns.", image: fabHollandais },
      { name: "Adire", desc: "Hand-dyed indigo Adire from Abeokuta.", image: fabAdire },
      { name: "Aso-Oke", desc: "Handwoven Aso-Oke for bridal headties and wrappers.", image: fabAsooke },
      { name: "George Fabric", desc: "Indian George fabric in deep jewel tones.", image: fabGeorge },
      { name: "Akwete", desc: "Handwoven Akwete cloth from south-eastern Nigeria.", image: fabAkwete },
      { name: "Damask", desc: "Premium damask in solid colours by the yard.", image: fabDamask },
    ],
  },
  {
    slug: "nigerian-foodstuffs",
    title: "Nigerian Foodstuffs",
    desc: "Garri, egusi, palm oil, spices and pantry essentials.",
    image: catFood,
    items: [
      { name: "Ijebu Garri", desc: "Fine, sour Ijebu garri in sealed 5kg bags.", image: foodGarri },
      { name: "Egusi Seeds (Ground)", desc: "Ground melon seeds for traditional egusi soup.", image: foodEgusi },
      { name: "Red Palm Oil", desc: "Authentic Nigerian red palm oil, unrefined.", image: foodPalm },
      { name: "Ogbono Seeds", desc: "Wild mango seeds for draw soup.", image: foodOgbono },
      { name: "Crayfish (Dried & Ground)", desc: "Premium dried crayfish, finely ground.", image: foodCrayfish },
      // { name: "Suya Spice Mix", desc: "Authentic yaji suya pepper blend.", image: foodSuya },
      { name: "Dried Stockfish & Bitter Leaf", desc: "Pantry staples vacuum-sealed for freshness.", image: foodStockfish },
    ],
  },
  {
    slug: "wholesale-and-retail",
    title: "Wholesale & Retail",
    desc: "Bulk sourcing for resellers and one-off retail orders.",
    image: catWholesale,
    items: [
      { name: "Bulk Hair Vendor Orders", desc: "Mixed-bundle wholesale packs for hair resellers.", image: whlHair },
      { name: "Boutique Restock Packages", desc: "Curated RTW and accessory restock bundles.", image: whlBoutique },
      { name: "Wholesale Cosmetics Cartons", desc: "Sealed cartons direct from Nigerian beauty brands.", image: whlCosmetics },
      { name: "Mixed Foodstuff Containers", desc: "Container-load sourcing for African food shops.", image: whlFood },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
