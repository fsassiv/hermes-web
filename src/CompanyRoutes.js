const Company = resolve => {
  require.ensure(
    ["./views/company/Index.vue"],
    () => {
      resolve(require("./views/company/Index.vue"));
    },
    "Company"
  );
};

const Schedules = resolve => {
  require.ensure(
    ["./views/company/Schedules.vue"],
    () => {
      resolve(require("./views/company/Schedules.vue"));
    },
    "Schedules"
  );
};

const Rooms = resolve => {
  require.ensure(
    ["./views/company/Rooms.vue"],
    () => {
      resolve(require("./views/company/Rooms.vue"));
    },
    "Rooms"
  );
};

const SignUps = resolve => {
  require.ensure(
    ["./views/company/SignUps.vue"],
    () => {
      resolve(require("./views/company/SignUps.vue"));
    },
    "SignUps"
  );
};

const Departments = resolve => {
  require.ensure(
    ["./views/company/Departments.vue"],
    () => {
      resolve(require("./views/company/Departments.vue"));
    },
    "Departments"
  );
};

const Totem = resolve => {
  require.ensure(
    ["./views/company/Totem.vue"],
    () => {
      resolve(require("./views/company/Totem.vue"));
    },
    "Totem"
  );
};

exports.Company = Company;
exports.Schedules = Schedules;
exports.Rooms = Rooms;
exports.SignUps = SignUps;
exports.Departments = Departments;
exports.Totem = Totem;
