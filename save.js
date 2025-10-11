let name = document.getElementById("name");
let group = document.getElementById("group");
let special = document.getElementById("special");

let file_name = name;
let file_group = group;
let file_special = special;

function save() {
    const data = [{
        name: name.value,
        group: group.value,
        special: special.value
    }];

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${file_name.value}_${file_group.value}_${file_special.value}.json`;
    link.click();

    name.value = "";
    group.value = "";
    special.value = "";
}
