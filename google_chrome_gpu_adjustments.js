export default async function handler(req, res) {
  const targetURL = "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/chocolatey_setup/index.html";
  
  const response = await fetch(targetURL);
  const html = await response.text();

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}

