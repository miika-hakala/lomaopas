export const copy = {
  // A) Kaupunkisivun LomaSihteeri-nosto
  cta: {
    title: 'LomaSihteeri – huolehtii lomastasi',
    body: 'Kerro matkasi päivämäärät ja kiinnostuksen kohteet. LomaSihteeri kokoaa sinulle joka aamu päivän tärkeimmät vinkit ja tapahtumat.',
    button: 'Ota LomaSihteeri käyttöön',
    note: 'Ei kirjautumista. Ei sitoumusta.',
  },

  // B) Onboarding vaihe 1 (päivämäärät)
  onboarding1: {
    page_title: 'Aloitetaan matkasi tiedoista',
    help: 'Valitse saapumis- ja lähtöpäivä. Näiden perusteella LomaSihteeri ajoittaa viestit oikein.',
    label_arrival: 'Saapumispäivä',
    label_departure: 'Lähtöpäivä',
    error_missing: 'Täytä molemmat päivämäärät jatkaaksesi.',
    btn_next: 'Seuraava',
    btn_back: 'Takaisin',
    step_indicator: 'Vaihe 1/2',
  },

  // C) Onboarding vaihe 2 (kiinnostukset)
  onboarding2: {
    page_title: 'Mikä kiinnostaa lomalla?',
    help: 'Valitse kiinnostuksen kohteet. Näytämme sinulle enemmän juuri näihin liittyviä tärppejä.',
    interests: {
      ruoka_ja_viini: 'Ruoka & viini',
      kulttuuri: 'Kulttuuri',
      rannat: 'Rannat',
      perhe: 'Perhe',
      golf: 'Golf',
      urheilu: 'Urheilu',
    },
    btn_done: 'Valmis',
    saved_note: 'Tallennamme valinnat vain tähän laitteeseen.',
    step_indicator: 'Vaihe 2/2',
    edit_later_note: 'Voit muuttaa valintoja myöhemmin.',
  },

  // D) LomaSihteeri-sivu (profiili + placeholder)
  dashboard: {
    page_title: 'LomaSihteeri',
    trip_title: 'Matkasi',
    edit_link: 'Muokkaa tietoja',
    clear_btn: 'Nollaa profiili',
    no_profile_title: 'Ota LomaSihteeri käyttöön',
    no_profile_body: 'Aseta matkasi päivämäärät ja kiinnostuksen kohteet, niin saat henkilökohtaisen lomakirjeen.',
    no_profile_cta: 'Aloita tästä',
    briefing_title: 'Päivän kirje',
    briefing_placeholder: 'Tämä on MVP-versio. Päivän kirjeen sisältö (sää, tapahtumat ja kiinnostuksen mukaiset nostot) lisätään seuraavassa vaiheessa.',
    back_to_city: 'Takaisin Fuengirolan oppaaseen',
    label_city: 'Kaupunki',
    label_start: 'Loma alkaa',
    label_end: 'Loma päättyy',
    label_interests: 'Kiinnostukset',
    interests_none: 'Ei valittu',
  },

  // E) Päivän kirje -demo (kovakoodattu sisältö)
  briefing: {
    demo_badge: 'Demo',
    status_text: 'Tänään: päivittäinen aamukirje (demo)',

    weather_title: 'Sää',
    weather_text: 'Pääosin selkeää, 24 °C. Aamupäivä paras ulkoiluun.',

    alerts_title: 'Lomaasi vaikuttavat',
    alerts_ok: 'Ei merkittäviä häiriöitä tänään.',
    alerts_ok_icon: '✓',

    events_title: 'Tänään tapahtuu',
    events_none: 'Ei merkittäviä tapahtumia tänään.',
    events: [
      'Aamupäivän markkinat (keskusta)',
      'Rantapromenadin iltameno klo 20 alkaen',
    ],

    interests_title: 'Sinua kiinnostaa tänään',
    interest_tips: {
      ruoka_ja_viini: 'Tapas-kierros iltapäivällä – kokeile paikallisia klassikoita.',
      kulttuuri: 'Kevyt nähtävyys keskustassa: Castillo Sohail on kävelymatkan päässä.',
      rannat: 'Ranta aamupäivällä – Playa de los Boliches on rauhallisimmillaan ennen klo 11.',
      perhe: 'Bioparc Fuengirola sopii koko perheelle – varaa 2–3 tuntia.',
      golf: 'Kenttäpäivä tai driving range – Mijas Golf on 15 min ajomatkan päässä.',
      urheilu: 'Kävelyreitti rantapromenadilla tai aamujumppa rannalla.',
    },
    interests_fallback: 'Tutustu rantapromenadiin – helppo ja rento aloitus päivälle.',

    tip_title: 'Päivän vinkki',
    tip_text: 'Varaa iltapäivälle siesta-tauko. Kaupat ja ravintolat hiljenevät klo 14–17, ja illalla elämä jatkuu myöhään.',
  },
};
