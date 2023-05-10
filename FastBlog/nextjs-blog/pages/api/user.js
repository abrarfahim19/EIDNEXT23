import requestIp from "request-ip";

export default async function myRoute(req, res) {
  const detectedIp = requestIp.getClientIp(req);
  res.status(200).json({ ip: detectedIp });
}
