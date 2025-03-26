document.forms["student-details-form"].addEventListener(
  "submit",
  function (event) {
    event.preventDefault();                          // Prevent form from submitting normally
    const name = event.target.name.value;
    const age  = event.target.age.value;
    const dob  = event.target.dob.value;
    const gender  = event.target.gender.value;
    const student = { name, age, dob, gender };

    const previousRecordsArray = window.localStorage.getItem("records") ?? JSON.stringify([]);
    const previousRecordsArrayParsed = JSON.parse(previousRecordsArray);
    // debugger;
    console.log("previousRecordsArray", previousRecordsArrayParsed);
    previousRecordsArrayParsed.push(student);
    window.localStorage.setItem( "records", JSON.stringify(previousRecordsArrayParsed)
   );
   event.target.reset();
  }
   
);

// Nullish coalescing operator

console.log(undefined || "Arbish");
console.log(null || "Arbish");
console.log(undefined && "Arbish");
console.log(null && "Arbish");
console.log(null ?? "Arbish");
console.log(undefined ?? "Arbish");
console.log("" ?? "Arbish");
console.log(NaN ?? "Arbish");
console.log(false ?? "Arbish");
console.log(true ?? "Arbish");

// console.log(null.length);
// console.log(undefined.length);

// const data = null ?? [];
// data.length;