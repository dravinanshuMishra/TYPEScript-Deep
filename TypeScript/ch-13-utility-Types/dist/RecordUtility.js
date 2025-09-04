"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("RecordUtility.ts");
const permissions = {
    admin: true,
    user: false,
    guest: false
};
console.log(permissions);
/*
  Keys = K (यहाँ Roles) Values = T (यहाँ boolean) तो RolePermissions ऐसा type बनेगा जिसमें: Keys होंगे: "admin", "user", "guest" Value हमेशा boolean होगी
*/ 
