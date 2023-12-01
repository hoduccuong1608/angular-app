export class Sidebar {
  private _state: string;
  private _collapse: boolean;

  constructor(state: string, collapse: boolean) {
    this._state = state;
    this._collapse = collapse;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get collapse(): boolean {
    return this._collapse;
  }

  set collapse(value: boolean) {
    this._collapse = value;
  }
}
