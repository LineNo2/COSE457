import { ToolModelInterface } from "../models/interfaces/tool_model_interface";
import { SelectedToolObserver, SelectedToolSubject } from "./selected_tool_view";

export class ToolsView {
    private parents: HTMLElement;
    private onToolSelect: (tool: ToolModelInterface) => void;
    private observers: SelectedToolObserver | null;

    constructor(parents: HTMLElement, onToolSelect: (tool: ToolModelInterface) => void) {
        this.parents = parents;
        this.onToolSelect = onToolSelect;
        this.observers = null;
    }

    public render(tools: ToolModelInterface[]): void {
        this.parents.innerHTML = "";
        tools.forEach((tool: ToolModelInterface) => {
            this.parents.appendChild(this.createTool(tool));
        });
        //append div id="selected-tool"
        let selectedTool = document.createElement("div");
        selectedTool.setAttribute("id", "selected-tool");
        this.parents.appendChild(selectedTool);
    }

    private createTool(tool: ToolModelInterface): HTMLElement {
        let toolElement = document.createElement("button");
        toolElement.classList.add("tool");
        toolElement.innerHTML = tool.getToolName();
        toolElement.setAttribute("id", tool.getToolAction().toString());
        toolElement.addEventListener("click",
            () => {
                this.onToolSelect(tool);
                tool.onToolSelected();
            }
        );
        return toolElement;
    }

    public attach(subject: SelectedToolSubject): void {
        this.observers = new SelectedToolObserver(subject, this.parents);
    }
}