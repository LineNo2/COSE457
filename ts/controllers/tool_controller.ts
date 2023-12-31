import { ToolModelInterface } from "../models/interfaces/tool_model_interface";
import { SelectedToolSubject } from "../views/selected_tool_view";
import { ToolsView } from "../views/tools_view";

export class ToolController {
    private static instance: ToolController;
    private tools: ToolModelInterface[];
    private selectedTool: ToolModelInterface | null;
    private subject: SelectedToolSubject;
    private view: ToolsView;

    private constructor(view: ToolsView) {
        this.tools = [];
        this.selectedTool = null;
        this.subject = new SelectedToolSubject();
        this.view = view;
        this.view.attach(this.subject);
    }

    static getInstance(view?: ToolsView): ToolController {
        if (ToolController.instance) {
            return ToolController.instance;
        }
        if (view == null) {
            throw new Error("ToolController instance not created yet");
        }
        ToolController.instance = new ToolController(view);
        return ToolController.instance;
    }

    addTool(tool: ToolModelInterface): void {
        this.tools.push(tool);
    }

    getTools(): ToolModelInterface[] {
        return this.tools;
    }

    selectTool(tool: ToolModelInterface): void {
        console.log(tool.getToolName() + ' selected');
        this.subject.notify(tool.getToolAction());
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