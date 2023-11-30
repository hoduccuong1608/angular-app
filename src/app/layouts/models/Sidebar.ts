export class Sidebar {
  private _state: string;
  private _open: boolean;

  constructor(state: string, open: boolean) {
    this._state = state;
    this._open = open;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
  }
}
