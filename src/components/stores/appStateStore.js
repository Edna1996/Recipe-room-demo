
import { makeAutoObservable } from 'mobx';

class AppStateStore {
    appState = {};
  
    constructor() {
      makeAutoObservable(this);
    }
  
    updateAppState = (key, value) => {
      this.appState[key] = value;
    };
  }

  const appStateStore = new AppStateStore();

  export default appStateStore;
  