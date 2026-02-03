export interface LomaProfile {
  city_slug: string;
  start_date: string;
  end_date: string;
  interests: string[];
}

export function getLomasihteeriStatus(profile: LomaProfile | null): string {
  if (!profile || !profile.start_date || !profile.end_date) {
    return 'Profiilia ei löytynyt.';
  }

  const now = new Date();
  const start = new Date(profile.start_date);
  const end = new Date(profile.end_date);
  
  // Asetetaan kellonajat nollaan, jotta vertailu on reilu
  now.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const oneDay = 1000 * 60 * 60 * 24;
  const daysUntilStart = Math.round((start.getTime() - now.getTime()) / oneDay);

  if (daysUntilStart > 3) {
    return `Loma alkaa ${daysUntilStart} päivän päästä. Ennakkoviesti lähetetään 3 päivää ennen lomaa.`;
  }

  if (daysUntilStart > 0 && daysUntilStart <= 3) {
    return `Loma alkaa ${daysUntilStart} päivän päästä. Ennakkoviestin aika! (T-3 message due)`;
  }

  if (now >= start && now <= end) {
    const dayOfVacation = Math.round((now.getTime() - start.getTime()) / oneDay) + 1;
    return `Lomasi on käynnissä (päivä ${dayOfVacation}). Päivittäisen lomakirjeen aika! (Daily briefing due)`;
  }
  
  if (now.getTime() === new Date(end).setDate(end.getDate() -1)) {
	return `Lomasi päättyy huomenna. Loppuviestin aika! (T-1 message due)`;
  }

  if (now > end) {
    return 'Lomasi on päättynyt. Kiitos ja tervetuloa uudelleen!';
  }

  return 'Odotetaan loman alkua.';
}
