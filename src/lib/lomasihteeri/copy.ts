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
  },

  // D) LomaSihteeri-sivu (profiili + placeholder)
  dashboard: {
    page_title: 'LomaSihteeri',
    trip_title: 'Matkasi',
    no_profile_title: 'Ota LomaSihteeri käyttöön',
    no_profile_body: 'Aseta matkasi päivämäärät ja kiinnostuksen kohteet, niin saat henkilökohtaisen lomakirjeen.',
    no_profile_cta: 'Avaa onboarding',
    briefing_title: 'Päivän kirje',
    briefing_placeholder: 'Tämä on MVP-versio. Päivän kirjeen sisältö (sää, tapahtumat ja kiinnostuksen mukaiset nostot) lisätään seuraavassa vaiheessa.',
    back_to_city: 'Takaisin Fuengirolan oppaaseen',
  },
};
