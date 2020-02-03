export class ConfigMockService {
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
      }
    ]
  };

  constructor() {
  }

  getSourceLabelByValue(value: string): string {
    return '';
  }

}
