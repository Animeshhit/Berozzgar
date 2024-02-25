function generateUniqueDeviceInfo() {
  let deviceInfo = "";

  // Add some properties from the navigator object
  deviceInfo += navigator.userAgent || "";
  deviceInfo += navigator.platform || "";
  deviceInfo += navigator.language || "";

  // Create a hash of the concatenated information
  const hash = btoa(deviceInfo);

  return hash;
}

export default generateUniqueDeviceInfo;
