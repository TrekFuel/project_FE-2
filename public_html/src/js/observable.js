// eslint-disable-next-line import/prefer-default-export
export class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  next(data) {
    this.subscribers.forEach((sb) => {
      sb(data);
    });
  }
}
