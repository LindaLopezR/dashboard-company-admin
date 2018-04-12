// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by dashboard-company-admin.js.
import { name as packageName } from "meteor/dashboard-company-admin";

// Write your tests here!
// Here is an example.
Tinytest.add('dashboard-company-admin - example', function (test) {
  test.equal(packageName, "dashboard-company-admin");
});
