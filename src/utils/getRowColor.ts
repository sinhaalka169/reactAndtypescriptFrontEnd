export const getRowColor = (dueDate: string, completed: boolean): string => {
    const today = new Date().toISOString().split('T')[0];
    if (completed) return '#d0f0c0'; // light green
    if (dueDate < today) return '#f8d7da'; // light red
    if (dueDate === today) return '#fff3cd'; // light yellow
    return '#ffffff'; // default
  };