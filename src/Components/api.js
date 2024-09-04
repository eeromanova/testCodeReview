export default async function ExecuteCode(language, version, code) {
  const URL = "https://emkc.org/api/v2/piston/execute";
  const dataPost = {
    language: language,
    version: version,
    files: [{ content: code }],
  };
  console.log(dataPost);
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataPost),
  });
  const data = await response.json();
  return data;
}
