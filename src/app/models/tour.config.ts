import {capitalizeAll, capitalizeString, sanitizeString} from "./string.formatting";

export class TourConfig {
  constructor(public tour_name: string,
              public tour_director: string,
              public td_email: string,
              public dm_email: string | null = null,
              public tour_title: string | null = null) {
  }

  getOutputText() :string {
    return `CFG-TOURBASE\t`+this.getTourBase()+`
CFG-TOURNAME\t`+this.getTourName()+`
CFG-DIRECTOR\t`+this.getTourDirector()+`
CFG-EMAIL-TD\t`+this.postProcessEmail(this.td_email)+`
CFG-EMAIL-DM\t`+this.postProcessEmail(this.getDMEmail());
  }

  getTourBase() :string {
    return sanitizeString(this.tour_name, '-');
  }

  getTourName() :string {
    return capitalizeString(sanitizeString(this.tour_name, ' '));
  }

  getTourDirector() :string {
    return capitalizeAll(sanitizeString(this.tour_director, ' '));
  }

  getDMEmail() :string {
    if (this.dm_email === null || this.dm_email === '') {
      return "UNKNOWN";
    }
    return this.dm_email;
  }

  getTourTitle() :string {
    if (this.tour_title === null || this.tour_title === '') {
      return this.getEmptyTourTitle();
    }

    return capitalizeString(sanitizeString(this.tour_title, ' '));
  }

  getEmptyTourTitle() :string {
    return this.getTourName() + ' ' + new Date().getFullYear().toString();
  }

  getEntryFormLink() {
    return 'https://www.britgo.org/tournams/'+this.getTourBase()+'/'+this.getTourBase()+'-form.html'
  }

  getEntriesList() {
    return 'https://www.britgo.org/tournams/'+this.getTourBase()+'/tour-entries.html'
  }

  private postProcessEmail(email: string) {
    let output = email.replaceAll('@', ' at ');
    return output.replaceAll('.', ' dot ');
  }
}

export const DEFAULT_TOUR_CONFIG = new TourConfig(
  '',
  '',
  ''
);
