export function getAppId() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.bundleIdentifier);
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

export function getAppIdSync() {
  return NSBundle.mainBundle.bundleIdentifier;
};

export function getVersionName() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString"));
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

export function getVersionNameSync() {
  return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString");
};

export function getVersionCode() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion"));
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};

export function getVersionCodeSync() {
  return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion");
};