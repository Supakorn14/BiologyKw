document.querySelector('.result').addEventListener('click', function calculateGenetics() {
  // รับค่าจากฟอร์ม
  let p1 = document.getElementById("parent1").value.toUpperCase();
  let p2 = document.getElementById("parent2").value.toUpperCase();
  let p3 = document.getElementById("parent3").value.toUpperCase();
  let p4 = document.getElementById("parent4").value.toUpperCase();

  if (!p1 || !p2 || !p3 || !p4) {
    document.getElementById("results").innerHTML = "Please enter all alleles.";
    return;
  }

  // กำหนดคู่ที่เป็นไปได้
  let possibleCombinations = [p1 + p3, p1 + p4, p2 + p3, p2 + p4];

  // นับจำนวนของ AA, Aa, และ aa
  let counts = {
    "AA": 0,
    "Aa": 0,
    "aA": 0,
    "aa": 0
  };

  possibleCombinations.forEach(combination => {
    counts[combination]++;
  });

  // คำนวณเปอร์เซ็นต์ของแต่ละลักษณะ
  let total = possibleCombinations.length;
  let AA_percent = (counts["AA"] / total) * 100;
  let Aa_percent = ((counts["Aa"] + counts["aA"]) / total) * 100;
  let aa_percent = (counts["aa"] / total) * 100;

  // แสดงผลลัพธ์
  document.getElementById("results").innerHTML =
    `AA: ${AA_percent.toFixed(2)}%<br>` +
    `Aa: ${Aa_percent.toFixed(2)}%<br>` +
    `aa: ${aa_percent.toFixed(2)}%`;
});
