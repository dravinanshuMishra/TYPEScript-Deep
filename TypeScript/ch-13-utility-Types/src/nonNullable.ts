type MaybeString = string | null | undefined | Number;

// NonNullable, remove null and undefined.
type StrictString = NonNullable<MaybeString>;

const str: StrictString = "hello";   // ✅
console.log(str);
const num: StrictString = 20;
console.log(num)
// const str2: StrictString = null;     // Error
