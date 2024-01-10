import {capitalizeAll, capitalizeString, sanitizeString} from "./string.formatting";

export class TourConfig {
  constructor(public tour_name: string,
              public tour_director: string,
              public td_email: string,
              public dm_email: string | null = null,
              public tour_title: string | null = null) {
  }

  getOutputText() {
    return `CFG-TOURBASE\t`+this.getTourBase()+`
CFG-TOURNAME\t`+this.getTourName()+`
CFG-DIRECTOR\t`+this.getTourDirector()+`
CFG-EMAIL-TD\t`+this.td_email+`
CFG-EMAIL-DM\t`+this.getDMEmail();
  }

  getTourBase() {
    return sanitizeString(this.tour_name, '-');
  }

  getTourName() {
    return capitalizeString(sanitizeString(this.tour_name, ' '));
  }

  getTourDirector() {
    return capitalizeAll(sanitizeString(this.tour_director, ' '));
  }

  getDMEmail() {
    return !this.dm_email? "UNKNOWN": this.dm_email;
  }

  getTourTitle() {
    if (this.tour_title === null) {
      return this.getTourName() + new Date().getFullYear().toString();
    }

    return capitalizeString(sanitizeString(this.tour_title, ' '));
  }

}

export const DEFAULT_TOUR_CONFIG = new TourConfig(
  'club name',
  'Name Surname',
  'username@email.com'
);
