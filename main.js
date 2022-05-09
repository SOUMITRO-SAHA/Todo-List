add = document.getElementById("add");
add.addEventListener("click", () => {
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;

  if (localStorage.getItem("itemsJson") == null) {
    console.log("Updating List...");
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  // ************Populate The Table**************
  tableBody = document.getElementById("table-body");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
     <tr>
            <th scope="row">${index}</th>
            <td>${element[0]} </td>
            <td>${element[1]} </td>
            <td><button class="btn btn-primary">Delete</button></td>
          </tr>

     `;
  });
});
