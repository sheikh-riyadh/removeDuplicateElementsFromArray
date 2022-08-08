const names = ["Anik", "Polash", "Dina", "Sakib", "Polash", "Anik", "Dina", "Polash", "Najmul", "Sakib"];


function removeDuplicate(names) {
    const uniqueName = [];
    for (let i = 0; i < names.length; i++) {
        if (uniqueName.includes(names[i]) === false) {
            uniqueName.push(names[i]);
        }
    }

    return uniqueName;
}

const allUniqueNames = removeDuplicate(names)

console.log(allUniqueNames);