import requestIp from "request-ip";

export default async function myRoute(req, res) {
  const detectedIp = await requestIp.getClientIp(req);
  res.status(200).json({ ip: detectedIp });
}
