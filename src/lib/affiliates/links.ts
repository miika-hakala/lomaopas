/**
 * Affiliate-linkkien keskitetty hallinta
 *
 * Periaatteet (docs/monetization.md):
 * - Sisältö ensin, ei aggressiivisuutta
 * - Relevanssi ja läpinäkyvyys
 * - Turistifokus (1–14 vrk)
 */

export interface AffiliateLink {
  url: string;
  label: string;
  partner: string;
}

// Placeholder-linkit: vaihdetaan oikeisiin kun affiliate-tilit aktivoidaan
const AFFILIATE_IDS = {
  booking: 'PLACEHOLDER',
  getyourguide: 'PLACEHOLDER',
  rentalcars: 'PLACEHOLDER',
  welcomepickups: 'PLACEHOLDER',
};

/**
 * Majoitus (Booking.com)
 */
export const accommodation = {
  fuengirola: {
    url: `https://www.booking.com/city/es/fuengirola.html?aid=${AFFILIATE_IDS.booking}`,
    label: 'Hae majoitusta Fuengirolasta',
    partner: 'Booking.com',
  } satisfies AffiliateLink,
  malaga: {
    url: `https://www.booking.com/city/es/malaga.html?aid=${AFFILIATE_IDS.booking}`,
    label: 'Hae majoitusta Málagasta',
    partner: 'Booking.com',
  } satisfies AffiliateLink,
  torremolinos: {
    url: `https://www.booking.com/city/es/torremolinos.html?aid=${AFFILIATE_IDS.booking}`,
    label: 'Hae majoitusta Torremolinoksesta',
    partner: 'Booking.com',
  } satisfies AffiliateLink,
  benalmadena: {
    url: `https://www.booking.com/city/es/benalmadena.html?aid=${AFFILIATE_IDS.booking}`,
    label: 'Hae majoitusta Benalmádenasta',
    partner: 'Booking.com',
  } satisfies AffiliateLink,
  marbella: {
    url: `https://www.booking.com/city/es/marbella.html?aid=${AFFILIATE_IDS.booking}`,
    label: 'Hae majoitusta Marbellasta',
    partner: 'Booking.com',
  } satisfies AffiliateLink,
};

/**
 * Kuljetuspalvelut
 */
export const transport = {
  airportTransfer: {
    url: `https://www.welcomepickups.com/malaga-airport/?ref=${AFFILIATE_IDS.welcomepickups}`,
    label: 'Varaa lentokenttäkuljetus etukäteen',
    partner: 'Welcome Pickups',
  } satisfies AffiliateLink,
  carRental: {
    url: `https://www.rentalcars.com/search-car?affiliateCode=${AFFILIATE_IDS.rentalcars}&city=Fuengirola`,
    label: 'Vertaa autonvuokrauksen hintoja',
    partner: 'Rentalcars',
  } satisfies AffiliateLink,
};

/**
 * Retket ja aktiviteetit (GetYourGuide)
 */
export const activities = {
  malaga: {
    url: `https://www.getyourguide.com/malaga-l162/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Málagaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  malagaDayTrips: {
    url: `https://www.getyourguide.com/malaga-l162/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso päiväretket Málagasta',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  ronda: {
    url: `https://www.getyourguide.com/ronda-l963/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Rondaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  mijas: {
    url: `https://www.getyourguide.com/mijas-l4535/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Mijasiin',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  fuengirolaDayTrips: {
    url: `https://www.getyourguide.com/fuengirola-l967/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso päiväretket Fuengirolasta',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  marbellaDayTrips: {
    url: `https://www.getyourguide.com/marbella-l169/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso päiväretket Marbellasta',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  marbella: {
    url: `https://www.getyourguide.com/marbella-l169/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso aktiviteetit Marbellassa',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  granada: {
    url: `https://www.getyourguide.com/granada-l38/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Granadaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  nerja: {
    url: `https://www.getyourguide.com/nerja-l1122/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Nerjaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  torremolinos: {
    url: `https://www.getyourguide.com/torremolinos-l968/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Torremolinoksesta',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  benalmadena: {
    url: `https://www.getyourguide.com/benalmadena-l969/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Katso retket Benalmádenaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
};

/**
 * Lipunmyynti nähtävyyksiin
 */
export const tickets = {
  bioparc: {
    url: `https://www.getyourguide.com/fuengirola-l967/bioparc-fuengirola-tickets-t123456/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Bioparciin',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  picassoMuseum: {
    url: `https://www.getyourguide.com/malaga-l162/picasso-museum-malaga-tickets-t12345/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Picasso-museoon',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  alcazaba: {
    url: `https://www.getyourguide.com/malaga-l162/alcazaba-malaga-tickets-t12346/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Alcazabaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  aqualand: {
    url: `https://www.getyourguide.com/torremolinos-l968/aqualand-torremolinos-tickets-t12347/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Aqualandiin',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  selwoMarina: {
    url: `https://www.getyourguide.com/benalmadena-l969/selwo-marina-tickets-t12348/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Selwo Marinaan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  teleferico: {
    url: `https://www.getyourguide.com/benalmadena-l969/teleferico-benalmadena-tickets-t12349/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput köysirataan',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  seaLife: {
    url: `https://www.getyourguide.com/benalmadena-l969/sea-life-benalmadena-tickets-t12350/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Sea Lifeen',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
  tivoliWorld: {
    url: `https://www.getyourguide.com/benalmadena-l969/tivoli-world-tickets-t12351/?partner_id=${AFFILIATE_IDS.getyourguide}`,
    label: 'Osta liput Tivoli Worldiin',
    partner: 'GetYourGuide',
  } satisfies AffiliateLink,
};

/**
 * Matkavakuutukset
 * Huom: Vakuutuslinkit lisätään kun kumppanuus varmistettu
 */
export const insurance = {
  comparison: {
    url: '#', // Placeholder
    label: 'Vertaa matkavakuutuksia',
    partner: 'Tulossa',
  } satisfies AffiliateLink,
};
