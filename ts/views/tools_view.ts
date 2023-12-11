import { ToolModelInterface } from "../models/interfaces/tool_model_interface";

export class ToolsView {
    private parents: HTMLElement;
    private onToolSelect: (tool: ToolModelInterface) => void;

    constructor(parents: HTMLElement, onToolSelect: (tool: ToolModelInterface) => void) {
        this.parents = parents;
        this.onToolSelect = onToolSelect;
    }

    public render(tools: ToolModelInterface[]): void {
        this.parents.innerHTML = "";
        tools.forEach((tool: ToolModelInterface) => {
            this.parents.appendChild(this.createTool(tool));
        });
    }

    private createTool(tool: ToolModelInterface): HTMLElement {
        let toolElement = document.createElement("button");
        toolElement.classList.add("tool");
        toolElement.innerHTML = tool.getToolName();
        toolElement.setAttribute("id", tool.getToolAction().toString());
        toolElement.addEventListener("click",
            () => {
                this.onToolSelect(tool);
            }
        );
        return toolElement;
    }

}