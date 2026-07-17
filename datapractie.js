// Task 1
function maasGunu() {
  const bugun = new Date();


  let salaryDate = new Date(
    bugun.getFullYear(),
    bugun.getMonth(),
    15
  );


  if (bugun > salaryDate) {
    salaryDate = new Date(
      bugun.getFullYear(),
      bugun.getMonth() + 1,
      15
    );
  }

 
  const day = salaryDate.getDay();

  if (day === 6) {
   
    salaryDate.setDate(salaryDate.getDate() - 1);
  } else if (day === 0) {
   
    salaryDate.setDate(salaryDate.getDate() - 2);
  }

  return salaryDate;
}

console.log(maasGunu());

// Task 2
function gunFerqi(date1, date2) {
  const birinci = new Date(date1);
  const ikinci  = new Date(date2);

  const ferqi = Math.abs(ikinci - birinci);

  return ferqi / (1000 * 60 * 60 * 24);
}

console.log(gunFerqi("2026-07-10", "2026-07-27"));