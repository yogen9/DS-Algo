let Input = {
  0: [{ id: 10, title: "House", level: 0, children: [], parent_id: null }],
  1: [
    { id: 12, title: "Red Roof", level: 1, children: [], parent_id: 10 },
    { id: 18, title: "Blue Roof", level: 1, children: [], parent_id: 10 },
    { id: 13, title: "Wall", level: 1, children: [], parent_id: 10 },
  ],
  2: [
    { id: 17, title: "Blue Window", level: 2, children: [], parent_id: 12 },
    { id: 16, title: "Door", level: 2, children: [], parent_id: 13 },
    { id: 15, title: "Red Window", level: 2, children: [], parent_id: 12 },
  ],
};

let temp = Object.keys(Input)
  .map((iterator) => Input[iterator])
  .flat()
  .reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

Object.keys(temp).forEach((curr) => {
  if (temp[curr].parent_id) {
    temp[temp[curr].parent_id].children.push(temp[curr]);
  }
});

console.log(JSON.stringify(temp[Input[0][0].id]));