import { ToolModelInterface } from "../models/interfaces/tool_model_interface";
import { ToolsView } from "../views/tools_view";

export class ToolController {
    private tools: ToolModelInterface[];
    private selectedTool: ToolModelInterface | null;
    private view: ToolsView;

    constructor(view: ToolsView) {
        this.tools = [];
        this.selectedTool = null;
        this.view = view;
    }

    addTool(tool: ToolModelInterface): void {
        this.tools.push(tool);
    }

    getTools(): ToolModelInterface[] {
        return this.tools;
    }

    selectTool(tool: ToolModelInterface): void {
        console.log(tool.getToolName() + ' selected');
        this.selectedTool = tool;
    }

    resetSelectedTool(): void {
        this.selectedTool = null;
    }

    getSelectedTool(): ToolModelInterface | null {
        return this.selectedTool;
    }

    drawTools(): void {
        this.view.render(this.tools);
    }
}