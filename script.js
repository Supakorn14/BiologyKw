document.getElementById("calculate-btn").addEventListener("click", () => {
  const allele1 = document.getElementById("allele1").value;
  const allele2 = document.getElementById("allele2").value;
  const allele3 = document.getElementById("allele3").value;
  const allele4 = document.getElementById("allele4").value;

  // ตัวอย่างวิธีคำนวณ
  const result = `${allele1}-${allele2}, ${allele3}-${allele4}`;
  
  // แสดงผลลัพธ์
  document.getElementById("result").innerText = result;
});
