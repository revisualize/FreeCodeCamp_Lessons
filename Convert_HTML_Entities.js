function convertHTML(str) {
  // &colon;&rpar;
  const htmlChars = {
      "<": "&lt;",
      ">": "&gt;",
      "'": "&apos;",
      '"': "&quot;",
      "&": "&amp;"
   };
  let regex = new RegExp("[" + Object.keys(htmlChars).join("") + "]", "g");
  return str.replace(regex, (x) => htmlChars[x]);
}

convertHTML("Dolce & Gabbana"); // should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &quot;quotation marks&quot;.
convertHTML("Shindler's List"); // should return Shindler&apos;s List.
convertHTML("<>"); // should return &lt;&gt;.
convertHTML("abc"); // should return abc.
