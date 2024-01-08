export type EventMap = {
  "dialog/close": boolean;
};

type EventName = keyof EventMap;

export type EventPayload<T extends EventName> = EventMap[T];

type AppEvent = { payload: any } & Event;

class AppEvents {
  et = new EventTarget();

  dispatch<T extends EventName>(name: T, payload: EventPayload<T>) {
    const e = new Event(name) as AppEvent;
    e.payload = payload;
    this.et.dispatchEvent(e);
  }

  addEventListener<T extends EventName>(name: T, callback: (payload: EventPayload<T>) => void) {
    const h = (e: AppEvent) => callback(e.payload);
    this.et.addEventListener(name, h);
    return () => this.et.removeEventListener(name, h);
  }
}

export const appEvents = new AppEvents();
