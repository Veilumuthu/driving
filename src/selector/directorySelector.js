const directorySelector = (directories, { text, number }) => {
    return directories.filter((directory) => {
        const textMatch = directory.name.toLowerCase().includes(text.toLowerCase());
        const numberMatch = directory.primary.includes(number)

        return textMatch && numberMatch;
    })
}

export default directorySelector;