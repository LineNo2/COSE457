enum ToolType {
    elipse,
    rectangle,
    circle,
    select,
    line,
    text,
    image,
}

interface ToolModelInterface {
    getToolName(): string;
    getToolAction(): ToolType;
}

abstract class AbstractToolModel implements ToolModelInterface {
    protected toolName: string;
    protected toolAction: ToolType;

    constructor(toolName: string, toolAction: ToolType,) {
        this.toolName = toolName;
        this.toolAction = toolAction;
    }

    getToolName(): string {
        return this.toolName;
    }

    getToolAction(): ToolType {
        return this.toolAction;
    }
}