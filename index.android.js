import { Application } from "@nativescript/core";

export function getAppId() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var context = Application.android.context;
      resolve(context.getPackageName());
    }
    try {
      if (Application.android.context) {
        _resolve();
      } else {
        // if this is called before Application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

export function getAppIdSync() {
  return Application.android.context.getPackageName();
};

export function getVersionName() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var packageManager = Application.android.context.getPackageManager();
      resolve(packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionName);
    }
    try {
      if (Application.android.context) {
        _resolve();
      } else {
        // if this is called before Application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

export function getVersionNameSync() {
  var packageManager = Application.android.context.getPackageManager();
  return packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionName;
};

export function getVersionCode() {
  return new Promise(function(resolve, reject) {
    try {
      var packageManager = Application.android.context.getPackageManager();
      resolve("" + packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionCode);
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};

export function getVersionCodeSync() {
  var packageManager = Application.android.context.getPackageManager();
  return "" + packageManager.getPackageInfo(Application.android.context.getPackageName(), 0).versionCode;
};