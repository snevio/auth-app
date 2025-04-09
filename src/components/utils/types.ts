

export type ComboboxDemoProps = {
    value: string;
    onChange: (value: string) => void;
};

export type ImportanceType = {

    value: string,
    label: string
}

export type DeleteTaskProps = {
    _taskId: string;
};

export type SelectProps = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export type FilterProps = {
    tasks: BasicTask[],
    setTasks: React.Dispatch<React.SetStateAction<BasicTask[]>>;
}

export type BasicTask = {
    id: string;
    title: string;
    date: string;
    importance: string;
};

export type TaskType = {
    id: string,
    title: FormDataEntryValue | null,
    task: string,
    date?: Date,
    userId: string,
    importance: string
}

export type FormProps = {
    title: FormDataEntryValue | null,
    date: Date | undefined,
    importance: string
}

