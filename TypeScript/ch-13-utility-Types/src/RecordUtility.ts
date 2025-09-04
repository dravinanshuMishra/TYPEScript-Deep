console.log("RecordUtility.ts");


type Roles = "admin" | "user" | "guest";

type RolePermissions = Record<Roles, boolean>;

const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false
};

console.log(permissions);


/*
  Keys = K (यहाँ Roles) Values = T (यहाँ boolean) तो RolePermissions ऐसा type बनेगा जिसमें: Keys होंगे: "admin", "user", "guest" Value हमेशा boolean होगी
*/