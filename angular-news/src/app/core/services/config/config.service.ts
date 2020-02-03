import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  newsApi = {
    apiKey: '6017a840ef644f4fb0a521c8674c5b4a',
    url: 'https://newsapi.org/v2/everything?',
    channels: [
      {
        label: 'LOCAL NEWS',
        value: 'local-news'
      },
      {
        label: 'ABC NEWS',
        value: 'abc-news'
      },
      {
        label: 'BBC NEWS',
        value: 'bbc-news'
      },
      {
        label: 'BBC SPORT',
        value: 'bbc-sport'
      },
      {
        label: 'FOX NEWS',
        value: 'fox-news'
      },
      {
        label: 'FOX SPORTS',
        value: 'fox-sports'
      },
      {
        label: 'GOOGLE NEWS',
        value: 'google-news'
      },
    ]
  };

  constructor() {
  }

  getSourceLabelByValue(value: string): string {
    const channel = this.newsApi.channels.find(_channel => _channel.value === value);
    if (channel) {
      return channel.label;
    }
    return '';
  }

}
