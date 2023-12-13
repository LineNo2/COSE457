import { ToolType } from "../models/interfaces/tool_model_interface";

interface Observer<T> {
    update(value: T): void;
}

interface Subject<T> {
    attach(observer: Observer<T>): void;
    detach(observer: Observer<T>): void;
    notify(value: T): void;
}

export class SelectedToolSubject implements Subject<ToolType> {
    private observers: Observer<ToolType>[];

    constructor() {
        this.observers = [];
    }

    attach(observer: Observer<ToolType>): void {
        this.observers.push(observer);
    }

    detach(observer: Observer<ToolType>): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(value: ToolType): void {
        this.observers.forEach(observer => observer.update(value));
    }
}

export class SelectedToolObserver implements Observer<ToolType>{
    private subject: Subject<ToolType>;
    private parents: HTMLElement;

    constructor(subject: Subject<ToolType>, parents: HTMLElement) {
        this.subject = subject;
        this.subject.attach(this);
        this.parents = parents;
    }

    update(value: ToolType): void {
        let toolDisplay = this.parents.querySelector("#selected-tool")!;
        toolDisplay.innerHTML = value.toString();
    }
}