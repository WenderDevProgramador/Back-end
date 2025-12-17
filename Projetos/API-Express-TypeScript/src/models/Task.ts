interface TaskAttributes {
    id: number;
    title: string;
    description: string;
    status: "todo" | "doing" | "done";
    priority: "low" | "medium" | "high";
    createdAt: Date;
    updatedAt: Date;
}

export class Task {
    private static tasks: Task[] = [];
    private static sequence: number = 1;

    id: number;
    title: string;
    description: string;
    status: "todo" | "doing" | "done";
    priority: "low" | "medium" | "high";
    createdAt: Date;
    updatedAt: Date;

    constructor(attributes: TaskAttributes) {
        this.id = attributes.id;
        this.title = attributes.title;
        this.description = attributes.description;
        this.status = attributes.status;
        this.priority = attributes.priority;
        this.createdAt = attributes.createdAt;
        this.updatedAt = attributes.updatedAt;
    }

    static findAll(): Task[] {
        return [...this.tasks];
    }

    static findByID(id: number): Task | null {
        return this.tasks.find(task => task.id === id) || null;
    }

    static create(attributes: Omit<TaskAttributes, 'id' | 'createdAt' | 'updatedAt'>): Task {
        const newTask = new Task({
            id: this.sequence++,
            ...attributes,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        this.tasks.push(newTask);
        return newTask;
    }

    static update(id: number, attributes: Partial<Omit<TaskAttributes, 'id' | 'createdAt' | 'updatedAt'>>) {
        const task = this.findByID(id);
        if (!task) return null;

        Object.assign(task, attributes, { updatedAt: new Date() });
        return task;
    }

    static delete(id: number): Task | null {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return null;

        return this.tasks.splice(index, 1)[0];
    }
}